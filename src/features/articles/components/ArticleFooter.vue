<script setup lang="ts">
import type { Article } from '@/types/article.ts'

defineProps<{
  article: Article
  pastel: string
  nextArticle?: Article | null
}>()
</script>

<template>
  <div class="divider"></div>
  <div class="footer-nav">
    <RouterLink
      v-if="nextArticle"
      class="next-link"
      :to="{ name: 'article', params: { id: nextArticle.id } }"
    >
      <span class="meta">Article suivant</span>
      {{ nextArticle.titre }} <span class="arrow">→</span>
    </RouterLink>
  </div>
</template>

<style scoped>
.divider {
  border-top: 1px solid var(--divider);
  margin: 40px 0;
}

.footer-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}
.arrow {
  font-size: 15px;
}

.next-link {
  display: block;
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.4px;
  color: var(--text);
}

.meta {
  display: block;
  font-size: 13px;
  font-weight: 400;
  color: var(--text-faint);
  margin-bottom: 6px;
}
</style>
