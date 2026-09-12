<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <DataTable :value="rows" :loading="loading" dataKey="id" rowHover responsiveLayout="scroll">
          <template #header>
            <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center gap-2">
              <h5 class="m-0">{{ $t('mod.forum.admin_nodes') }}</h5>
              <Button :label="$t('mod.forum.admin_node_new')" icon="pi pi-plus" :disabled="!canManage" @click="openCreate()" />
            </div>
          </template>
          <template #empty>
            <div class="py-4 text-center">
              <p class="m-0">{{ $t('mod.forum.admin_empty') }}</p>
            </div>
          </template>
          <template #footer>
            <small class="text-color-secondary">{{ $t('mod.forum.admin_write_hint') }}</small>
          </template>

          <Column :header="$t('mod.forum.admin_title')">
            <template #body="{ data }">
              <div class="fm-admin__node" :style="{ paddingLeft: `${data.depth * 24}px` }">
                <i :class="data.icon || 'bx bx-chat'" class="fm-admin__icon text-color-secondary" />
                <div class="fm-admin__stack">
                  <span class="fm-admin__title">{{ data.title }}</span>
                  <small class="fm-admin__slug text-color-secondary">/mod/forum/node/{{ data.slug }}</small>
                </div>
              </div>
            </template>
          </Column>

          <Column :header="$t('mod.forum.admin_content')" :style="{ width: '14rem' }">
            <template #body="{ data }">
              {{ $t('mod.forum.admin_counters', { topics: data.topics_count, posts: data.posts_count }) }}
            </template>
          </Column>

          <Column :header="$t('mod.forum.admin_state')" :style="{ width: '12rem' }">
            <template #body="{ data }">
              <div class="flex flex-wrap align-items-center gap-2">
                <Tag v-if="data.hidden" severity="secondary" :value="$t('mod.forum.admin_tag_hidden')" />
                <Tag v-if="data.locked" severity="warn" :value="$t('mod.forum.admin_tag_locked')" />
                <Tag v-if="!data.hidden && !data.locked" severity="success" :value="$t('mod.forum.admin_tag_open')" />
              </div>
            </template>
          </Column>

          <Column :style="{ width: '8rem' }" :bodyStyle="{ 'text-align': 'right' }">
            <template #body="{ data }">
              <div class="flex justify-content-end gap-2">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success" :disabled="!canManage" @click="openEdit(data)" />
                <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" :disabled="!canManage" @click="remove(data)" />
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>

    <Dialog v-model:visible="dialog" :header="dialogTitle" :style="{ width: '640px' }" modal class="p-fluid">
      <div class="field">
        <label>{{ $t('mod.forum.admin_title') }}<span class="p-error"> *</span></label>
        <InputText v-model="draft.title" />
      </div>

      <div class="field">
        <label class="flex align-items-center gap-2">
          {{ $t('mod.forum.admin_slug') }}
          <i v-tooltip.right="$t('mod.forum.admin_slug_hint')" class="pi pi-question-circle text-color-secondary" />
        </label>
        <InputText v-model="draft.slug" />
        <small class="fm-admin__hint text-color-secondary">/mod/forum/node/{{ draft.slug || '…' }}</small>
      </div>

      <div class="field">
        <label>{{ $t('mod.forum.admin_description') }}</label>
        <Textarea v-model="draft.description" rows="2" autoResize />
      </div>

      <div class="formgrid grid">
        <div class="field col-6">
          <label>{{ $t('mod.forum.admin_icon') }}</label>
          <IconPicker v-model="draft.icon" fallback="bx bx-chat" />
        </div>
        <div class="field col-6">
          <label>{{ $t('mod.forum.admin_position') }}</label>
          <InputNumber v-model="draft.position" :min="0" :max="1000" showButtons />
        </div>
      </div>

      <div class="field">
        <label>{{ $t('mod.forum.admin_parent') }}</label>
        <Select v-model="draft.parent_id" :options="parentOptions" optionLabel="title" optionValue="id" showClear />
      </div>

      <div class="formgrid grid">
        <div class="field col-6">
          <label class="flex align-items-center gap-2">
            {{ $t('mod.forum.admin_read_permission') }}
            <i v-tooltip.right="$t('mod.forum.admin_permission_hint')" class="pi pi-question-circle text-color-secondary" />
          </label>
          <InputText v-model="draft.read_permission" placeholder="mod.forum.read" />
        </div>
        <div class="field col-6">
          <label class="flex align-items-center gap-2">
            {{ $t('mod.forum.admin_write_permission') }}
            <i v-tooltip.right="$t('mod.forum.admin_permission_hint')" class="pi pi-question-circle text-color-secondary" />
          </label>
          <InputText v-model="draft.write_permission" placeholder="mod.forum.write" />
        </div>
      </div>

      <div class="field">
        <label class="flex align-items-center gap-2">
          {{ $t('mod.forum.admin_moderator_roles') }}
          <i v-tooltip.right="$t('mod.forum.admin_moderator_roles_hint')" class="pi pi-question-circle text-color-secondary" />
        </label>
        <MultiSelect v-model="draft.moderator_roles" :options="roles" optionLabel="name" optionValue="id" display="chip" filter />
      </div>

      <div class="fm-admin__checks">
        <div class="field-checkbox">
          <Checkbox v-model="draft.locked" :binary="true" inputId="forumLocked" />
          <label for="forumLocked">{{ $t('mod.forum.admin_locked') }}</label>
        </div>

        <div class="field-checkbox">
          <Checkbox v-model="draft.hidden" :binary="true" inputId="forumHidden" />
          <label for="forumHidden">{{ $t('mod.forum.admin_hidden') }}</label>
        </div>
      </div>

      <template #footer>
        <Button :label="$t('common.cancel')" icon="pi pi-times" class="p-button-text" @click="dialog = false" />
        <Button
          :label="$t('common.save')"
          icon="pi pi-check"
          class="p-button-text"
          :disabled="!draft.title || !draft.slug || saving"
          @click="save()"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
