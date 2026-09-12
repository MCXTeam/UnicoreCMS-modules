import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import type { UserRecord } from 'unicore-api'
import { core, CurrentUser, IpAddress, Paginate, PaginateQuery, Permissions, Public } from 'unicore-api/server'
import { PERMISSION_WRITE, UPLOAD_MAX_MEGABYTES, UPLOADS_PER_HOUR } from '../shared/constants'
import { PostInput } from './dto/post.input'
import { ReactionInput } from './dto/reaction.input'
import { TopicInput } from './dto/topic.input'
import { TopicUpdateInput } from './dto/topic-update.input'
import { ForumService } from './forum.service'

const MEGABYTE = 1024 * 1024
const HOUR_SECONDS = 60 * 60
const IMAGE_PATTERN = /\.(png|jpe?g|gif|webp)$/i

@Controller('mod/forum')
export class ForumController {
  constructor(private readonly forum: ForumService) {}

  @Public()
  @Get()
  index(@CurrentUser() user: UserRecord) {
    return this.forum.index(user || null)
  }

  @Public()
  @Get('search')
  search(@Query('q') q: string, @CurrentUser() user: UserRecord) {
    return this.forum.search(q, user || null)
  }

  @Public()
  @Get('nodes/:slug')
  node(@Param('slug') slug: string, @CurrentUser() user: UserRecord, @Paginate() query: PaginateQuery) {
    return this.forum.node(slug, user || null, query)
  }

  @Public()
  @Get('topics/:id')
  topic(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: UserRecord, @Paginate() query: PaginateQuery) {
    return this.forum.topic(id, user || null, query)
  }

  @Permissions([PERMISSION_WRITE])
  @Post('nodes/:slug/topics')
  createTopic(@Param('slug') slug: string, @CurrentUser() user: UserRecord, @Body() input: TopicInput) {
    return this.forum.createTopic(slug, user, input)
  }

  @Permissions([PERMISSION_WRITE])
  @Post('topics/:id/posts')
  reply(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: UserRecord, @Body() input: PostInput) {
    return this.forum.reply(id, user, input)
  }

  @Patch('topics/:id')
  updateTopic(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: UserRecord, @Body() input: TopicUpdateInput) {
    return this.forum.updateTopic(id, user, input)
  }

  @Delete('topics/:id')
  removeTopic(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: UserRecord) {
    return this.forum.removeTopic(id, user)
  }

  @Patch('posts/:id')
  editPost(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: UserRecord, @Body() input: PostInput) {
    return this.forum.editPost(id, user, input)
  }

  @Delete('posts/:id')
  removePost(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: UserRecord) {
    return this.forum.removePost(id, user)
  }

  @Post('posts/:id/reactions')
  react(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: UserRecord, @Body() input: ReactionInput) {
    return this.forum.react(id, user, input)
  }

  @Post('read-all')
  readAll(@CurrentUser() user: UserRecord) {
    return this.forum.markAllRead(user.uuid)
  }

  @Permissions([PERMISSION_WRITE])
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @CurrentUser() user: UserRecord,
    @IpAddress() ip: string,
    @UploadedFile() file: { originalname: string; buffer: Buffer; size: number },
  ) {
    if (!file) throw new BadRequestException('Файл не пришёл')
    if (!IMAGE_PATTERN.test(file.originalname)) throw new BadRequestException('Можно загружать только картинки')
    if (file.size > UPLOAD_MAX_MEGABYTES * MEGABYTE) throw new BadRequestException(`Файл больше ${UPLOAD_MAX_MEGABYTES} МБ`)

    await this.throttle(user.uuid || ip)

    const name = await core().storage.save(file.originalname, file.buffer)

    return { url: core().storage.url(name) }
  }

  private async throttle(key: string) {
    const cacheKey = `mod.forum.upload:${key}`
    const used = Number((await core().cache.get<number>(cacheKey)) || 0)

    if (used >= UPLOADS_PER_HOUR) throw new BadRequestException('Слишком много загрузок, попробуйте позже')

    await core().cache.set(cacheKey, used + 1, HOUR_SECONDS)
  }
}
