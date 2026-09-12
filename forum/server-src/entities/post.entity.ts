import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { ForumTopic } from './topic.entity'

@Entity({ name: 'mod_forum_posts' })
@Index(['topic_id', 'created_at'])
export class ForumPost {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ name: 'topic_id' })
  topic_id: number

  @ManyToOne(() => ForumTopic, { onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'topic_id' })
  topic: ForumTopic

  @Index()
  @Column({ name: 'author_uuid', length: 36 })
  author_uuid: string

  @Column('longtext', { name: 'content' })
  content: string

  @Column({ name: 'reply_to_id', nullable: true })
  reply_to_id: number

  @Column({ name: 'first', default: false })
  first: boolean

  @Column({ name: 'edited_at', type: 'datetime', nullable: true })
  edited_at: Date

  @Column({ name: 'edited_by', length: 36, nullable: true })
  edited_by: string

  @Column({ name: 'deleted_at', type: 'datetime', nullable: true })
  deleted_at: Date

  @Column({ name: 'deleted_by', length: 36, nullable: true })
  deleted_by: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date
}
