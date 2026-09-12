<template>
  <div class="fm-react">
    <button
      v-for="entry in list"
      :key="entry.kind"
      class="fm-react__chip"
      :class="{ 'fm-react__chip--mine': entry.mine }"
      :disabled="!can"
      v-tooltip.top="$t(`mod.forum.reaction_${entry.kind}`)"
      @click="$emit('react', entry.kind)"
    >
      <img :src="icons[entry.kind]" :alt="entry.kind" />
      <span>{{ entry.count }}</span>
    </button>

    <div v-if="can" ref="picker" class="fm-react__add">
      <button class="fm-react__chip fm-react__chip--add" v-tooltip.top="$t('mod.forum.react')" @click.stop="open = !open">
        <i class="bx bx-smile"></i>
      </button>
      <Transition name="fm-fade">
        <div v-if="open" class="fm-react__menu">
          <button
            v-for="reaction in REACTIONS"
            :key="reaction.id"
            class="fm-react__option"
            v-tooltip.top="$t(`mod.forum.reaction_${reaction.id}`)"
            @click="pick(reaction.id)"
          >
            <img :src="icons[reaction.id]" :alt="reaction.id" />
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { REACTIONS } from '../../shared/constants'

const props = defineProps<{ reactions: { kind: string; count: number; mine: boolean }[]; can: boolean }>()

const emit = defineEmits<{ react: [kind: string] }>()

const modules = import.meta.glob('../assets/emoji/*.svg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>

const icons = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split('/').pop()!.replace('.svg', ''), url]),
) as Record<string, string>

const picker = ref<HTMLElement | null>(null)
const open = ref(false)

const list = computed(() => props.reactions || [])

function pick(kind: string) {
  open.value = false
  emit('react', kind)
}

function onGlobalClick(event: MouseEvent) {
  if (!open.value) return
  if (picker.value?.contains(event.target as Node)) return

  open.value = false
}

onMounted(() => document.addEventListener('click', onGlobalClick))
onBeforeUnmount(() => document.removeEventListener('click', onGlobalClick))
</script>

<style scoped>
.fm-react {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}
.fm-react__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid rgba(var(--vs-text), 0.12);
  border-radius: 999px;
  background: none;
  color: inherit;
  font-size: 0.85rem;
  line-height: 1;
  cursor: pointer;
}
.fm-react__chip:disabled {
  cursor: default;
}
.fm-react__chip:not(:disabled):hover {
  border-color: rgba(var(--vs-primary), 0.5);
}
.fm-react__chip--mine {
  border-color: rgb(var(--vs-primary));
  background: rgba(var(--vs-primary), 0.12);
}
.fm-react__chip--add {
  font-size: 1.1rem;
  padding: 4px 9px;
}
.fm-react__chip img {
  width: 18px;
  height: 18px;
}
.fm-react__add {
  position: relative;
}
.fm-react__menu {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  display: flex;
  gap: 4px;
  padding: 6px;
  border: 1px solid var(--p-content-border-color);
  border-radius: 14px;
  background: var(--vs-theme-layout);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
  z-index: 20;
}
.fm-react__option {
  display: inline-flex;
  padding: 4px;
  border: none;
  border-radius: 8px;
  background: none;
  cursor: pointer;
}
.fm-react__option:hover {
  background: rgba(var(--vs-text), 0.08);
}
.fm-react__option img {
  width: 22px;
  height: 22px;
}
.fm-fade-enter-active,
.fm-fade-leave-active {
  transition: opacity 0.15s ease;
}
.fm-fade-enter-from,
.fm-fade-leave-to {
  opacity: 0;
}
</style>
