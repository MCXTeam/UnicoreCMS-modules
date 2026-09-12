import { defineModule } from 'unicore-api/server'
import {
  AUDIT_CLASS,
  AUDIT_POST_DELETE,
  AUDIT_POST_EDIT,
  AUDIT_TOPIC_CLOSE,
  AUDIT_TOPIC_DELETE,
  CATEGORY,
  PERMISSION_EDIT_POSTS,
  PERMISSION_LOGS,
  PERMISSION_MANAGE,
  PERMISSION_MODERATE,
  PERMISSION_READ,
  PERMISSION_WRITE,
  SETTING_PLAYER_CLOSE,
} from '../shared/constants'
import { ForumNode } from './entities/node.entity'
import { ForumPost } from './entities/post.entity'
import { ForumReaction } from './entities/reaction.entity'
import { ForumRead } from './entities/read.entity'
import { ForumTopic } from './entities/topic.entity'
import { ForumWatermark } from './entities/watermark.entity'
import { ForumModule } from './forum.module'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

export default defineModule({
  id: 'forum',
  entities: [ForumNode, ForumTopic, ForumPost, ForumReaction, ForumRead, ForumWatermark],
  nestModules: [ForumModule],
  permissions: [
    { key: PERMISSION_READ, granted: true },
    { key: PERMISSION_WRITE, granted: true },
    { key: PERMISSION_MODERATE, danger: true },
    { key: PERMISSION_EDIT_POSTS, danger: true },
    { key: PERMISSION_MANAGE, danger: true },
    { key: PERMISSION_LOGS, danger: true },
  ],
  auditClasses: [{ key: AUDIT_CLASS, labelKey: 'mod.forum.audit_class', permission: PERMISSION_LOGS }],
  auditActions: [
    { key: AUDIT_POST_EDIT, class: AUDIT_CLASS, labelKey: 'mod.forum.audit_post_edit' },
    { key: AUDIT_POST_DELETE, class: AUDIT_CLASS, labelKey: 'mod.forum.audit_post_delete' },
    { key: AUDIT_TOPIC_CLOSE, class: AUDIT_CLASS, labelKey: 'mod.forum.audit_topic_close' },
    { key: AUDIT_TOPIC_DELETE, class: AUDIT_CLASS, labelKey: 'mod.forum.audit_topic_delete' },
  ],
  config: [
    {
      key: 'title',
      type: 'string',
      default: 'Форум',
      public: true,
      label: 'mod.forum.config_title',
      hint: 'mod.forum.config_title_hint',
    },
    {
      key: 'subtitle',
      type: 'string',
      default: 'Обсуждения, вопросы и всё, что не помещается в чат',
      public: true,
      label: 'mod.forum.config_subtitle',
      hint: 'mod.forum.config_subtitle_hint',
    },
    {
      key: SETTING_PLAYER_CLOSE,
      type: 'boolean',
      default: true,
      label: 'mod.forum.config_player_close',
      hint: 'mod.forum.config_player_close_hint',
    },
    {
      key: 'nav_order',
      type: 'number',
      default: 20,
      min: 0,
      max: 1000,
      public: true,
      label: 'mod.forum.config_nav_order',
      hint: 'mod.forum.config_nav_order_hint',
    },
  ],
  locales: { ru, en },
  setup: (context) => {
    context.core().notifications.registerCategory(
      {
        id: CATEGORY,
        labelKey: 'mod.forum.notify_category',
        hintKey: 'mod.forum.notify_category_hint',
        icon: 'bx bx-conversation',
      },
      context.id,
    )

    context.logger.log('Форум подключён')
  },
})