export default {
  setup() {
    const { $t } = useNuxtApp()

    useHead({ title: computed(() => $t('mod.forum.admin_nodes')) })

    return { ...useAccess({ canManage: 'mod.forum.manage' }) }
  },
  data() {
    return {
      nodes: [],
      roles: [],
      loading: true,
      saving: false,
      dialog: false,
      editing: null,
      draft: this.blank(),
    }
  },
  computed: {
    rows() {
      const byParent = (parent, depth) =>
        this.nodes
          .filter((node) => (node.parent_id || null) === parent)
          .flatMap((node) => [{ ...node, depth }, ...byParent(node.id, depth + 1)])

      return byParent(null, 0)
    },
    parentOptions() {
      return this.rows
        .filter((node) => !this.editing || node.id !== this.editing.id)
        .map((node) => ({ id: node.id, title: `${'— '.repeat(node.depth)}${node.title}` }))
    },
    dialogTitle() {
      return this.editing ? this.$t('mod.forum.admin_node_edit') : this.$t('mod.forum.admin_node_new')
    },
  },
  mounted() {
    this.load()
  },
  methods: {
    blank() {
      return {
        slug: '',
        title: '',
        description: '',
        icon: '',
        parent_id: null,
        position: 100,
        locked: false,
        hidden: false,
        read_permission: '',
        write_permission: '',
        moderator_roles: [],
      }
    },
    async load() {
      this.loading = true

      const [nodes, roles] = await Promise.all([
        this.$api.get('/mod/forum/admin/nodes').then((res) => res.data).catch(() => []),
        this.$api.get('/admin/roles').then((res) => res.data).catch(() => []),
      ])

      this.nodes = nodes
      this.roles = Array.isArray(roles) ? roles : roles.data || []
      this.loading = false
    },
    openCreate() {
      this.editing = null
      this.draft = this.blank()
      this.dialog = true
    },
    openEdit(node) {
      this.editing = node
      this.draft = {
        slug: node.slug,
        title: node.title,
        description: node.description || '',
        icon: node.icon || '',
        parent_id: node.parent_id || null,
        position: node.position ?? 100,
        locked: Boolean(node.locked),
        hidden: Boolean(node.hidden),
        read_permission: node.read_permission || '',
        write_permission: node.write_permission || '',
        moderator_roles: node.moderator_roles || [],
      }
      this.dialog = true
    },
    body() {
      return {
        slug: this.draft.slug.trim(),
        title: this.draft.title.trim(),
        description: this.draft.description?.trim() || undefined,
        icon: this.draft.icon?.trim() || undefined,
        parent_id: this.draft.parent_id || undefined,
        position: this.draft.position ?? 100,
        locked: this.draft.locked,
        hidden: this.draft.hidden,
        read_permission: this.draft.read_permission?.trim() || undefined,
        write_permission: this.draft.write_permission?.trim() || undefined,
        moderator_roles: this.draft.moderator_roles || [],
      }
    },
    async save() {
      this.saving = true

      const request = this.editing
        ? this.$api.patch(`/mod/forum/admin/nodes/${this.editing.id}`, this.body())
        : this.$api.post('/mod/forum/admin/nodes', this.body())

      const done = await request.then(() => true).catch(() => false)

      this.saving = false

      if (!done) return

      this.dialog = false
      this.$toast.add({ severity: 'success', detail: this.$t('mod.forum.admin_saved'), life: 3000 })

      await this.load()
    },
    async remove(node) {
      const done = await this.$api
        .delete(`/mod/forum/admin/nodes/${node.id}`)
        .then(() => true)
        .catch(() => false)

      if (!done) return

      this.$toast.add({ severity: 'success', detail: this.$t('mod.forum.admin_removed'), life: 3000 })

      await this.load()
    },
  },
}
</script>

<style scoped>
.fm-admin__node {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.fm-admin__icon {
  flex: 0 0 auto;
  width: 1.5rem;
  font-size: 1.25rem;
  line-height: 1;
  text-align: center;
}
.fm-admin__stack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.fm-admin__title {
  font-weight: 500;
  line-height: 1.25;
}
.fm-admin__slug {
  line-height: 1.35;
}
.fm-admin__hint {
  display: block;
  margin-top: 0.375rem;
}
.fm-admin__checks {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.fm-admin__checks .field-checkbox {
  margin-bottom: 0;
}
</style>
