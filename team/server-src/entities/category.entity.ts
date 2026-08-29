import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Translatable } from 'unicore-api/server'

@Translatable('mod.team.category', ['name'], { read: ['mod.team.read'], write: ['mod.team.write'] })
@Entity({ name: 'mod_team_categories' })
export class TeamCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  @Column({ name: 'name', length: 120 })
  name: string

  @Column({ name: 'position', default: 0 })
  position: number
}
