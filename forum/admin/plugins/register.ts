import { defineAdminModule } from 'unicore-api/admin'

export default defineNuxtPlugin(() => {
  defineAdminModule({
    id: 'forum',
    menu: [
      {
        label: 'mod.forum.title',
        icon: 'pi pi-fw pi-comments',
        items: [{ label: 'mod.forum.admin_nodes', icon: 'pi pi-fw pi-sitemap', to: '/mod/forum' }],
      },
    ],
    access: {
      '/mod/forum': ['mod.forum.manage'],
    },
  })
})
