<template>
  <div class="fm-counter" :class="{ 'fm-counter--large': large }">
    <b>{{ value }}</b>
    <span>{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ value: number | string; label: string; large?: boolean }>()
</script>

<style scoped>
.fm-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 56px;
}
.fm-counter b {
  font-size: 1.2rem;
  line-height: 1.25;
}
.fm-counter span {
  font-size: 0.78rem;
  line-height: 1.35;
  color: rgba(var(--vs-text), 0.55);
}
.fm-counter--large b {
  font-size: 1.4rem;
}
.fm-counter--large span {
  font-size: 0.8rem;
}
</style>
