import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { REACTION_ID_MAX_LENGTH } from '../../shared/constants'
import { ForumPost } from './post.entity'

@Entity({ name: 'mod_forum_reactions' })
@Index(['post_id', 'kind'])
export class ForumReaction {
  @PrimaryColumn({ name: 'post_id' })
  post_id: number

  @ManyToOne(() => ForumPost, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'post_id' })
  post: ForumPost

  @PrimaryColumn({ name: 'user_uuid', length: 36 })
  user_uuid: string

  @PrimaryColumn({ name: 'kind', length: REACTION_ID_MAX_LENGTH })
  kind: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date
}
