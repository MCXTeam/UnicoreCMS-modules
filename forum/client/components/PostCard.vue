<template>
  <article class="fm-post" :class="{ 'fm-post--deleted': post.deleted }">
    <aside class="fm-post__side">
      <SkinView2D class="fm-post__face" :width="64" :height="64" :skin="post.author?.skin" />
      <PlayerName v-if="post.author" :username="post.author.username" :role="post.author.role" />
      <span v-else class="fm-post__gone">{{ $t('common.unknown') }}</span>
    </aside>

    <div class="fm-post__body">
      <header class="fm-post__head">
        <small>{{ $moment(post.created_at).format('D MMMM YYYY, HH:mm') }}</small>
        <small v-if="post.edited_at" class="fm-post__edited">
          {{ $t('mod.forum.edited', { date: $moment(post.edited_at).format('D MMMM, HH:mm') }) }}
        </small>
        <div class="fm-post__tools">
          <Button v-if="canReply" size="small" text @click="$emit('reply', post)">
            <i class="bx bx-reply"></i>
          </Button>
          <Button v-if="post.can?.edit && !post.deleted" size="small" text @click="startEdit()">
            <i class="bx bx-edit-alt"></i>
          </Button>
          <Button
            v-if="post.can?.delete && !post.deleted && !post.first"
            size="small"
            text
            severity="danger"
            v-tooltip.top="confirming ? $t('mod.forum.confirm') : $t('mod.forum.delete')"
            @click="remove()"
          >
            <i :class="confirming ? 'bx bx-check' : 'bx bx-trash'"></i>
          </Button>
        </div>
      </header>

      <div v-if="post.reply_to" class="fm-post__quote">
        <b>{{ $t('mod.forum.reply_to', { author: post.reply_to.author?.username || '' }) }}</b>
        <span>{{ post.reply_to.excerpt }}</span>
      </div>

      <p v-if="post.deleted" class="fm-post__removed">{{ $t('mod.forum.deleted_post') }}</p>
      <template v-else>
        <div v-if="!editing" class="fm-post__content" v-html="$sanitize(post.content)" />
        <div v-else class="fm-post__editor">
          <RichEditor v-model="draft" height="220px" :upload="upload" />
          <div class="d-flex gap-2 mt-2">
            <Button size="small" :label="$t('mod.forum.save')" @click="save()" />
            <Button size="small" outlined :label="$t('mod.forum.cancel')" @click="editing = false" />
          </div>
        </div>
      </template>

      <footer v-if="!post.deleted" class="fm-post__foot">
        <ModForumReactions :reactions="post.reactions" :can="canReact" @react="$emit('react', post, $event)" />
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ post: any; canReply: boolean; canReact: boolean; upload?: (file: File) => Promise<string> }>()

const emit = defineEmits<{ reply: [post: any]; react: [post: any, kind: string]; save: [post: any, content: string]; remove: [post: any] }>()

const { $moment } = useNuxtApp() as any

const editing = ref(false)
const draft = ref('')
const confirming = ref(false)

function startEdit() {
  draft.value = props.post.content
  editing.value = true
}

function save() {
  emit('save', props.post, draft.value)
  editing.value = false
}

function remove() {
  if (!confirming.value) {
    confirming.value = true
    setTimeout(() => (confirming.value = false), 4000)

    return
  }

  confirming.value = false
  emit('remove', props.post)
}
</script>

<style scoped>
.fm-post {
  display: flex;
  gap: 20px;
  padding: 20px 0;
}
.fm-post:first-child {
  padding-top: 0;
}
.fm-post + .fm-post {
  border-top: 1px solid rgba(var(--vs-text), 0.08);
}
.fm-post--deleted {
  opacity: 0.6;
}
.fm-post__side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex: 0 0 auto;
  width: 132px;
  line-height: 1.25;
  text-align: center;
}
.fm-post__face {
  border-radius: 12px;
  overflow: hidden;
}
.fm-post__gone {
  opacity: 0.6;
}
.fm-post__body {
  flex: 1 1 auto;
  min-width: 0;
}
.fm-post__head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: rgba(var(--vs-text), 0.55);
}
.fm-post__edited {
  font-style: italic;
}
.fm-post__tools {
  margin-left: auto;
  display: flex;
  gap: 2px;
}
.fm-post__quote {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 12px;
  padding: 8px 12px;
  border-left: 3px solid rgba(var(--vs-primary), 0.6);
  border-radius: 0 10px 10px 0;
  background: rgba(var(--vs-text), 0.05);
  font-size: 0.9rem;
}
.fm-post__content {
  overflow-wrap: anywhere;
}
.fm-post__content :deep(img) {
  max-width: 100%;
  border-radius: 10px;
}
.fm-post__content :deep(p:last-child) {
  margin-bottom: 0;
}
.fm-post__removed {
  margin: 0;
  font-style: italic;
  opacity: 0.7;
}
.fm-post__foot {
  margin-top: 14px;
}
@media (max-width: 767.98px) {
  .fm-post {
    flex-direction: column;
    gap: 12px;
  }
  .fm-post__side {
    flex-direction: row;
    width: auto;
  }
}
</style>
