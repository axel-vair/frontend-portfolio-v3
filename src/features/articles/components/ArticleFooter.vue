<script setup lang="ts">
import type { Article } from '@/types/article.ts'

defineProps<{
  article: Article
  pastel: string
  nextArticle?: Article | null
  prevArticle?: Article | null
}>()
</script>

<template>
  <div class="divider"></div>
  <div class="footer-nav">
    <RouterLink
      v-if="prevArticle"
      class="nav-link"
      :to="{ name: 'article', params: { id: prevArticle.id } }"
    >
      <span class="meta">Article précédent</span>
      <span class="title">← {{ prevArticle.titre }}</span>
    </RouterLink>

    <RouterLink
      v-if="nextArticle"
      class="nav-link is-next"
      :to="{ name: 'article', params: { id: nextArticle.id } }"
    >
      <span class="meta">Article suivant</span>
      <span class="title">{{ nextArticle.titre }} →</span>
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
  align-items: start;
  justify-content: space-between;
  gap: 24px;
}

.nav-link {
  flex: 1 1 0;
  min-width: 0;
  max-width: 45%;
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.4px;
  color: var(--text);
}

.nav-link .title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: anywhere;
}

.nav-link.is-next {
  margin-left: auto;
  text-align: right;
}

.meta {
  display: block;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 400;
  color: var(--text-faint);
  margin-bottom: 6px;
}

@media (max-width: 640px) {
  .footer-nav {
    flex-direction: column;
    gap: 28px;
  }
  .nav-link,
  .nav-link.is-next {
    max-width: 100%;
    text-align: left;
    margin-left: 0;
  }
}
</style>
