import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { TOPIC_TITLE_MAX_LENGTH } from '../../shared/constants'
import { ForumNode } from './node.entity'

@Entity({ name: 'mod_forum_topics' })
@Index(['node_id', 'last_post_at'])
export class ForumTopic {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ name: 'node_id' })
  node_id: number

  @ManyToOne(() => ForumNode, { onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'node_id' })
  node: ForumNode

  @Index()
  @Column({ name: 'author_uuid', length: 36 })
  author_uuid: string

  @Column({ name: 'title', length: TOPIC_TITLE_MAX_LENGTH })
  title: string

  @Column({ name: 'pinned', default: false })
  pinned: boolean

  @Column({ name: 'closed', default: false })
  closed: boolean

  @Column({ name: 'views', default: 0 })
  views: number

  @Column({ name: 'posts_count', default: 0 })
  posts_count: number

  @Column({ name: 'last_post_id', default: 0 })
  last_post_id: number

  @Column({ name: 'last_post_uuid', length: 36, nullable: true })
  last_post_uuid: string

  @Column({ name: 'last_post_at', type: 'datetime' })
  last_post_at: Date

  @Column({ name: 'deleted_at', type: 'datetime', nullable: true })
  deleted_at: Date

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date
}
