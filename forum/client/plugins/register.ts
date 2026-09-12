import { defineClientModule } from 'unicore-api/client'

export default defineNuxtPlugin(() => {
  const { value } = usePublicConfig()

  defineClientModule({
    id: 'forum',
    nav: () => [
      {
        key: 'forum',
        to: '/mod/forum',
        label: String(value('public_mod_forum_title', '') || 'mod.forum.title'),
        icon: 'bx bx-chat',
        places: ['navbar', 'footer'],
        order: Number(value('public_mod_forum_nav_order', 20)) || 20,
        inline: true,
      },
    ],
  })
})
