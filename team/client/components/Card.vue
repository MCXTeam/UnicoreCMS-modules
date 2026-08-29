<template>
  <NuxtLink :to="`/user/${member.username}`" class="team-card">
    <div class="team-card__face">
      <SkinView2D :width="48" :height="48" :skin="member.skin || undefined" />
    </div>
    <div class="team-card__text">
      <h4 class="team-card__name">{{ member.username }}</h4>
      <span v-if="member.label" class="team-card__label" :style="labelStyle">{{ member.label }}</span>
      <p v-if="member.note?.text" class="team-card__note">{{ member.note.text }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  member: {
    username: string
    label?: string | null
    color?: string | null
    note?: { text?: string | null } | null
    skin?: { file: string } | null
  }
}>()

const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i

function readable(hex: string): string {
  const digits = hex.length === 4 ? [...hex.slice(1)].map((c) => c + c).join('') : hex.slice(1)
  const channels = [0, 2, 4].map((offset) => parseInt(digits.slice(offset, offset + 2), 16) / 255)
  const [red, green, blue] = channels.map((channel) => (channel <= 0.04 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4))
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue

  return luminance > 0.4 ? '#111111' : '#ffffff'
}

const labelStyle = computed(() => {
  const color = props.member.color

  if (!color || !HEX.test(color)) return color ? { color } : {}

  return { background: color, color: readable(color) }
})
</script>

<style scoped>
.team-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(var(--vs-text), 0.04);
  transition: background 160ms;
  color: inherit;
}
.team-card:hover {
  background: rgba(var(--vs-text), 0.07);
}
.team-card__face :deep(canvas) {
  display: block;
  border-radius: 10px;
  image-rendering: pixelated;
}
.team-card__text {
  min-width: 0;
}
.team-card__name {
  margin: 0;
  font-size: 15px;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.team-card__label {
  display: inline-block;
  margin-top: 2px;
  padding: 1px 9px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
}
.team-card__note {
  margin: 3px 0 0;
  font-size: 13px;
  line-height: 1.45;
  color: rgba(var(--vs-text), 0.6);
  overflow-wrap: anywhere;
}
</style>
