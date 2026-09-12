<template>
  <ModForumStacked v-if="last" :skin="last.user?.skin" :size="size">
    <template #top>
      <NuxtLink :to="`/mod/forum/topic/${last.topic_id}`" class="without-underline">{{ last.title }}</NuxtLink>
    </template>
    <template #bottom>
      <template v-if="last.user">{{ $t('mod.forum.by_author', { author: last.user.username }) }} · </template>
      {{ $moment(last.at).fromNow() }}
    </template>
  </ModForumStacked>
  <span v-else class="fm-last__empty">{{ $t('mod.forum.no_discussions') }}</span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ last?: any | null; size?: number }>(), { size: 36 })

const { $moment } = useNuxtApp() as any
</script>

<style scoped>
.fm-last__empty {
  color: rgba(var(--vs-text), 0.5);
}
</style>
