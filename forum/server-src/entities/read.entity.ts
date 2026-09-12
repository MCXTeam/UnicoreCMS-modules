import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { ForumTopic } from './topic.entity'

@Entity({ name: 'mod_forum_reads' })
@Index(['user_uuid', 'last_post_id'])
export class ForumRead {
  @PrimaryColumn({ name: 'user_uuid', length: 36 })
  user_uuid: string

  @PrimaryColumn({ name: 'topic_id' })
  topic_id: number

  @ManyToOne(() => ForumTopic, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'topic_id' })
  topic: ForumTopic

  @Column({ name: 'last_post_id', default: 0 })
  last_post_id: number

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date
}
