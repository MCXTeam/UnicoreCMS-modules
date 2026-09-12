<template>
  <span class="fm-user">
    <SkinView2D v-if="user" class="fm-user__face" :width="size" :height="size" :skin="user.skin" />
    <PlayerName v-if="user" :username="user.username" :role="user.role" />
    <span v-else class="fm-user__gone">{{ $t('common.unknown') }}</span>
  </span>
</template>

<script setup lang="ts">
interface ChipUser {
  username: string
  skin?: any
  role?: any
}

withDefaults(defineProps<{ user?: ChipUser | null; size?: number }>(), { size: 28 })
</script>

<style scoped>
.fm-user {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.fm-user__face {
  flex: 0 0 auto;
  border-radius: 8px;
  overflow: hidden;
}
.fm-user__gone {
  opacity: 0.6;
}
</style>
