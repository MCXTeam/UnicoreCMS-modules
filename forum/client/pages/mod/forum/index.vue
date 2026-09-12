<template>
  <div class="fm">
    <header class="fm-head">
      <div>
        <h1 class="m-0">{{ title }}</h1>
        <p v-if="subtitle" class="m-0">{{ subtitle }}</p>
      </div>
      <div class="fm-head__tools">
        <IconField>
          <InputIcon class="bx bx-search" />
          <InputText v-model="term" :placeholder="$t('mod.forum.search_placeholder')" @keyup.enter="goSearch()" />
        </IconField>
        <Button v-if="$auth.loggedIn" outlined :label="$t('mod.forum.mark_all_read')" @click="readAll()" />
      </div>
    </header>

    <div class="fm-layout">
      <main class="fm-main">
        <section v-for="section in sections" :key="section.id" class="panel fm-section">
          <div class="fm-section__head">
            <NuxtLink :to="`/mod/forum/node/${section.slug}`" class="fm-section__title without-underline">
              <i v-if="section.icon" :class="section.icon"></i> {{ section.title }}
            </NuxtLink>
            <span v-if="section.unread" class="fm-section__dot"></span>
          </div>
          <p v-if="section.description" class="fm-section__desc">{{ section.description }}</p>

          <ModForumNodeRow v-for="child in section.children" :key="child.id" :node="child" />
          <ModForumNodeRow v-if="!section.children.length" :node="section" />
        </section>

        <div v-if="!sections.length" class="panel fm-empty">
          <i class="bx bx-conversation"></i>
          <span>{{ $t('mod.forum.no_sections') }}</span>
        </div>
      </main>

      <aside class="fm-aside">
        <section class="panel fm-card">
          <h3>{{ $t('mod.forum.latest') }}</h3>
          <div v-if="latest.length" class="fm-list">
            <div v-for="topic in latest" :key="topic.id" class="fm-list__row">
              <ModForumLastPost :last="{ topic_id: topic.id, title: topic.title, at: topic.last_post_at, user: topic.author }" />
            </div>
          </div>
          <p v-else class="fm-card__empty">{{ $t('mod.forum.no_discussions') }}</p>
        </section>

        <section class="panel fm-card">
          <h3>{{ $t('mod.forum.leaders') }}</h3>
          <div v-if="leaders.length" class="fm-list">
            <div v-for="(leader, index) in leaders" :key="leader.user.uuid" class="fm-list__row">
              <ModForumStacked :skin="leader.user.skin" :size="34">
                <template #top>
                  <PlayerName :username="leader.user.username" :role="leader.user.role" />
                </template>
                <template #bottom>{{ $t('mod.forum.leader_posts', { count: leader.posts }) }}</template>
                <template #tail>
                  <b class="fm-list__place">{{ String(index + 1).padStart(2, '0') }}</b>
                </template>
              </ModForumStacked>
            </div>
          </div>
          <p v-else class="fm-card__empty">{{ $t('mod.forum.no_discussions') }}</p>
        </section>

        <section class="panel fm-card fm-stats">
          <ModForumCounter large :value="stats.topics" :label="$t('mod.forum.topics')" />
          <ModForumCounter large :value="stats.posts" :label="$t('mod.forum.posts')" />
          <ModForumCounter large :value="stats.authors" :label="$t('mod.forum.authors')" />
        </section>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'landing', wide: true, hero: false })

const { $t, $auth } = useNuxtApp() as any
const { value } = usePublicConfig()
const forum = useForum()
const router = useRouter()

const { data, refresh } = await forum.index()

const term = ref('')

const sections = computed<any[]>(() => data.value?.sections || [])
const latest = computed<any[]>(() => data.value?.latest || [])
const leaders = computed<any[]>(() => data.value?.leaders || [])
const stats = computed(() => data.value?.stats || { topics: 0, posts: 0, authors: 0 })
const title = computed(() => String(value('public_mod_forum_title', '') || $t('mod.forum.title')))
const subtitle = computed(() => String(value('public_mod_forum_subtitle', '') || ''))

useHead({ title })

function goSearch() {
  if (!term.value.trim()) return

  router.push({ path: '/mod/forum/search', query: { q: term.value.trim() } })
}

async function readAll() {
  await forum.markAllRead().catch(() => null)
  await refresh()
}
</script>

<style scoped>
.fm-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.fm-head p {
  margin-top: 8px !important;
  color: rgba(var(--vs-text), 0.6);
}
.fm-head__tools {
  display: flex;
  align-items: center;
  gap: 10px;
}
.fm-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 20px;
  align-items: start;
}
.fm-main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
}
.fm-section {
  padding: 20px 24px;
}
.fm-section__head {
  display: flex;
  align-items: center;
  gap: 10px;
}
.fm-section__title {
  font-size: 1.3rem;
  font-weight: 700;
}
.fm-section__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(var(--vs-primary));
}
.fm-section__desc {
  margin: 6px 0 0;
  color: rgba(var(--vs-text), 0.6);
}
.fm-aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.fm-card {
  padding: 20px;
}
.fm-card h3 {
  margin: 0 0 14px;
  text-align: center;
}
.fm-card__empty {
  margin: 0;
  text-align: center;
  color: rgba(var(--vs-text), 0.5);
}
.fm-list {
  display: flex;
  flex-direction: column;
}
.fm-list__row {
  padding: 10px 0;
}
.fm-list__row + .fm-list__row {
  border-top: 1px solid rgba(var(--vs-text), 0.08);
}
.fm-list__row:first-child {
  padding-top: 0;
}
.fm-list__place {
  flex: 0 0 auto;
  margin-left: auto;
  font-size: 1.1rem;
  opacity: 0.5;
}
.fm-stats {
  display: flex;
  justify-content: space-around;
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
@media (max-width: 1199.98px) {
  .fm-layout {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
