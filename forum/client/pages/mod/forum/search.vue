<template>
  <div class="fm">
    <ModForumCrumbs :items="[]" :tail="$t('mod.forum.search')" />

    <header class="fm-head">
      <h1 class="m-0">{{ $t('mod.forum.search') }}</h1>
      <IconField>
        <InputIcon class="bx bx-search" />
        <InputText v-model="term" :placeholder="$t('mod.forum.search_placeholder')" @keyup.enter="run()" />
      </IconField>
    </header>

    <p v-if="term.trim().length && term.trim().length < SEARCH_MIN_LENGTH" class="fm-hint">
      {{ $t('mod.forum.search_hint', { count: SEARCH_MIN_LENGTH }) }}
    </p>

    <section v-if="topics.length" class="panel fm-block">
      <h2 class="fm-block__title">{{ $t('mod.forum.search_topics') }}</h2>
      <div v-for="topic in topics" :key="topic.id" class="fm-hit">
        <NuxtLink :to="`/mod/forum/topic/${topic.id}`" class="fm-hit__title without-underline">{{ topic.title }}</NuxtLink>
        <div class="fm-hit__meta">
          <ModForumUserChip :user="topic.author" :size="22" />
          <small v-if="topic.node">{{ topic.node.title }}</small>
          <small>{{ $moment(topic.created_at).fromNow() }}</small>
        </div>
      </div>
    </section>

    <section v-if="posts.length" class="panel fm-block">
      <h2 class="fm-block__title">{{ $t('mod.forum.search_posts') }}</h2>
      <div v-for="post in posts" :key="post.id" class="fm-hit">
        <NuxtLink :to="`/mod/forum/topic/${post.topic_id}`" class="fm-hit__title without-underline">{{ post.topic_title }}</NuxtLink>
        <p class="fm-hit__excerpt">{{ post.excerpt }}</p>
        <div class="fm-hit__meta">
          <ModForumUserChip :user="post.author" :size="22" />
          <small v-if="post.node">{{ post.node.title }}</small>
          <small>{{ $moment(post.created_at).fromNow() }}</small>
        </div>
      </div>
    </section>

    <div v-if="searched && !topics.length && !posts.length" class="panel fm-empty">
      <i class="bx bx-search-alt"></i>
      <span>{{ $t('mod.forum.search_empty') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SEARCH_MIN_LENGTH } from '../../../../shared/constants'

definePageMeta({ layout: 'landing', wide: true, hero: false })

const { $t, $moment } = useNuxtApp() as any
const route = useRoute()
const router = useRouter()
const forum = useForum()

const term = ref(String(route.query.q || ''))
const topics = ref<any[]>([])
const posts = ref<any[]>([])
const searched = ref(false)

useHead({ title: computed(() => $t('mod.forum.search')) })

async function load(query: string) {
  if (query.trim().length < SEARCH_MIN_LENGTH) {
    topics.value = []
    posts.value = []
    searched.value = false

    return
  }

  const result = await forum.search(query.trim()).catch(() => null)

  topics.value = result?.topics || []
  posts.value = result?.posts || []
  searched.value = true
}

function run() {
  router.push({ query: { q: term.value.trim() } })
}

watch(
  () => route.query.q,
  (value) => {
    term.value = String(value || '')
    load(term.value)
  },
)

onMounted(() => load(term.value))
</script>

<style scoped>
.fm-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin: 16px 0 24px;
}
.fm-hint {
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
.fm-hit {
  padding: 12px 0;
}
.fm-hit + .fm-hit {
  border-top: 1px solid rgba(var(--vs-text), 0.08);
}
.fm-hit__title {
  font-weight: 600;
  line-height: 1.25;
}
.fm-hit__excerpt {
  margin: 2px 0 0;
  line-height: 1.35;
  color: rgba(var(--vs-text), 0.7);
}
.fm-hit__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
  color: rgba(var(--vs-text), 0.55);
}
.fm-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px;
  margin-bottom: 20px;
  color: rgba(var(--vs-text), 0.55);
}
.fm-empty i {
  font-size: 2rem;
}
</style>
