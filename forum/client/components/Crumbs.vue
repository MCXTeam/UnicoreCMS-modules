<template>
  <nav class="fm-crumbs">
    <NuxtLink to="/mod/forum" class="without-underline">{{ $t('mod.forum.title') }}</NuxtLink>
    <template v-for="item in items" :key="item.id">
      <i class="bx bx-chevron-right"></i>
      <NuxtLink :to="`/mod/forum/node/${item.slug}`" class="without-underline">{{ item.title }}</NuxtLink>
    </template>
    <template v-if="tail">
      <i class="bx bx-chevron-right"></i>
      <span class="fm-crumbs__tail">{{ tail }}</span>
    </template>
  </nav>
</template>

<script setup lang="ts">
defineProps<{ items: { id: number; slug: string; title: string }[]; tail?: string }>()
</script>

<style scoped>
.fm-crumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 0.92rem;
  color: rgba(var(--vs-text), 0.6);
}
.fm-crumbs__tail {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 50vw;
}
</style>
