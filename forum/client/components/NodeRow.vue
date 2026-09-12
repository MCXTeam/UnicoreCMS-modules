<template>
  <div class="fm-node">
    <i class="fm-node__icon" :class="node.icon || 'bx bx-chat'"></i>

    <div class="fm-node__text">
      <div class="fm-node__head">
        <NuxtLink :to="`/mod/forum/node/${node.slug}`" class="fm-node__title without-underline">{{ node.title }}</NuxtLink>
        <span v-if="node.unread" class="fm-node__dot" v-tooltip.top="$t('mod.forum.unread')"></span>
      </div>
      <p v-if="node.description" class="fm-node__desc">{{ node.description }}</p>
      <small v-if="node.children_count" class="fm-node__kids">{{ $t('mod.forum.subnodes') }}: {{ node.children_count }}</small>
    </div>

    <div class="fm-node__counts">
      <ModForumCounter :value="node.topics_count" :label="$t('mod.forum.topics')" />
      <ModForumCounter :value="replies" :label="$t('mod.forum.replies')" />
    </div>

    <div class="fm-node__last">
      <ModForumLastPost :last="node.last" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ node: any }>()

const replies = computed(() => Math.max(0, Number(props.node.posts_count || 0) - Number(props.node.topics_count || 0)))
</script>

<style scoped>
.fm-node {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 4px;
}
.fm-node + .fm-node {
  border-top: 1px solid rgba(var(--vs-text), 0.08);
}
.fm-node__icon {
  flex: 0 0 auto;
  font-size: 1.6rem;
  opacity: 0.7;
}
.fm-node__text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.fm-node__head {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.fm-node__title {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.25;
}
.fm-node__dot {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(var(--vs-primary));
}
.fm-node__desc {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.35;
  color: rgba(var(--vs-text), 0.6);
}
.fm-node__kids {
  color: rgba(var(--vs-text), 0.5);
}
.fm-node__counts {
  display: flex;
  gap: 22px;
  flex: 0 0 auto;
}
.fm-node__last {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
  width: 260px;
  min-width: 0;
}
@media (max-width: 991.98px) {
  .fm-node {
    flex-wrap: wrap;
  }
  .fm-node__last {
    width: 100%;
  }
}
</style>
