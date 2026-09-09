<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <Message severity="info" :closable="false" class="mb-3">{{ $t('mod.team.source_hint') }}</Message>

        <DataTable :value="members" :loading="loading" dataKey="uuid" rowHover responsiveLayout="scroll">
          <template #header>
            <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
              <h5 class="m-0">{{ $t('mod.team.page_title') }}</h5>
              <Button :label="$t('admin.refresh')" icon="pi pi-refresh" class="p-button-text" @click="load()" />
            </div>
          </template>
          <template #empty>
            <div class="py-4 text-center">
              <p class="m-0">{{ $t('mod.team.empty') }}</p>
              <small class="text-color-secondary">{{ $t('mod.team.empty_hint') }}</small>
            </div>
          </template>

          <Column :header="$t('mod.team.member_username')">
            <template #body="{ data }">
              <span class="font-medium">{{ data.username }}</span>
            </template>
          </Column>
          <Column :header="$t('mod.team.member_label')" :style="{ width: '16rem' }">
            <template #body="{ data }">
              <span :style="data.color && { color: data.color }">{{ data.label }}</span>
            </template>
          </Column>
          <Column :header="$t('mod.team.member_categories')">
            <template #body="{ data }">
              <span v-if="hasCategories(data.uuid)">{{ categoryNames(data.uuid) }}</span>
              <span v-else class="text-color-secondary">—</span>
            </template>
          </Column>
          <Column :header="$t('mod.team.member_note')">
            <template #body="{ data }">
              <span v-if="data.note?.text">{{ data.note.text }}</span>
              <span v-else class="text-color-secondary">—</span>
            </template>
          </Column>
          <Column :style="{ width: '5rem' }" :bodyStyle="{ 'text-align': 'right' }">
            <template #body="{ data }">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success" :disabled="!canWrite" @click="openNote(data)" />
            </template>
          </Column>
        </DataTable>

        <SectionedDialog
          v-model:visible="noteDialog"
          v-model="section"
          :sections="sections"
          :header="$t('mod.team.member_note')"
          width="520px"
          class="p-fluid"
        >
          <template #before>
            <LocaleEditorBar
              v-model="translations.locale"
              :locales="translations.locales"
              :status="translations.status"
              :isDefault="translations.isDefault"
              @copy="translations.copyFromDefault()"
            />
          </template>
          <template #main>
            <div class="field">
              <label class="flex align-items-center gap-1">
                {{ $t('mod.team.member_note') }}
                <i v-tooltip.right="$t('mod.team.member_note_hint')" class="pi pi-question-circle text-color-secondary" />
              </label>
              <Textarea v-model="note.text" :autoResize="true" rows="3" />
            </div>
            <div class="field-checkbox">
              <Checkbox :binary="true" v-model="note.global" inputId="team-global" />
              <label for="team-global" class="mb-0 flex align-items-center gap-1">
                {{ $t('mod.team.member_global') }}
                <i v-tooltip.right="$t('mod.team.member_global_hint')" class="pi pi-question-circle text-color-secondary" />
              </label>
            </div>
            <div class="field" v-if="categories.length">
              <label>{{ $t('mod.team.member_categories') }}</label>
              <MultiSelect
                v-model="note.categories"
                :options="categories"
                optionLabel="name"
                optionValue="id"
                placeholder="—"
                :maxSelectedLabels="3"
                class="w-full"
              />
            </div>
            <div class="field" v-if="indexRows.length">
              <label class="flex align-items-center gap-1">
                {{ $t('mod.team.member_index') }}
                <i v-tooltip.right="$t('mod.team.member_index_hint')" class="pi pi-question-circle text-color-secondary" />
              </label>
              <div v-for="row in indexRows" :key="row.id" class="team-index">
                <span v-text="row.name" />
                <InputNumber
                  :modelValue="note.indexes[row.id]"
                  :min="0"
                  :placeholder="$t('mod.team.member_index_auto')"
                  showButtons
                  @update:modelValue="(value) => (note.indexes[row.id] = value)"
                />
              </div>
            </div>
          </template>
          <template #translations>
            <ContentTranslationFields :translations="translations" />
          </template>
          <template #footer>
            <Button :label="$t('common.cancel')" icon="pi pi-times" class="p-button-text" @click="noteDialog = false" />
            <Button :label="$t('common.save')" icon="pi pi-check" class="p-button-text" :disabled="loading" @click="saveNote()" />
          </template>
        </SectionedDialog>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center gap-2 mb-3">
            <div>
              <h5 class="m-0 flex align-items-center gap-1">
                {{ $t('mod.team.categories') }}
                <i v-tooltip.right="$t('mod.team.categories_hint')" class="pi pi-question-circle text-color-secondary" />
              </h5>
              <small class="text-color-secondary">{{ $t('mod.team.categories_display_hint') }}</small>
            </div>
            <div class="flex flex-wrap align-items-center gap-2">
              <InputText
                v-model="newCategory.name"
                :placeholder="$t('mod.team.category_name')"
                :disabled="!canWrite"
                class="w-12rem"
              />
              <InputNumber
                v-model="newCategory.position"
                :placeholder="$t('mod.team.category_position')"
                :disabled="!canWrite"
                inputClass="w-7rem"
                :min="0"
              />
              <Button
                :label="$t('mod.team.category_add')"
                icon="pi pi-plus"
                class="flex-shrink-0 white-space-nowrap"
                :disabled="!canWrite || !newCategory.name"
                @click="addCategory()"
              />
            </div>
          </div>
          <DataTable :value="categories" :loading="categoriesLoading" responsiveLayout="scroll" dataKey="id">
            <template #empty>
              <div class="py-3 text-center text-color-secondary">{{ $t('mod.team.categories_empty') }}</div>
            </template>
            <Column field="position" :header="$t('mod.team.category_position')" :style="{ width: '8rem' }">
              <template #body="{ data }">
                <InputNumber
                  :modelValue="data.position"
                  @update:modelValue="(value) => saveCategory(data, value)"
                  :disabled="!canWrite"
                  inputClass="w-6rem"
                  :min="0"
                />
              </template>
            </Column>
            <Column field="name" :header="$t('mod.team.category_name')">
              <template #body="{ data }">
                <InputText
                  :modelValue="data.name"
                  :disabled="!canWrite"
                  class="w-full"
                  @update:modelValue="(value) => (data.name = value)"
                  @change="saveCategory(data)"
                />
              </template>
            </Column>
            <Column :style="{ width: '5rem' }" :bodyStyle="{ 'text-align': 'right' }">
              <template #body="{ data }">
                <Button
                  icon="pi pi-trash"
                  class="p-button-rounded p-button-danger"
                  :disabled="!canWrite"
                  @click="removeCategory(data)"
                />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from 'primevue/usetoast'

