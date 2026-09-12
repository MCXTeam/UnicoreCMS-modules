import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common'
import { Permissions } from 'unicore-api/server'
import { PERMISSION_MANAGE } from '../shared/constants'
import { NodeInput } from './dto/node.input'
import { ForumService } from './forum.service'

@Controller('mod/forum/admin')
export class ForumAdminController {
  constructor(private readonly forum: ForumService) {}

  @Permissions(['panel.access', PERMISSION_MANAGE])
  @Get('nodes')
  nodes() {
    return this.forum.adminNodes()
  }

  @Permissions(['panel.access', PERMISSION_MANAGE])
  @Post('nodes')
  create(@Body() input: NodeInput) {
    return this.forum.createNode(input)
  }

  @Permissions(['panel.access', PERMISSION_MANAGE])
  @Patch('nodes/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() input: NodeInput) {
    return this.forum.updateNode(id, input)
  }

  @Permissions(['panel.access', PERMISSION_MANAGE])
  @Delete('nodes/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.forum.removeNode(id)
  }
}
