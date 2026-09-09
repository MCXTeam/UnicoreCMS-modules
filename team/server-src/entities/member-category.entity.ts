import { Column, Entity, PrimaryColumn } from 'typeorm'

export const GLOBAL_CATEGORY_ID = 0

@Entity({ name: 'mod_team_member_categories' })
export class TeamMemberCategory {
  @PrimaryColumn({ name: 'user_uuid' })
  userUuid: string

  @PrimaryColumn({ name: 'category_id' })
  categoryId: number

  @Column({ name: 'sort_index', nullable: true })
  sortIndex?: number
}