const NOTE_FIELDS = [{ path: 'text', label: 'mod.team.member_note', type: 'textarea' }]

const GLOBAL_ROW = 'global'

export default {
  setup() {
    const { $t } = useNuxtApp()

    useHead({ title: computed(() => $t('mod.team.page_title')) })

    return {
      toast: useToast(),
      translations: useContentTranslations('mod.team.note', NOTE_FIELDS),
      ...useAccess({ canWrite: 'mod.team.write' }),
    }
  },
  data() {
    return {
      members: [],
      loading: true,
      noteDialog: false,
      section: 'main',
      note: { uuid: null, text: null, global: false, categories: [], indexes: {} },
      categories: [],
      categoriesLoading: false,
      newCategory: { name: '', position: null },
      memberCategoryIds: {},
      globalTitle: '',
    }
  },
  computed: {
    sections() {
      return [
        { key: 'main', label: 'admin.section_main', icon: 'pi pi-info-circle' },
        { key: 'translations', label: 'mod.team.translations', icon: 'pi pi-globe' },
      ]
    },
    indexRows() {
      const rows = this.note.global ? [{ id: GLOBAL_ROW, name: this.globalTitle || this.$t('mod.team.member_global') }] : []

      return rows.concat(
        this.categories
          .filter((category) => (this.note.categories || []).includes(category.id))
          .map((category) => ({ id: category.id, name: category.name })),
      )
    },
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      this.loading = true
      this.noteDialog = false

      try {
        await this.loadCategories()

        this.members = await this.$api
          .get('/mod/team/members')
          .then((res) => res.data)
          .catch(() => [])

        const pairs = await Promise.all(
          this.members.map((member) =>
            this.$api
              .get(`/mod/team/members/${member.uuid}/categories`, { silent: true })
              .then((res) => [member.uuid, res.data])
              .catch(() => [member.uuid, { global: false, globalIndex: null, categories: [] }]),
          ),
        )

        this.memberCategoryIds = Object.fromEntries(pairs)
        this.globalTitle = await this.$api
          .get('/config', { silent: true })
          .then((res) => (res.data || []).find((item) => item.key === 'public_mod_team_global')?.value || '')
          .catch(() => '')
      } finally {
        this.loading = false
      }
    },
    async loadCategories() {
      this.categoriesLoading = true

      try {
        this.categories = await this.$api
          .get('/mod/team/categories')
          .then((res) => res.data)
          .catch(() => [])
      } finally {
        this.categoriesLoading = false
      }
    },
    categoryNames(uuid) {
      const settings = this.memberCategoryIds[uuid] || {}
      const ids = (settings.categories || []).map((item) => item.categoryId)
      const names = this.categories.filter((category) => ids.includes(category.id)).map((category) => category.name)

      if (settings.global) names.unshift(this.globalTitle || this.$t('mod.team.member_global'))

      return names.join(', ')
    },
    hasCategories(uuid) {
      const settings = this.memberCategoryIds[uuid] || {}

      return Boolean(settings.global) || Boolean((settings.categories || []).length)
    },
    async addCategory() {
      const name = String(this.newCategory.name || '').trim()

      if (!name) return

      this.categoriesLoading = true

      const ok = await this.$api
        .post('/mod/team/categories', { name, ...(this.newCategory.position === null ? {} : { position: this.newCategory.position }) })
        .then(() => true)
        .catch(() => false)

      this.categoriesLoading = false

      if (!ok) return this.$utils.notifyError(null, this.$t('admin.invalid_data'))

      this.newCategory = { name: '', position: null }

      await this.loadCategories()
    },
    async saveCategory(category, position) {
      const name = String(category.name || '').trim()

      if (!name) return

      const next = position === undefined ? category.position : position

      if (position !== undefined) category.position = position

      const ok = await this.$api
        .patch(`/mod/team/categories/${category.id}`, { name, ...(next === null || next === undefined ? {} : { position: next }) })
        .then(() => true)
        .catch(() => false)

      if (!ok) return this.$utils.notifyError(null, this.$t('admin.invalid_data'))

      await this.loadCategories()
    },
    removeCategory(category) {
      this.$confirm.require({
        message: this.$t('admin.irreversible'),
        header: this.$t('admin.confirm_delete'),
        icon: 'pi pi-exclamation-triangle',
        accept: async () => {
          this.categoriesLoading = true

          await this.$api.delete(`/mod/team/categories/${category.id}`).catch(() => {})

          this.categoriesLoading = false

          await this.load()
        },
      })
    },
    async openNote(member) {
      this.section = 'main'
      this.note = { uuid: member.uuid, text: member.note?.text || null, global: false, categories: [], indexes: {} }
      this.translations.attach(this.note)
      await this.translations.load(member.uuid)

      const settings = await this.$api
        .get(`/mod/team/members/${member.uuid}/categories`, { silent: true })
        .then((res) => res.data)
        .catch(() => ({ global: false, globalIndex: null, categories: [] }))

      this.note.global = Boolean(settings.global)
      this.note.categories = (settings.categories || []).map((item) => item.categoryId)
      this.note.indexes = Object.fromEntries([
        ...(settings.global && settings.globalIndex !== null ? [[GLOBAL_ROW, settings.globalIndex]] : []),
        ...(settings.categories || [])
          .filter((item) => item.sortIndex !== null)
          .map((item) => [item.categoryId, item.sortIndex]),
      ])
      this.noteDialog = true
    },
    memberCategoriesPayload() {
      const index = (id) => {
        const value = this.note.indexes[id]

        return value === null || value === undefined || value === '' ? undefined : Number(value)
      }

      return {
        global: this.note.global,
        globalIndex: this.note.global ? index(GLOBAL_ROW) : undefined,
        categories: (this.note.categories || []).map((categoryId) => ({ categoryId, sortIndex: index(categoryId) })),
      }
    },
    async saveNote() {
      this.loading = true

      const ok = await this.$api
        .patch(`/mod/team/members/${this.note.uuid}`, { text: this.note.text || undefined })
        .then(() => true)
        .catch(() => false)

      if (ok) {
        await this.$api.put(`/mod/team/members/${this.note.uuid}/categories`, this.memberCategoriesPayload()).catch(() => {})

        await this.load()
      }

      if (!ok) {
        this.loading = false

        return this.$utils.notifyError(null, this.$t('admin.invalid_data'))
      }

      await this.translations.save(this.note.uuid)
      this.toast.add({ severity: 'success', detail: this.$t('mod.team.note_saved'), life: 3000 })
      await this.load()
    },
  },
}
</script>

<style scoped>
.team-index {
  display: grid;
  grid-template-columns: 1fr 9rem;
  gap: 10px;
  align-items: center;
}
.team-index + .team-index {
  margin-top: 8px;
}
</style>
