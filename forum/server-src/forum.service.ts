import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, IsNull, Repository } from 'typeorm'
import type { UserRecord } from 'unicore-api'
import { audit, core, modulePrefixes, paginate, Paginated, PaginateQuery } from 'unicore-api/server'
import {
  AUDIT_POST_DELETE,
  AUDIT_POST_EDIT,
  AUDIT_TOPIC_CLOSE,
  AUDIT_TOPIC_DELETE,
  auditAction,
  CATEGORY,
  LATEST_TOPICS_LIMIT,
  LEADERS_LIMIT,
  NODE_DEPTH_MAX,
  POSTS_PER_PAGE,
  REACTION_IDS,
  SEARCH_LIMIT,
  SEARCH_MIN_LENGTH,
  SETTING_PLAYER_CLOSE,
  TOPICS_PER_PAGE,
} from '../shared/constants'
import { ForumNode } from './entities/node.entity'
import { ForumPost } from './entities/post.entity'
import { ForumReaction } from './entities/reaction.entity'
import { ForumRead } from './entities/read.entity'
import { ForumTopic } from './entities/topic.entity'
import { ForumWatermark } from './entities/watermark.entity'
import { editsForeignPosts, moderates, moderatesEverything, reads, viewerOf, writes, Viewer } from './forum-access'
import { NodeInput } from './dto/node.input'
import { PostInput } from './dto/post.input'
import { ReactionInput } from './dto/reaction.input'
import { TopicInput } from './dto/topic.input'
import { TopicUpdateInput } from './dto/topic-update.input'

interface UserCard {
  uuid: string
  username: string
  skin: unknown
  role: unknown
}

interface NodeRef {
  id: number
  slug: string
  title: string
}

interface LastPost {
  topic_id: number
  title: string
  at: Date
  user: UserCard | null
}

const EXCERPT_LENGTH = 140

const PLAYER_CLOSE_KEY = `${modulePrefixes('forum').config}${SETTING_PLAYER_CLOSE}`

