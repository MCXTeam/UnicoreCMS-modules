<template>
  <div v-if="node" class="fm">
    <ModForumCrumbs :items="node.breadcrumbs" />

    <header class="fm-head">
      <div>
        <h1 class="m-0">
          <i v-if="node.icon" :class="node.icon"></i>
          {{ node.title }}
        </h1>
        <p v-if="node.description" class="m-0">{{ node.description }}</p>
      </div>
      <Button v-if="can.write" :label="$t('mod.forum.new_topic')" @click="composer = true">
        <i class="bx bx-plus me-1"></i> {{ $t('mod.forum.new_topic') }}
      </Button>
      <span v-else-if="node.locked" class="fm-note">{{ $t('mod.forum.locked') }}</span>
      <span v-else-if="!$auth.loggedIn" class="fm-note">{{ $t('mod.forum.login_to_write') }}</span>
      <span v-else class="fm-note">{{ $t('mod.forum.no_write_access') }}</span>
    </header>

    <section v-if="children.length" class="panel fm-block">
      <h2 class="fm-block__title">{{ $t('mod.forum.subnodes') }}</h2>
      <ModForumNodeRow v-for="child in children" :key="child.id" :node="child" />
    </section>

    <section class="panel fm-block">
      <ModForumTopicRow v-for="topic in topics" :key="topic.id" :topic="topic" />

      <div v-if="!topics.length" class="fm-empty">
        <i class="bx bx-message-square-dots"></i>
        <span>{{ $t('mod.forum.no_topics') }}</span>
      </div>
    </section>

    <Paginator
      v-if="meta && meta.totalPages > 1"
      class="my-4"
      :rows="meta.itemsPerPage"
      :totalRecords="meta.totalItems"
      :first="(meta.currentPage - 1) * meta.itemsPerPage"
      @page="onPage"
    />

    <Dialog v-model:visible="composer" modal :header="$t('mod.forum.new_topic')" :style="{ width: '760px' }">
      <div class="field">
        <label>{{ $t('mod.forum.topic_title') }}</label>
        <InputText v-model="draft.title" class="w-100" :maxlength="TOPIC_TITLE_MAX_LENGTH" />
      </div>
      <div class="field">
        <label>{{ $t('mod.forum.topic_content') }}</label>
        <RichEditor v-model="draft.content" height="260px" :upload="forum.upload" />
      </div>
      <template #footer>
        <Button text :label="$t('mod.forum.cancel')" @click="composer = false" />
        <Button :loading="sending" :disabled="!valid" :label="$t('mod.forum.publish')" @click="publish()" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { TOPIC_TITLE_MAX_LENGTH, TOPIC_TITLE_MIN_LENGTH, POST_CONTENT_MIN_LENGTH } from '../../../../../shared/constants'

definePageMeta({ layout: 'landing', wide: true, hero: false })

const { $t, $auth, $unicore } = useNuxtApp() as any
const route = useRoute()
const router = useRouter()
const forum = useForum()

const slug = String(route.params.slug)
const page = computed(() => Number(route.query.page || 1))

const { data, refresh } = await forum.node(slug, { page: page.value })

const composer = ref(false)
const sending = ref(false)
const draft = reactive({ title: '', content: '' })

const node = computed(() => data.value?.node || null)
const children = computed(() => data.value?.children || [])
const topics = computed(() => data.value?.topics?.data || [])
const meta = computed(() => data.value?.topics?.meta || null)
const can = computed(() => data.value?.can || { write: false, moderate: false })
const valid = computed(
  () => draft.title.trim().length >= TOPIC_TITLE_MIN_LENGTH && plainLength(draft.content) >= POST_CONTENT_MIN_LENGTH,
)

useHead({ title: computed(() => node.value?.title || $t('mod.forum.title')) })

watch(
  () => route.query.page,
  () => refresh(),
)

function plainLength(html: string) {
  return String(html || '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim().length
}

function onPage(event: { page: number }) {
  router.push({ query: { ...route.query, page: event.page + 1 } })
}

async function publish() {
  sending.value = true

  try {
    const { id } = await forum.createTopic(slug, { title: draft.title.trim(), content: draft.content })

    composer.value = false
    draft.title = ''
    draft.content = ''

    await router.push(`/mod/forum/topic/${id}`)
  } catch (error: any) {
    $unicore.errorNotification(error?.response?.data?.message || $t('common.unknown_error'))
  }

  sending.value = false
}
</script>

<style scoped>
.fm-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin: 16px 0 24px;
}
.fm-head p {
  margin-top: 8px !important;
  color: rgba(var(--vs-text), 0.6);
}
.fm-note {
  color: rgba(var(--vs-text), 0.55);
}
.fm-block {
  padding: 20px 24px;
  margin-bottom: 20px;
}
.fm-block__title {
  margin: 0 0 6px;
  font-size: 1.1rem;
}
.fm-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px;
  color: rgba(var(--vs-text), 0.55);
}
.fm-empty i {
  font-size: 2rem;
}
</style>
