import { defineModule } from 'unicore-api/server'
import { TeamNote } from './entities/note.entity'
import { TeamCategory } from './entities/category.entity'
import { TeamMemberCategory } from './entities/member-category.entity'
import { TeamModule } from './team.module'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

export default defineModule({
  id: 'team',
  entities: [TeamNote, TeamCategory, TeamMemberCategory],
  nestModules: [TeamModule],
  permissions: ['mod.team.read', 'mod.team.write'],
  config: [
    {
      key: 'title',
      type: 'string',
      default: 'Команда проекта',
      public: true,
      label: 'mod.team.config_title',
      hint: 'mod.team.config_title_hint',
    },
    {
      key: 'subtitle',
      type: 'string',
      default: 'Люди, которые делают проект',
      public: true,
      label: 'mod.team.config_subtitle',
      hint: 'mod.team.config_subtitle_hint',
    },
    {
      key: 'global',
      type: 'string',
      default: 'На всех серверах',
      public: true,
      label: 'mod.team.config_global',
      hint: 'mod.team.config_global_hint',
    },
    {
      key: 'rest',
      type: 'string',
      default: 'Без категории',
      public: true,
      label: 'mod.team.config_rest',
      hint: 'mod.team.config_rest_hint',
    },
    {
      key: 'display',
      type: 'select',
      default: 'categories',
      public: true,
      label: 'mod.team.config_display',
      hint: 'mod.team.config_display_hint',
      options: [
        { label: 'По серверам', value: 'servers' },
        { label: 'По категориям', value: 'categories' },
        { label: 'Всё вместе', value: 'all' },
      ],
    },
  ],
  locales: { ru, en },
})