const plain = (html: string): string =>
  String(html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const excerpt = (html: string): string => {
  const text = plain(html)

  return text.length > EXCERPT_LENGTH ? `${text.slice(0, EXCERPT_LENGTH)}…` : text
}

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(ForumNode) private readonly nodes: Repository<ForumNode>,
    @InjectRepository(ForumTopic) private readonly topics: Repository<ForumTopic>,
    @InjectRepository(ForumPost) private readonly posts: Repository<ForumPost>,
    @InjectRepository(ForumReaction) private readonly reactions: Repository<ForumReaction>,
    @InjectRepository(ForumRead) private readonly reads: Repository<ForumRead>,
    @InjectRepository(ForumWatermark) private readonly watermarks: Repository<ForumWatermark>,
  ) {}

  async index(user: UserRecord | null) {
    const viewer = viewerOf(user)
    const all = await this.tree()
    const visible = all.filter((node) => reads(viewer, this.branch(node, all)))
    const unread = await this.unreadByNode(viewer, all)
    const last = await this.lastInfo(visible)
    const roots = visible.filter((node) => !node.parent_id)

    const sections = roots.map((root) => ({
      ...this.nodeView(root, unread, last),
      children: visible
        .filter((node) => node.parent_id === root.id)
        .map((node) => ({
          ...this.nodeView(node, unread, last),
          children_count: visible.filter((child) => child.parent_id === node.id).length,
        })),
    }))

    const [latest, leaders, stats] = await Promise.all([
      this.latest(viewer, all, visible),
      this.leaders(),
      this.stats(),
    ])

    return {
      sections,
      latest,
      leaders,
      stats,
      can: { manage: moderatesEverything(viewer), write: Boolean(viewer.uuid) },
    }
  }

  async node(slug: string, user: UserRecord | null, query: PaginateQuery) {
    const viewer = viewerOf(user)
    const all = await this.tree()
    const node = all.find((item) => item.slug === slug)

    if (!node) throw new NotFoundException()

    const branch = this.branch(node, all)

    if (!reads(viewer, branch)) throw new ForbiddenException()

    const unread = await this.unreadByNode(viewer, all)
    const visibleChildren = all.filter((item) => item.parent_id === node.id && reads(viewer, this.branch(item, all)))
    const last = await this.lastInfo([node, ...visibleChildren])
    const children = visibleChildren.map((item) => ({
      ...this.nodeView(item, unread, last),
      children_count: all.filter((child) => child.parent_id === item.id).length,
    }))

    const page = await paginate(
      { ...query, limit: query.limit || TOPICS_PER_PAGE },
      this.topics.createQueryBuilder('topic').where('topic.node_id = :node', { node: node.id }).andWhere('topic.deleted_at IS NULL'),
      {
        sortableColumns: ['last_post_at', 'created_at', 'posts_count', 'views', 'title'],
        searchableColumns: ['title'],
        defaultSortBy: [
          ['pinned', 'DESC'],
          ['last_post_at', 'DESC'],
        ],
        defaultLimit: TOPICS_PER_PAGE,
        maxLimit: TOPICS_PER_PAGE,
      },
    )

    return {
      node: { ...this.nodeView(node, unread, last), breadcrumbs: branch.map((item) => this.ref(item)) },
      children,
      topics: await this.topicPage(page, viewer),
      can: {
        write: writes(viewer, branch),
        moderate: moderates(viewer, branch),
      },
    }
  }

  async topic(id: number, user: UserRecord | null, query: PaginateQuery) {
    const viewer = viewerOf(user)
    const all = await this.tree()
    const topic = await this.topics.findOne({ where: { id } })

    if (!topic || (topic.deleted_at && !moderatesEverything(viewer))) throw new NotFoundException()

    const node = all.find((item) => item.id === topic.node_id)

    if (!node) throw new NotFoundException()

    const branch = this.branch(node, all)

    if (!reads(viewer, branch)) throw new ForbiddenException()

    const moderator = moderates(viewer, branch)

    const page = await paginate(
      { ...query, limit: query.limit || POSTS_PER_PAGE },
      this.posts
        .createQueryBuilder('post')
        .where('post.topic_id = :topic', { topic: topic.id })
        .andWhere(moderator ? '1 = 1' : 'post.deleted_at IS NULL'),
      {
        sortableColumns: ['created_at', 'id'],
        defaultSortBy: [
          ['created_at', 'ASC'],
          ['id', 'ASC'],
        ],
        defaultLimit: POSTS_PER_PAGE,
        maxLimit: POSTS_PER_PAGE,
      },
    )

    const replyIds = page.data.map((post) => post.reply_to_id).filter(Boolean) as number[]
    const replies = replyIds.length ? await this.posts.find({ where: { id: In(replyIds) } }) : []
    const cards = await this.cards([
      topic.author_uuid,
      ...page.data.map((post) => post.author_uuid),
      ...replies.map((post) => post.author_uuid),
    ])
    const reactions = await this.reactionsOf(
      page.data.map((post) => post.id),
      viewer,
    )

    await this.topics.increment({ id: topic.id }, 'views', 1)

    if (viewer.uuid && page.data.length) await this.markRead(viewer.uuid, topic, page.data[page.data.length - 1].id)

    return {
      topic: {
        id: topic.id,
        title: topic.title,
        pinned: topic.pinned,
        closed: topic.closed,
        deleted: Boolean(topic.deleted_at),
        views: topic.views,
        posts_count: topic.posts_count,
        created_at: topic.created_at,
        author: cards.get(topic.author_uuid) || null,
        node: this.ref(node),
        breadcrumbs: branch.map((item) => this.ref(item)),
      },
      posts: {
        ...page,
        data: page.data.map((post) => ({
          id: post.id,
          content: post.deleted_at && !moderator ? '' : post.content,
          created_at: post.created_at,
          edited_at: post.edited_at,
          deleted: Boolean(post.deleted_at),
          first: post.first,
          author: cards.get(post.author_uuid) || null,
          reply_to: this.replyView(post.reply_to_id, replies, cards),
          reactions: reactions.get(post.id) || [],
          can: {
            edit: this.canEditPost(viewer, post, branch),
            delete: this.canRemovePost(viewer, post, moderator),
          },
        })),
      },
      can: {
        reply: !topic.closed && writes(viewer, branch),
        moderate: moderator,
        close: await this.canCloseTopic(viewer, topic, moderator),
        open: this.canOpenTopic(viewer, topic, moderator),
      },
    }
  }

  async createTopic(slug: string, user: UserRecord, input: TopicInput) {
    const viewer = viewerOf(user)
    const all = await this.tree()
    const node = all.find((item) => item.slug === slug)

    if (!node) throw new NotFoundException()

    const branch = this.branch(node, all)

    if (!writes(viewer, branch)) throw new ForbiddenException()

    const now = new Date()
    const topic = await this.topics.save(
      this.topics.create({
        node_id: node.id,
        author_uuid: user.uuid,
        title: input.title,
        last_post_at: now,
        last_post_uuid: user.uuid,
        posts_count: 1,
      }),
    )

    const post = await this.posts.save(
      this.posts.create({ topic_id: topic.id, author_uuid: user.uuid, content: input.content, first: true }),
    )

    await this.topics.update({ id: topic.id }, { last_post_id: post.id })
    await this.touch(branch, topic.id, user.uuid, now, { topics: 1, posts: 1 })
    await this.markRead(user.uuid, topic, post.id)

    return { id: topic.id }
  }

  async reply(topicId: number, user: UserRecord, input: PostInput) {
    const viewer = viewerOf(user)
    const all = await this.tree()
    const topic = await this.topics.findOne({ where: { id: topicId, deleted_at: IsNull() } })

    if (!topic) throw new NotFoundException()

    const node = all.find((item) => item.id === topic.node_id)
    const branch = node ? this.branch(node, all) : []

    if (!node || !writes(viewer, branch)) throw new ForbiddenException()
    if (topic.closed && !moderates(viewer, branch)) throw new ForbiddenException()

    if (input.reply_to_id) {
      const parent = await this.posts.findOne({ where: { id: input.reply_to_id, topic_id: topic.id } })

      if (!parent) throw new BadRequestException('Сообщение, на которое отвечают, не найдено')
    }

    const now = new Date()
    const post = await this.posts.save(
      this.posts.create({
        topic_id: topic.id,
        author_uuid: user.uuid,
        content: input.content,
        reply_to_id: input.reply_to_id || null,
      }),
    )

    await this.topics.update(
      { id: topic.id },
      { last_post_at: now, last_post_id: post.id, last_post_uuid: user.uuid, posts_count: topic.posts_count + 1 },
    )
    await this.touch(branch, topic.id, user.uuid, now, { topics: 0, posts: 1 })
    await this.markRead(user.uuid, topic, post.id)
    await this.notifyReply(topic, post, user)

    return { id: post.id, page: Math.ceil((topic.posts_count + 1) / POSTS_PER_PAGE) }
  }

  async editPost(id: number, user: UserRecord, input: PostInput) {
    const viewer = viewerOf(user)
    const { post, topic, branch } = await this.locate(id, viewer)

    if (!this.canEditPost(viewer, post, branch)) throw new ForbiddenException()

    await this.posts.update({ id: post.id }, { content: input.content, edited_at: new Date(), edited_by: user.uuid })

    if (post.author_uuid !== user.uuid)
      this.log(AUDIT_POST_EDIT, user, topic, post.id, { content: [excerpt(post.content), excerpt(input.content)] })

    return { id: post.id }
  }

  async removePost(id: number, user: UserRecord) {
    const viewer = viewerOf(user)
    const { post, topic, branch } = await this.locate(id, viewer)
    const moderator = moderates(viewer, branch)

    if (!this.canRemovePost(viewer, post, moderator)) throw new ForbiddenException()
    if (post.first) throw new BadRequestException('Первое сообщение удаляется вместе с темой')

    await this.posts.update({ id: post.id }, { deleted_at: new Date(), deleted_by: user.uuid })
    await this.topics.decrement({ id: post.topic_id }, 'posts_count', 1)

    if (post.author_uuid !== user.uuid) this.log(AUDIT_POST_DELETE, user, topic, post.id)

    return { id: post.id }
  }

  async react(id: number, user: UserRecord, input: ReactionInput) {
    const viewer = viewerOf(user)
    const { post, branch } = await this.locate(id, viewer)

    if (!reads(viewer, branch) || post.deleted_at) throw new ForbiddenException()
    if (!REACTION_IDS.includes(input.kind)) throw new BadRequestException('Неизвестная реакция')

    const existing = await this.reactions.findOne({ where: { post_id: post.id, user_uuid: user.uuid, kind: input.kind } })

    if (existing) await this.reactions.delete({ post_id: post.id, user_uuid: user.uuid, kind: input.kind })
    else await this.reactions.save(this.reactions.create({ post_id: post.id, user_uuid: user.uuid, kind: input.kind }))

    const map = await this.reactionsOf([post.id], viewer)

    return map.get(post.id) || []
  }

  async updateTopic(id: number, user: UserRecord, input: TopicUpdateInput) {
    const viewer = viewerOf(user)
    const all = await this.tree()
    const topic = await this.topics.findOne({ where: { id } })

    if (!topic) throw new NotFoundException()

    const node = all.find((item) => item.id === topic.node_id)
    const branch = node ? this.branch(node, all) : []
    const moderator = moderates(viewer, branch)
    const author = viewer.uuid === topic.author_uuid

    if (!moderator && !author) throw new ForbiddenException()

    const patch: Partial<ForumTopic> = {}

    if (input.closed !== undefined && input.closed !== topic.closed) {
      if (input.closed && !(await this.canCloseTopic(viewer, topic, moderator))) throw new ForbiddenException()
      if (!input.closed && !this.canOpenTopic(viewer, topic, moderator)) throw new ForbiddenException()

      patch.closed = input.closed
      patch.closed_by = input.closed ? viewer.uuid : null

      if (moderator) this.log(AUDIT_TOPIC_CLOSE, user, topic, topic.id, { closed: [topic.closed, input.closed] })
    }

    if (input.title !== undefined && (moderator || author)) patch.title = input.title

    if (input.pinned !== undefined) {
      if (!moderator) throw new ForbiddenException()

      patch.pinned = input.pinned
    }

    if (input.node_id !== undefined && input.node_id !== topic.node_id) {
      if (!moderator) throw new ForbiddenException()

      const target = all.find((item) => item.id === input.node_id)

      if (!target) throw new BadRequestException('Раздел не найден')
      if (!moderates(viewer, this.branch(target, all))) throw new ForbiddenException()

      patch.node_id = target.id

      await this.moveCounters(branch, this.branch(target, all), topic)
    }

    if (Object.keys(patch).length) await this.topics.update({ id: topic.id }, patch)

    return { id: topic.id }
  }

  async removeTopic(id: number, user: UserRecord) {
    const viewer = viewerOf(user)
    const all = await this.tree()
    const topic = await this.topics.findOne({ where: { id } })

    if (!topic) throw new NotFoundException()

    const node = all.find((item) => item.id === topic.node_id)
    const branch = node ? this.branch(node, all) : []

    if (!moderates(viewer, branch) && viewer.uuid !== topic.author_uuid) throw new ForbiddenException()

    await this.topics.update({ id: topic.id }, { deleted_at: new Date() })

    if (topic.author_uuid !== user.uuid) this.log(AUDIT_TOPIC_DELETE, user, topic, topic.id)

    for (const item of branch)
      await this.nodes.update({ id: item.id }, {
        topics_count: Math.max(0, item.topics_count - 1),
        posts_count: Math.max(0, item.posts_count - topic.posts_count),
      })

    return { id: topic.id }
  }

  async search(term: string, user: UserRecord | null) {
    const query = String(term || '').trim()

    if (query.length < SEARCH_MIN_LENGTH) return { topics: [], posts: [] }

    const viewer = viewerOf(user)
    const all = await this.tree()
    const allowed = all.filter((node) => reads(viewer, this.branch(node, all))).map((node) => node.id)

    if (!allowed.length) return { topics: [], posts: [] }

    const topics = await this.topics
      .createQueryBuilder('topic')
      .where('topic.node_id IN (:...allowed)', { allowed })
      .andWhere('topic.deleted_at IS NULL')
      .andWhere('topic.title LIKE :term', { term: `%${query}%` })
      .orderBy('topic.last_post_at', 'DESC')
      .take(SEARCH_LIMIT)
      .getMany()

    const posts = await this.posts
      .createQueryBuilder('post')
      .innerJoin(ForumTopic, 'topic', 'topic.id = post.topic_id')
      .where('topic.node_id IN (:...allowed)', { allowed })
      .andWhere('topic.deleted_at IS NULL')
      .andWhere('post.deleted_at IS NULL')
      .andWhere('post.content LIKE :term', { term: `%${query}%` })
      .orderBy('post.created_at', 'DESC')
      .take(SEARCH_LIMIT)
      .getMany()

    const topicIds = [...new Set(posts.map((post) => post.topic_id))]
    const postTopics = topicIds.length ? await this.topics.find({ where: { id: In(topicIds) } }) : []
    const cards = await this.cards([...topics.map((topic) => topic.author_uuid), ...posts.map((post) => post.author_uuid)])
    const byId = new Map(all.map((node) => [node.id, node]))

    return {
      topics: topics.map((topic) => ({
        id: topic.id,
        title: topic.title,
        created_at: topic.created_at,
        author: cards.get(topic.author_uuid) || null,
        node: this.refOrNull(byId.get(topic.node_id)),
      })),
      posts: posts.map((post) => {
        const topic = postTopics.find((item) => item.id === post.topic_id)

        return {
          id: post.id,
          topic_id: post.topic_id,
          topic_title: topic?.title || '',
          excerpt: excerpt(post.content),
          created_at: post.created_at,
          author: cards.get(post.author_uuid) || null,
          node: this.refOrNull(topic ? byId.get(topic.node_id) : undefined),
        }
      }),
    }
  }

  async markAllRead(uuid: string) {
    const top = await this.posts.createQueryBuilder('post').select('MAX(post.id)', 'last').getRawOne<{ last: number }>()

    await this.watermarks.upsert({ user_uuid: uuid, last_post_id: Number(top?.last || 0) }, ['user_uuid'])
    await this.reads.delete({ user_uuid: uuid })

    return { done: true }
  }

  async adminNodes() {
    const all = await this.tree()

    return all.map((node) => ({
      id: node.id,
      parent_id: node.parent_id || null,
      slug: node.slug,
      title: node.title,
      description: node.description,
      icon: node.icon,
      position: node.position,
      locked: node.locked,
      hidden: node.hidden,
      read_permission: node.read_permission,
      write_permission: node.write_permission,
      moderator_roles: node.moderator_roles || [],
      topics_count: node.topics_count,
      posts_count: node.posts_count,
    }))
  }

  async createNode(input: NodeInput) {
    await this.assertSlugFree(input.slug)
    await this.assertDepth(input.parent_id)

    const node = await this.nodes.save(this.nodes.create(this.nodePatch(input)))

    return { id: node.id }
  }

  async updateNode(id: number, input: NodeInput) {
    const node = await this.nodes.findOne({ where: { id } })

    if (!node) throw new NotFoundException()

    await this.assertSlugFree(input.slug, id)

    if (input.parent_id === id) throw new BadRequestException('Раздел не может быть вложен сам в себя')

    if (input.parent_id) {
      const all = await this.tree()

      if (this.branch(all.find((item) => item.id === input.parent_id), all).some((item) => item.id === id))
        throw new BadRequestException('Раздел нельзя перенести в собственный подраздел')
    }

    await this.assertDepth(input.parent_id)
    await this.nodes.update({ id }, this.nodePatch(input))

    return { id }
  }

  async removeNode(id: number) {
    const node = await this.nodes.findOne({ where: { id } })

    if (!node) throw new NotFoundException()

    const children = await this.nodes.count({ where: { parent_id: id } })

    if (children) throw new BadRequestException('Сначала удалите или перенесите подразделы')

    const topics = await this.topics.count({ where: { node_id: id, deleted_at: IsNull() } })

    if (topics) throw new BadRequestException('В разделе есть темы')

    await this.nodes.delete({ id })

    return { id }
  }

  private nodePatch(input: NodeInput): Partial<ForumNode> {
    return {
      slug: input.slug,
      title: input.title,
      description: input.description || null,
      icon: input.icon || null,
      parent_id: input.parent_id || null,
      position: input.position ?? 100,
      locked: Boolean(input.locked),
      hidden: Boolean(input.hidden),
      read_permission: input.read_permission || null,
      write_permission: input.write_permission || null,
      moderator_roles: input.moderator_roles?.length ? input.moderator_roles : null,
    }
  }

  private async assertSlugFree(slug: string, exceptId?: number) {
    const existing = await this.nodes.findOne({ where: { slug } })

    if (existing && existing.id !== exceptId) throw new BadRequestException('Такой адрес раздела уже занят')
  }

  private async assertDepth(parentId?: number) {
    if (!parentId) return

    const all = await this.tree()
    const parent = all.find((item) => item.id === parentId)

    if (!parent) throw new BadRequestException('Родительский раздел не найден')
    if (this.branch(parent, all).length >= NODE_DEPTH_MAX) throw new BadRequestException('Слишком глубокая вложенность разделов')
  }

  private async locate(postId: number, viewer: Viewer) {
    const post = await this.posts.findOne({ where: { id: postId } })

    if (!post) throw new NotFoundException()

    const topic = await this.topics.findOne({ where: { id: post.topic_id } })
    const all = await this.tree()
    const node = topic ? all.find((item) => item.id === topic.node_id) : undefined

    if (!topic || !node) throw new NotFoundException()

    const branch = this.branch(node, all)

    if (!reads(viewer, branch)) throw new ForbiddenException()

    return { post, topic, node, branch }
  }

  private canEditPost(viewer: Viewer, post: ForumPost, branch: ForumNode[]): boolean {
    if (viewer.uuid && viewer.uuid === post.author_uuid) return !post.deleted_at

    return editsForeignPosts(viewer, branch)
  }

  private canRemovePost(viewer: Viewer, post: ForumPost, moderator: boolean): boolean {
    if (moderator) return true
    if (!viewer.uuid || viewer.uuid !== post.author_uuid) return false

    return !post.deleted_at
  }

  private playerClose(): Promise<boolean> {
    return core().config.getBoolean(PLAYER_CLOSE_KEY, true)
  }

  private async canCloseTopic(viewer: Viewer, topic: ForumTopic, moderator: boolean): Promise<boolean> {
    if (topic.closed) return false
    if (moderator) return true
    if (viewer.uuid !== topic.author_uuid) return false

    return this.playerClose()
  }

  private canOpenTopic(viewer: Viewer, topic: ForumTopic, moderator: boolean): boolean {
    if (!topic.closed) return false
    if (moderator) return true

    return Boolean(viewer.uuid) && viewer.uuid === topic.author_uuid && topic.closed_by === viewer.uuid
  }

  private log(
    action: string,
    user: UserRecord,
    topic: ForumTopic,
    targetId: number | string,
    changes?: Record<string, [unknown, unknown]>,
  ): void {
    audit().record({
      action: auditAction(action),
      actor: { type: 'user', id: user.uuid, name: user.username },
      target: { type: 'forum', id: String(targetId), name: topic.title },
      changes: changes || null,
    })
  }

  private replyView(id: number | null, replies: ForumPost[], cards: Map<string, UserCard>) {
    if (!id) return null

    const parent = replies.find((post) => post.id === id)

    if (!parent) return null

    return {
      id: parent.id,
      excerpt: parent.deleted_at ? '' : excerpt(parent.content),
      author: cards.get(parent.author_uuid) || null,
    }
  }

  private async topicPage(page: Paginated<ForumTopic>, viewer: Viewer) {
    const cards = await this.cards([
      ...page.data.map((topic) => topic.author_uuid),
      ...page.data.map((topic) => topic.last_post_uuid),
    ])
    const unread = await this.unreadTopics(viewer, page.data)

    return {
      ...page,
      data: page.data.map((topic) => ({
        id: topic.id,
        title: topic.title,
        pinned: topic.pinned,
        closed: topic.closed,
        views: topic.views,
        posts_count: topic.posts_count,
        created_at: topic.created_at,
        last_post_at: topic.last_post_at,
        author: cards.get(topic.author_uuid) || null,
        last_author: topic.last_post_uuid ? cards.get(topic.last_post_uuid) || null : null,
        unread: unread.has(topic.id),
        pages: Math.max(1, Math.ceil(topic.posts_count / POSTS_PER_PAGE)),
      })),
    }
  }

  private async unreadTopics(viewer: Viewer, topics: ForumTopic[]): Promise<Set<number>> {
    if (!viewer.uuid || !topics.length) return new Set()

    const ids = topics.map((topic) => topic.id)
    const [rows, watermark] = await Promise.all([
      this.reads.find({ where: { user_uuid: viewer.uuid, topic_id: In(ids) } }),
      this.watermarks.findOne({ where: { user_uuid: viewer.uuid } }),
    ])
    const seen = new Map(rows.map((row) => [row.topic_id, row.last_post_id]))
    const floor = watermark?.last_post_id ?? 0

    return new Set(
      topics.filter((topic) => topic.last_post_id > Math.max(seen.get(topic.id) ?? 0, floor)).map((topic) => topic.id),
    )
  }

  private async unreadByNode(viewer: Viewer, all: ForumNode[]): Promise<Set<number>> {
    const result = new Set<number>()

    if (!viewer.uuid) return result

    const watermark = await this.watermarks.findOne({ where: { user_uuid: viewer.uuid } })
    const floor = watermark?.last_post_id ?? 0
    const rows = await this.topics
      .createQueryBuilder('topic')
      .select('topic.node_id', 'node_id')
      .leftJoin(ForumRead, 'read', 'read.topic_id = topic.id AND read.user_uuid = :uuid', { uuid: viewer.uuid })
      .where('topic.deleted_at IS NULL')
      .andWhere('topic.last_post_id > GREATEST(COALESCE(read.last_post_id, 0), :floor)', { floor })
      .groupBy('topic.node_id')
      .getRawMany<{ node_id: number }>()
    const byId = new Map(all.map((node) => [node.id, node]))

    for (const row of rows)
      for (const item of this.branch(byId.get(Number(row.node_id)), all)) result.add(item.id)

    return result
  }

  private async latest(viewer: Viewer, all: ForumNode[], visible: ForumNode[]) {
    const allowed = visible.map((node) => node.id)

    if (!allowed.length) return []

    const topics = await this.topics.find({
      where: { node_id: In(allowed), deleted_at: IsNull() },
      order: { last_post_at: 'DESC' },
      take: LATEST_TOPICS_LIMIT,
    })
    const cards = await this.cards(topics.map((topic) => topic.last_post_uuid || topic.author_uuid))
    const byId = new Map(all.map((node) => [node.id, node]))

    return topics.map((topic) => ({
      id: topic.id,
      title: topic.title,
      last_post_at: topic.last_post_at,
      author: cards.get(topic.last_post_uuid || topic.author_uuid) || null,
      node: this.refOrNull(byId.get(topic.node_id)),
    }))
  }

  private async leaders() {
    const rows = await this.posts
      .createQueryBuilder('post')
      .select('post.author_uuid', 'uuid')
      .addSelect('COUNT(post.id)', 'posts')
      .where('post.deleted_at IS NULL')
      .groupBy('post.author_uuid')
      .orderBy('posts', 'DESC')
      .take(LEADERS_LIMIT)
      .getRawMany<{ uuid: string; posts: string }>()

    const cards = await this.cards(rows.map((row) => row.uuid))

    return rows
      .map((row) => ({ user: cards.get(row.uuid) || null, posts: Number(row.posts) }))
      .filter((row) => row.user)
  }

  private async stats() {
    const [topics, posts, authors] = await Promise.all([
      this.topics.count({ where: { deleted_at: IsNull() } }),
      this.posts.count({ where: { deleted_at: IsNull() } }),
      this.posts
        .createQueryBuilder('post')
        .select('COUNT(DISTINCT post.author_uuid)', 'authors')
        .where('post.deleted_at IS NULL')
        .getRawOne<{ authors: string }>(),
    ])

    return { topics, posts, authors: Number(authors?.authors || 0) }
  }

  private async reactionsOf(postIds: number[], viewer: Viewer) {
    const result = new Map<number, { kind: string; count: number; mine: boolean }[]>()

    if (!postIds.length) return result

    const rows = await this.reactions.find({ where: { post_id: In(postIds) } })

    for (const id of postIds) {
      const own = rows.filter((row) => row.post_id === id)
      const kinds = REACTION_IDS.map((kind) => ({
        kind,
        count: own.filter((row) => row.kind === kind).length,
        mine: Boolean(viewer.uuid && own.some((row) => row.kind === kind && row.user_uuid === viewer.uuid)),
      })).filter((entry) => entry.count > 0)

      result.set(id, kinds)
    }

    return result
  }

  private async cards(uuids: (string | null)[]): Promise<Map<string, UserCard>> {
    const unique = [...new Set(uuids.filter(Boolean) as string[])]

    if (!unique.length) return new Map()

    const users = await core().users.getMany(unique)

    return new Map(
      users.map((user) => [user.uuid, { uuid: user.uuid, username: user.username, skin: user.skin || null, role: user.role || null }]),
    )
  }

  private async markRead(uuid: string, topic: ForumTopic, lastPostId: number) {
    const current = await this.reads.findOne({ where: { user_uuid: uuid, topic_id: topic.id } })

    if (current && current.last_post_id >= lastPostId) return

    await this.reads.upsert({ user_uuid: uuid, topic_id: topic.id, last_post_id: lastPostId }, ['user_uuid', 'topic_id'])
  }

  private async touch(branch: ForumNode[], topicId: number, uuid: string, at: Date, delta: { topics: number; posts: number }) {
    for (const node of branch)
      await this.nodes.update({ id: node.id }, {
        topics_count: node.topics_count + delta.topics,
        posts_count: node.posts_count + delta.posts,
        last_topic_id: topicId,
        last_post_at: at,
        last_post_uuid: uuid,
      })
  }

  private async moveCounters(from: ForumNode[], to: ForumNode[], topic: ForumTopic) {
    for (const node of from)
      if (!to.some((item) => item.id === node.id))
        await this.nodes.update({ id: node.id }, {
          topics_count: Math.max(0, node.topics_count - 1),
          posts_count: Math.max(0, node.posts_count - topic.posts_count),
        })

    for (const node of to)
      if (!from.some((item) => item.id === node.id))
        await this.nodes.update({ id: node.id }, {
          topics_count: node.topics_count + 1,
          posts_count: node.posts_count + topic.posts_count,
        })
  }

  private async notifyReply(topic: ForumTopic, post: ForumPost, user: UserRecord) {
    const targets = new Set<string>()

    if (topic.author_uuid && topic.author_uuid !== user.uuid) targets.add(topic.author_uuid)

    if (post.reply_to_id) {
      const parent = await this.posts.findOne({ where: { id: post.reply_to_id } })

      if (parent?.author_uuid && parent.author_uuid !== user.uuid) targets.add(parent.author_uuid)
    }

    if (!targets.size) return

    await core().notifications.sendMany([...targets], {
      type: 'forum.reply',
      category: CATEGORY,
      titleKey: 'mod.forum.notify_reply',
      bodyKey: 'mod.forum.notify_reply_body',
      params: { topic: topic.title, author: user.username },
      link: `/mod/forum/topic/${topic.id}`,
      icon: 'bx bx-conversation',
    })
  }

  private nodeView(node: ForumNode, unread: Set<number>, last: Map<number, LastPost>) {
    return {
      id: node.id,
      slug: node.slug,
      title: node.title,
      description: node.description,
      icon: node.icon,
      locked: node.locked,
      topics_count: node.topics_count,
      posts_count: node.posts_count,
      unread: unread.has(node.id),
      last: last.get(node.id) || null,
    }
  }

  private async lastInfo(nodes: ForumNode[]): Promise<Map<number, LastPost>> {
    const result = new Map<number, LastPost>()
    const topicIds = [...new Set(nodes.map((node) => node.last_topic_id).filter(Boolean))]

    if (!topicIds.length) return result

    const topics = await this.topics.find({ where: { id: In(topicIds), deleted_at: IsNull() } })
    const cards = await this.cards(nodes.map((node) => node.last_post_uuid))

    for (const node of nodes) {
      const topic = topics.find((item) => item.id === node.last_topic_id)

      if (!topic) continue

      result.set(node.id, {
        topic_id: topic.id,
        title: topic.title,
        at: node.last_post_at,
        user: cards.get(node.last_post_uuid) || null,
      })
    }

    return result
  }

  private ref(node: ForumNode): NodeRef {
    return { id: node.id, slug: node.slug, title: node.title }
  }

  private refOrNull(node?: ForumNode): NodeRef | null {
    return node ? this.ref(node) : null
  }

  private branch(node: ForumNode | undefined, all: ForumNode[]): ForumNode[] {
    const path: ForumNode[] = []
    let current = node

    while (current && path.length < NODE_DEPTH_MAX) {
      path.unshift(current)
      current = current.parent_id ? all.find((item) => item.id === current.parent_id) : undefined
    }

    return path
  }

  private tree(): Promise<ForumNode[]> {
    return this.nodes.find({ order: { position: 'ASC', id: 'ASC' } })
  }
}
