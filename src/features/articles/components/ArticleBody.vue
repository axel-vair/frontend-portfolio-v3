<script setup lang="ts">
import type { Article } from '@/types/article.ts'

const props = defineProps<{ article: Article }>()
</script>

<template>
  <div>
    <div class="content">{{ props.article.contenu }}</div>
  </div>
</template>

<style scoped>
.content {
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.75;
  color: #4a4842;
  white-space: pre-line;
}
</style>
