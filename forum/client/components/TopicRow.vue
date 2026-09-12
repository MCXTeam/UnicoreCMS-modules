<template>
  <div class="fm-topic" :class="{ 'fm-topic--unread': topic.unread }">
    <i class="fm-topic__icon" :class="icon"></i>

    <div class="fm-topic__text">
      <NuxtLink :to="`/mod/forum/topic/${topic.id}`" class="fm-topic__title without-underline">{{ topic.title }}</NuxtLink>
      <div class="fm-topic__meta">
        <ModForumUserChip :user="topic.author" :size="22" />
        <small>{{ $moment(topic.created_at).format('D MMMM YYYY') }}</small>
        <small v-if="topic.pages > 1">{{ $t('mod.forum.page_of', { page: topic.pages, total: topic.pages }) }}</small>
      </div>
    </div>

    <div class="fm-topic__counts">
      <ModForumCounter :value="replies" :label="$t('mod.forum.replies')" />
      <ModForumCounter :value="topic.views" :label="$t('mod.forum.views')" />
    </div>

    <div class="fm-topic__last">
      <ModForumStacked :skin="lastAuthor?.skin" :size="34">
        <template #top>
          <PlayerName v-if="lastAuthor" :username="lastAuthor.username" :role="lastAuthor.role" />
          <span v-else>{{ $t('common.unknown') }}</span>
        </template>
        <template #bottom>{{ $moment(topic.last_post_at).fromNow() }}</template>
      </ModForumStacked>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ topic: any }>()

const { $moment } = useNuxtApp() as any

const lastAuthor = computed(() => props.topic.last_author || props.topic.author || null)

const replies = computed(() => Math.max(0, Number(props.topic.posts_count || 0) - 1))

const icon = computed(() => {
  if (props.topic.closed) return 'bx bx-lock-alt'
  if (props.topic.pinned) return 'bx bx-pin'

  return props.topic.unread ? 'bx bxs-message-dots' : 'bx bx-message'
})
</script>

<style scoped>
.fm-topic {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 4px;
}
.fm-topic + .fm-topic {
  border-top: 1px solid rgba(var(--vs-text), 0.08);
}
.fm-topic__icon {
  flex: 0 0 auto;
  font-size: 1.4rem;
  opacity: 0.6;
}
.fm-topic--unread .fm-topic__icon {
  opacity: 1;
  color: rgb(var(--vs-primary));
}
.fm-topic__text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.fm-topic__title {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.25;
}
.fm-topic__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 1.35;
  color: rgba(var(--vs-text), 0.55);
}
.fm-topic__counts {
  display: flex;
  gap: 22px;
  flex: 0 0 auto;
}
.fm-topic__last {
  flex: 0 0 auto;
  width: 220px;
  min-width: 0;
}
@media (max-width: 991.98px) {
  .fm-topic {
    flex-wrap: wrap;
  }
  .fm-topic__last {
    width: 100%;
  }
}
</style>
