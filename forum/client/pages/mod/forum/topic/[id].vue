<template>
  <div v-if="topic" class="fm">
    <ModForumCrumbs :items="topic.breadcrumbs" :tail="topic.title" />

    <header class="fm-head">
      <div class="fm-head__text">
        <h1 class="m-0">{{ topic.title }}</h1>
        <div class="fm-head__meta">
          <Tag v-if="topic.deleted" severity="danger" :value="$t('mod.forum.deleted_topic')" />
          <ModForumUserChip :user="topic.author" :size="24" />
          <small>{{ $moment(topic.created_at).format('D MMMM YYYY, HH:mm') }}</small>
          <small>{{ $t('mod.forum.views') }}: {{ topic.views }}</small>
          <Tag v-if="topic.pinned" severity="info" :value="$t('mod.forum.pinned')" />
          <Tag v-if="topic.closed" severity="warn" :value="$t('mod.forum.closed')" />
        </div>
      </div>

      <div class="fm-head__tools">
        <Button v-if="can.moderate" size="small" outlined @click="patch({ pinned: !topic.pinned })">
          <i class="bx bx-pin me-1"></i> {{ topic.pinned ? $t('mod.forum.unpin') : $t('mod.forum.pin') }}
        </Button>
        <Button v-if="can.close" size="small" outlined @click="patch({ closed: true })">
          <i class="bx bx-lock-alt me-1"></i> {{ $t('mod.forum.close') }}
        </Button>
        <Button v-if="can.open" size="small" outlined @click="patch({ closed: false })">
          <i class="bx bx-lock-open-alt me-1"></i> {{ $t('mod.forum.reopen') }}
        </Button>
        <Button v-if="can.moderate" size="small" outlined @click="mover = true">
          <i class="bx bx-transfer me-1"></i> {{ $t('mod.forum.move') }}
        </Button>
      </div>
    </header>

    <section class="panel fm-posts">
      <ModForumPostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :canReply="can.reply"
        :canReact="$auth.loggedIn"
        :upload="forum.upload"
        @reply="startReply"
        @react="react"
        @save="savePost"
        @remove="removePost"
      />
    </section>

    <Paginator
      v-if="meta && meta.totalPages > 1"
      class="my-4"
      :rows="meta.itemsPerPage"
      :totalRecords="meta.totalItems"
      :first="(meta.currentPage - 1) * meta.itemsPerPage"
      @page="onPage"
    />

    <section v-if="can.reply" ref="answer" class="panel fm-answer">
      <div v-if="replyTo" class="fm-answer__to">
        <span>{{ $t('mod.forum.reply_to', { author: replyTo.author?.username || '' }) }}</span>
        <Button size="small" text @click="replyTo = null"><i class="bx bx-x"></i></Button>
      </div>
      <RichEditor v-model="draft" height="220px" :upload="forum.upload" :placeholder="$t('mod.forum.reply_placeholder')" />
      <div class="mt-2">
        <Button :loading="sending" :disabled="!valid" :label="$t('mod.forum.send')" @click="send()" />
      </div>
    </section>

    <div v-else-if="topic.closed" class="panel fm-note">{{ $t('mod.forum.closed') }}</div>
    <div v-else-if="!$auth.loggedIn" class="panel fm-note">{{ $t('mod.forum.login_to_write') }}</div>

    <Dialog v-model:visible="mover" modal :header="$t('mod.forum.move')" :style="{ width: '460px' }">
      <div class="field">
        <label>{{ $t('mod.forum.move_to') }}</label>
        <Select v-model="target" class="w-100" :options="nodeOptions" optionLabel="title" optionValue="id" filter />
      </div>
      <template #footer>
        <Button text :label="$t('mod.forum.cancel')" @click="mover = false" />
        <Button :disabled="!target" :label="$t('mod.forum.save')" @click="move()" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { POST_CONTENT_MIN_LENGTH } from '../../../../../shared/constants'

definePageMeta({ layout: 'landing', wide: true, hero: false })

const { $t, $auth, $moment, $unicore } = useNuxtApp() as any
const route = useRoute()
const router = useRouter()
const forum = useForum()

const id = String(route.params.id)
const page = computed(() => Number(route.query.page || 1))

const { data, refresh } = await forum.topic(id, { page: page.value })

const sending = ref(false)
const draft = ref('')
const replyTo = ref<any>(null)
const mover = ref(false)
const target = ref<number | null>(null)
const nodes = ref<any[]>([])
const answer = ref<HTMLElement | null>(null)

const topic = computed(() => data.value?.topic || null)
const posts = computed(() => data.value?.posts?.data || [])
const meta = computed(() => data.value?.posts?.meta || null)
const can = computed(() => data.value?.can || { reply: false, moderate: false, close: false, open: false })
const nodeOptions = computed(() => nodes.value)
const valid = computed(() => plainLength(draft.value) >= POST_CONTENT_MIN_LENGTH)

useHead({ title: computed(() => topic.value?.title || $t('mod.forum.title')) })

watch(
  () => route.query.page,
  () => refresh(),
)

watch(mover, async (open) => {
  if (!open || nodes.value.length) return

  const index = await forum.fetchIndex().catch(() => null)

  nodes.value = (index?.sections || []).flatMap((section: any) => [
    { id: section.id, title: section.title },
    ...(section.children || []).map((child: any) => ({ id: child.id, title: `${section.title} › ${child.title}` })),
  ])
})

function plainLength(html: string) {
  return String(html || '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim().length
}

function onPage(event: { page: number }) {
  router.push({ query: { ...route.query, page: event.page + 1 } })
}

function startReply(post: any) {
  replyTo.value = post
  answer.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

async function send() {
  sending.value = true

  try {
    const result = await forum.reply(id, { content: draft.value, reply_to_id: replyTo.value?.id })

    draft.value = ''
    replyTo.value = null

    if (result.page && result.page !== page.value) await router.push({ query: { ...route.query, page: result.page } })
    else await refresh()
  } catch (error: any) {
    $unicore.errorNotification(error?.response?.data?.message || $t('common.unknown_error'))
  }

  sending.value = false
}

async function react(post: any, kind: string) {
  const updated = await forum.react(post.id, kind).catch(() => null)

  if (updated) post.reactions = updated
}

async function savePost(post: any, content: string) {
  await forum.editPost(post.id, { content }).catch(() => null)
  await refresh()
}

async function removePost(post: any) {
  await forum.removePost(post.id).catch(() => null)
  await refresh()
}

async function patch(body: Record<string, unknown>) {
  await forum.updateTopic(id, body).catch(() => null)
  await refresh()
}

async function move() {
  if (!target.value) return

  mover.value = false

  await forum.updateTopic(id, { node_id: target.value }).catch(() => null)
  await refresh()
}
</script>

<style scoped>
.fm-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin: 16px 0 24px;
}
.fm-head__text {
  min-width: 0;
}
.fm-head__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;
  color: rgba(var(--vs-text), 0.55);
}
.fm-head__tools {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.fm-posts {
  padding: 20px 24px;
  margin-bottom: 20px;
}
.fm-answer {
  padding: 20px 24px;
  margin-bottom: 20px;
}
.fm-answer__to {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  color: rgba(var(--vs-text), 0.6);
}
.fm-note {
  padding: 18px 24px;
  margin-bottom: 20px;
  color: rgba(var(--vs-text), 0.6);
}
</style>
