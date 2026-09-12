import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Translatable } from 'unicore-api/server'
import {
  NODE_DESCRIPTION_MAX_LENGTH,
  NODE_ICON_MAX_LENGTH,
  NODE_SLUG_MAX_LENGTH,
  NODE_TITLE_MAX_LENGTH,
  PERMISSION_MANAGE,
  PERMISSION_READ,
} from '../../shared/constants'

@Translatable('mod.forum.node', ['title', 'description'], { read: [PERMISSION_READ], write: [PERMISSION_MANAGE] })
@Entity({ name: 'mod_forum_nodes' })
export class ForumNode {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Index()
  @Column({ name: 'parent_id', nullable: true })
  parent_id: number

  @ManyToOne(() => ForumNode, (node) => node.children, { onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'parent_id' })
  parent: ForumNode

  @OneToMany(() => ForumNode, (node) => node.parent)
  children: ForumNode[]

  @Column({ name: 'slug', length: NODE_SLUG_MAX_LENGTH, unique: true })
  slug: string

  @Column({ name: 'title', length: NODE_TITLE_MAX_LENGTH })
  title: string

  @Column({ name: 'description', length: NODE_DESCRIPTION_MAX_LENGTH, nullable: true })
  description: string

  @Column({ name: 'icon', length: NODE_ICON_MAX_LENGTH, nullable: true })
  icon: string

  @Column({ name: 'position', default: 100 })
  position: number

  @Column({ name: 'locked', default: false })
  locked: boolean

  @Column({ name: 'hidden', default: false })
  hidden: boolean

  @Column({ name: 'read_permission', length: 64, nullable: true })
  read_permission: string

  @Column({ name: 'write_permission', length: 64, nullable: true })
  write_permission: string

  @Column('simple-array', { name: 'moderator_roles', nullable: true })
  moderator_roles: string[]

  @Column({ name: 'topics_count', default: 0 })
  topics_count: number

  @Column({ name: 'posts_count', default: 0 })
  posts_count: number

  @Column({ name: 'last_topic_id', nullable: true })
  last_topic_id: number

  @Column({ name: 'last_post_at', type: 'datetime', nullable: true })
  last_post_at: Date

  @Column({ name: 'last_post_uuid', length: 36, nullable: true })
  last_post_uuid: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date
}
