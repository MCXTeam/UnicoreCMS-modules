<template>
  <div>
    <div class="team-head">
      <h1 class="m-0">{{ title }}</h1>
      <p v-if="subtitle" class="m-0">{{ subtitle }}</p>
    </div>

    <div v-if="visibleSections.length" class="team-sections">
      <section v-for="section in visibleSections" :key="section.id" class="panel team-section">
        <div class="team-section__head">
          <IconAvatar v-if="section.icon" :path="section.icon" icon="bx bxs-server" />
          <h2 class="m-0">{{ section.title }}</h2>
        </div>
        <div class="team-section__grid">
          <ModTeamCard v-for="member in section.members" :key="member.uuid" :member="member" />
        </div>
      </section>
    </div>
    <div v-else-if="!categorySections.length" class="panel team-empty">
      <i class="bx bx-group"></i>
      <span>{{ $t('mod.team.empty') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'landing' })

const { $api, $t } = useNuxtApp()
const { value } = usePublicConfig()

const { data } = await useAsyncData<any[]>('mod-team', () => $api.get('/mod/team').then((res: any) => res.data))
const { data: categoryData } = await useAsyncData<any[]>(
  'mod-team-categories',
  () => $api.get('/mod/team/categories-sections').then((res: any) => res.data),
  { default: () => [] },
)

const mode = computed(() => String(value('public_mod_team_display', 'servers') || 'servers'))

const sections = computed(() => (data.value || []).filter((section: any) => section.members?.length))
const categorySections = computed(() => (categoryData.value || []).filter((section: any) => section.members?.length))
const visibleSections = computed(() => {
  if (mode.value === 'categories') return categorySections.value.length ? categorySections.value : sections.value
  if (mode.value === 'all') return [...categorySections.value, ...sections.value]

  return sections.value
})
const title = computed(() => String(value('public_mod_team_title', '') || $t('mod.team.page_title')))
const subtitle = computed(() => String(value('public_mod_team_subtitle', '') || ''))

useHead({ title })
</script>

<style scoped>
.team-head {
  margin-bottom: 24px;
  text-align: center;
}
.team-head p {
  margin-top: 8px !important;
  color: rgba(var(--vs-text), 0.6);
}
.team-sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.team-section {
  padding: 24px;
}
.team-section__head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}
.team-section__head h2 {
  font-size: 20px;
}
.team-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
}
.team-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 48px 24px;
  color: rgba(var(--vs-text), 0.6);
}
.team-empty i {
  font-size: 32px;
}
</style>
