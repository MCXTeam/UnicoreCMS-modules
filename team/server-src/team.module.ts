import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TeamNote } from './entities/note.entity'
import { TeamCategory } from './entities/category.entity'
import { TeamMemberCategory } from './entities/member-category.entity'
import { TeamController } from './team.controller'
import { TeamService } from './team.service'

@Module({
  imports: [TypeOrmModule.forFeature([TeamNote, TeamCategory, TeamMemberCategory])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
