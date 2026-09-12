<template>
  <div class="fm-stack">
    <SkinView2D class="fm-stack__face" :width="size" :height="size" :skin="skin" />
    <div class="fm-stack__text">
      <div class="fm-stack__top"><slot name="top" /></div>
      <small class="fm-stack__bottom"><slot name="bottom" /></small>
    </div>
    <slot name="tail" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ skin?: any; size?: number }>(), { size: 36 })
</script>

<style scoped>
.fm-stack {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.fm-stack__face {
  flex: 0 0 auto;
  border-radius: 8px;
  overflow: hidden;
}
.fm-stack__text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.fm-stack__top {
  font-weight: 600;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fm-stack__bottom {
  line-height: 1.35;
  color: rgba(var(--vs-text), 0.55);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
