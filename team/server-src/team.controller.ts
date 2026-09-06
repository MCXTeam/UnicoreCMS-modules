import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common'
import { core } from 'unicore-api'
import { Permissions, Public } from 'unicore-api/server'
import { CategoryInput } from './dto/category.input'
import { MemberCategoriesInput } from './dto/category.input'
import { TeamNoteInput } from './dto/note.input'
import { TeamService } from './team.service'

@Controller('mod/team')
export class TeamController {
  constructor(private readonly service: TeamService) {}

  @Public()
  @Get()
  async sections() {
    const title = (await core().config.get('public_mod_team_global')) || 'На всех серверах'

    return this.service.sections(title)
  }

  @Permissions(['mod.team.read'])
  @Get('members')
  members() {
    return this.service.list()
  }

  @Permissions(['mod.team.write'])
  @Patch('members/:uuid')
  saveNote(@Param('uuid') uuid: string, @Body() body: TeamNoteInput) {
    return this.service.saveNote(uuid, body)
  }

  @Public()
  @Get('categories-sections')
  async categorySections() {
    const title = (await core().config.get('public_mod_team_rest')) || 'Без категории'

    return this.service.categorySections(title)
  }

  @Permissions(['mod.team.read'])
  @Get('categories')
  listCategories() {
    return this.service.listCategories()
  }

  @Permissions(['mod.team.write'])
  @Post('categories')
  createCategory(@Body() body: CategoryInput) {
    return this.service.saveCategory(null, body)
  }

  @Permissions(['mod.team.write'])
  @Patch('categories/:id')
  updateCategory(@Param('id', ParseIntPipe) id: number, @Body() body: CategoryInput) {
    return this.service.saveCategory(id, body)
  }

  @Permissions(['mod.team.write'])
  @Delete('categories/:id')
  removeCategory(@Param('id', ParseIntPipe) id: number) {
    return this.service.removeCategory(id)
  }

  @Permissions(['mod.team.read'])
  @Get('members/:uuid/categories')
  memberCategories(@Param('uuid') uuid: string) {
    return this.service.memberCategoryIds(uuid)
  }

  @Permissions(['mod.team.write'])
  @Put('members/:uuid/categories')
  setMemberCategories(@Param('uuid') uuid: string, @Body() body: MemberCategoriesInput) {
    return this.service.setMemberCategories(uuid, body.categories)
  }
}
