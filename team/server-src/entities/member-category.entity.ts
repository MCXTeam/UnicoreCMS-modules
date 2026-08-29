import { Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'mod_team_member_categories' })
export class TeamMemberCategory {
  @PrimaryColumn({ name: 'user_uuid' })
  userUuid: string

  @PrimaryColumn({ name: 'category_id' })
  categoryId: number
}
