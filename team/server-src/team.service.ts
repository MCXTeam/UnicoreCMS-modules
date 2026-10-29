import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { core } from 'unicore-api'
import type { RoleAppearance, ServerRecord, StaffMember } from 'unicore-api'
import { TeamNoteInput } from './dto/note.input'
import { TeamNote } from './entities/note.entity'
import { TeamCategory } from './entities/category.entity'
import { GLOBAL_CATEGORY_ID, TeamMemberCategory } from './entities/member-category.entity'
import { CategoryInput, MemberCategoriesInput } from './dto/category.input'

export interface TeamCard {
  uuid: string
  username: string
  label: string
  color: string | null
  role: RoleAppearance | null
  note: TeamNote | null
  skin: { file: string } | null
}

export interface TeamSection {
  id: string
  title: string
  icon: string | null
  members: TeamCard[]
}

export interface TeamCategoryRow {
  id: number
  name: string
  position: number
}

interface TeamEntry {
  member: StaffMember
  index: number | null
}

export interface TeamMemberSettings {
  global: boolean
  globalIndex: number | null
  categories: { categoryId: number; sortIndex: number | null }[]
}

const GLOBAL = 'global'

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamNote) private readonly notes: Repository<TeamNote>,
    @InjectRepository(TeamCategory) private readonly categories: Repository<TeamCategory>,
    @InjectRepository(TeamMemberCategory) private readonly memberCategories: Repository<TeamMemberCategory>,
  ) {}

  listCategories(): Promise<TeamCategory[]> {
    return this.categories.find({ order: { position: 'ASC', id: 'ASC' } })
  }

  async saveCategory(id: number | null, input: CategoryInput): Promise<TeamCategory> {
    const category = id ? await this.categories.findOneBy({ id }) : this.categories.create()

    if (id && !category) throw new Error('category_not_found')

    category.name = input.name
    category.position = input.position ?? (id ? category.position : (await this.categories.count()) + 1)

    return this.categories.save(category)
  }

  async removeCategory(id: number): Promise<void> {
    await this.memberCategories.delete({ categoryId: id })
    await this.categories.delete({ id })
  }

  async memberSettings(uuid: string): Promise<TeamMemberSettings> {
    const rows = await this.memberCategories.find({ where: { userUuid: uuid } })
    const global = rows.find((row) => row.categoryId === GLOBAL_CATEGORY_ID)

    return {
      global: Boolean(global),
      globalIndex: global?.sortIndex ?? null,
      categories: rows
        .filter((row) => row.categoryId !== GLOBAL_CATEGORY_ID)
        .map((row) => ({ categoryId: row.categoryId, sortIndex: row.sortIndex ?? null })),
    }
  }

  async setMemberCategories(uuid: string, input: MemberCategoriesInput): Promise<void> {
    const unique = new Map<number, number | null>()

    if (input.global) unique.set(GLOBAL_CATEGORY_ID, input.globalIndex ?? null)

    for (const item of input.categories || [])
      if (item.categoryId !== GLOBAL_CATEGORY_ID) unique.set(item.categoryId, item.sortIndex ?? null)

    await this.memberCategories.delete({ userUuid: uuid })

    if (!unique.size) return

    await this.memberCategories.insert(
      [...unique.entries()].map(([categoryId, sortIndex]) => ({ userUuid: uuid, categoryId, sortIndex })),
    )
  }

  async categorySections(restTitle: string, globalTitle: string): Promise<TeamSection[]> {
    const [categories, members] = await Promise.all([this.listCategories(), core().staff.members()])

    if (!members.length) return []

    const links = await this.memberCategories.find()

    if (!categories.length && !links.some((link) => link.categoryId === GLOBAL_CATEGORY_ID)) return []

    const byUuid = new Map(members.map((member) => [member.uuid, member]))
    const notes = await this.noteMap()
    const sections = new Map<number, { section: TeamSection; entries: TeamEntry[] }>()
    const placed = new Set<string>()

    sections.set(GLOBAL_CATEGORY_ID, {
      section: { id: 'global', title: globalTitle, icon: null, members: [] },
      entries: [],
    })

    for (const category of categories) {
      sections.set(category.id, {
        section: { id: `category-${category.id}`, title: category.name, icon: null, members: [] },
        entries: [],
      })
    }

    for (const link of links) {
      const member = byUuid.get(link.userUuid)
      const bucket = sections.get(link.categoryId)

      if (!member || !bucket) continue

      placed.add(member.uuid)
      bucket.entries.push({ member, index: link.sortIndex ?? null })
    }

    const result: TeamSection[] = []

    for (const [id, bucket] of sections) {
      if (id === GLOBAL_CATEGORY_ID && !bucket.entries.length) continue

      bucket.section.members = this.orderEntries(bucket.entries).map((entry) => this.card(entry.member, notes))
      result.push(bucket.section)
    }

    const rest = members.filter((member) => !placed.has(member.uuid))
    const unique = new Map(rest.map((member) => [member.uuid, member]))

    if (unique.size)
      result.push({
        id: 'uncategorized',
        title: restTitle,
        icon: null,
        members: this.orderEntries([...unique.values()].map((member) => ({ member, index: null }))).map((entry) =>
          this.card(entry.member, notes),
        ),
      })

    return result
  }

  private orderEntries(entries: TeamEntry[]): TeamEntry[] {
    const unique = new Map<string, TeamEntry>()

    for (const entry of entries) if (!unique.has(entry.member.uuid)) unique.set(entry.member.uuid, entry)

    return [...unique.values()].sort((left, right) => {
      if (left.index !== right.index) {
        if (left.index === null) return 1
        if (right.index === null) return -1

        return left.index - right.index
      }

      return right.member.priority - left.member.priority || left.member.username.localeCompare(right.member.username)
    })
  }

  async sections(globalTitle: string): Promise<TeamSection[]> {
    const members = await core().staff.members()

    if (!members.length) return []

    const [notes, servers, pinned] = await Promise.all([this.noteMap(), this.serverMap(members), this.globalMembers()])
    const sections = new Map<string, TeamSection>()

    const place = (key: string, title: string, icon: string | null, member: StaffMember) => {
      if (!sections.has(key)) sections.set(key, { id: key, title, icon, members: [] })

      const section = sections.get(key)

      if (section.members.some((card) => card.uuid === member.uuid)) return

      section.members.push(this.card(member, notes))
    }

    for (const member of this.sorted(members)) {
      const server = member.serverId ? servers.get(member.serverId) : null

      if (member.serverId && !server) continue

      if (server) place(server.id, server.name, server.icon || null, member)
      if (!server || pinned.has(member.uuid)) place(GLOBAL, globalTitle, null, member)
    }

    const globalSection = sections.get(GLOBAL)

    if (globalSection)
      globalSection.members.sort((left, right) => {
        const leftIndex = pinned.get(left.uuid) ?? null
        const rightIndex = pinned.get(right.uuid) ?? null

        if (leftIndex === rightIndex) return 0
        if (leftIndex === null) return 1
        if (rightIndex === null) return -1

        return leftIndex - rightIndex
      })

    const order = [...servers.keys()]
    const rank = (section: TeamSection) => (section.id === GLOBAL ? -1 : order.indexOf(section.id))

    return [...sections.values()].sort((left, right) => rank(left) - rank(right))
  }

  async list(): Promise<TeamCard[]> {
    const members = await core().staff.members()
    const notes = await this.noteMap()
    const seen = new Set<string>()
    const cards: TeamCard[] = []

    for (const member of this.sorted(members)) {
      if (seen.has(member.uuid)) continue

      seen.add(member.uuid)
      cards.push(this.card(member, notes))
    }

    return cards
  }

  async saveNote(uuid: string, input: TeamNoteInput): Promise<TeamNote> {
    const text = (input.text || '').trim()

    if (!text) {
      await this.notes.delete({ id: uuid })

      return null
    }

    return this.notes.save(this.notes.create({ id: uuid, text }))
  }

  private card(member: StaffMember, notes: Map<string, TeamNote>): TeamCard {
    return {
      uuid: member.uuid,
      username: member.username,
      label: member.label,
      color: member.color || null,
      role: member.role || null,
      note: notes.get(member.uuid) || null,
      skin: member.skin ? { file: member.skin.file } : null,
    }
  }

  private sorted(members: StaffMember[]): StaffMember[] {
    return members.slice().sort((left, right) => right.priority - left.priority || left.username.localeCompare(right.username))
  }

  private async globalMembers(): Promise<Map<string, number | null>> {
    const rows = await this.memberCategories.find({ where: { categoryId: GLOBAL_CATEGORY_ID } })

    return new Map(rows.map((row) => [row.userUuid, row.sortIndex ?? null]))
  }

  private async noteMap(): Promise<Map<string, TeamNote>> {
    const rows = await this.notes.find()

    return new Map(rows.map((row) => [row.id, row]))
  }

  private async serverMap(members: StaffMember[]): Promise<Map<string, ServerRecord>> {
    if (!members.some((member) => member.serverId)) return new Map()

    const servers = await core().servers.all()

    return new Map(servers.map((server) => [server.id, server]))
  }
}
