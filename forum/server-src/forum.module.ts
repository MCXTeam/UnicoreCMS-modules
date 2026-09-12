import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ForumNode } from './entities/node.entity'
import { ForumPost } from './entities/post.entity'
import { ForumReaction } from './entities/reaction.entity'
import { ForumRead } from './entities/read.entity'
import { ForumTopic } from './entities/topic.entity'
import { ForumWatermark } from './entities/watermark.entity'
import { ForumAdminController } from './forum-admin.controller'
import { ForumController } from './forum.controller'
import { ForumService } from './forum.service'

@Module({
  imports: [TypeOrmModule.forFeature([ForumNode, ForumTopic, ForumPost, ForumReaction, ForumRead, ForumWatermark])],
  controllers: [ForumAdminController, ForumController],
  providers: [ForumService],
})
export class ForumModule {}
