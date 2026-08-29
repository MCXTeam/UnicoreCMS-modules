import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { core } from 'unicore-api'
import type { ServerRecord, StaffMember } from 'unicore-api'
import { TeamNoteInput } from './dto/note.input'
import { TeamNote } from './entities/note.entity'
import { TeamCategory } from './entities/category.entity'
import { TeamMemberCategory } from './entities/member-category.entity'
import { CategoryInput } from './dto/category.input'

export interface TeamCard {
  uuid: string
  username: string
  label: string
  color: string | null
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

  memberCategoryIds(uuid: string): Promise<number[]> {
    return this.memberCategories
      .find({ where: { userUuid: uuid } })
      .then((rows) => rows.map((row) => row.categoryId))
  }

  async setMemberCategories(uuid: string, ids: number[]): Promise<void> {
    await this.memberCategories.delete({ userUuid: uuid })
    await this.memberCategories.insert(ids.map((categoryId) => ({ userUuid: uuid, categoryId })))
  }

  async categorySections(): Promise<TeamSection[]> {
    const [categories, members] = await Promise.all([this.listCategories(), core().staff.members()])

    if (!categories.length || !members.length) return []

    const links = await this.memberCategories.find()
    const byUuid = new Map(members.map((member) => [member.uuid, member]))
    const notes = await this.noteMap()
    const sections = new Map<number, TeamSection>()

    for (const category of categories) {
      sections.set(category.id, { id: `category-${category.id}`, title: category.name, icon: null, members: [] })
    }

    for (const link of links) {
      const member = byUuid.get(link.userUuid)
      const section = sections.get(link.categoryId)

      if (!member || !section) continue

      section.members.push(this.card(member, notes))
    }

    for (const section of sections.values()) section.members = this.sortCards(section.members)

    return [...sections.values()]
  }

  private sortCards(cards: TeamCard[]): TeamCard[] {
    return cards.slice().sort((left, right) => left.username.localeCompare(right.username))
  }

  async sections(globalTitle: string): Promise<TeamSection[]> {
    const members = await core().staff.members()

    if (!members.length) return []

    const [notes, servers] = await Promise.all([this.noteMap(), this.serverMap(members)])
    const sections = new Map<string, TeamSection>()

    for (const member of this.sorted(members)) {
      const key = member.serverId || GLOBAL
      const server = member.serverId ? servers.get(member.serverId) : null

      if (member.serverId && !server) continue

      if (!sections.has(key))
        sections.set(key, { id: key, title: server ? server.name : globalTitle, icon: server?.icon || null, members: [] })

      const section = sections.get(key)

      if (section.members.some((card) => card.uuid === member.uuid)) continue

      section.members.push(this.card(member, notes))
    }

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
      note: notes.get(member.uuid) || null,
      skin: member.skin ? { file: member.skin.file } : null,
    }
  }

  private sorted(members: StaffMember[]): StaffMember[] {
    return members.slice().sort((left, right) => right.priority - left.priority || left.username.localeCompare(right.username))
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
