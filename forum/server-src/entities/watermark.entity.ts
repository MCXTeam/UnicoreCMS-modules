import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'mod_forum_watermarks' })
export class ForumWatermark {
  @PrimaryColumn({ name: 'user_uuid', length: 36 })
  user_uuid: string

  @Column({ name: 'last_post_id', default: 0 })
  last_post_id: number
}
