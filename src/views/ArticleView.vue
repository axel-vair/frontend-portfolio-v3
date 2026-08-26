<script setup lang="ts">
import { computed } from 'vue'
import ArticleHeader from '@/features/articles/components/ArticleHeader.vue'
import ArticleBody from '@/features/articles/components/ArticleBody.vue'
import ArticleFooter from '@/features/articles/components/ArticleFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import { getArticle, getArticles } from '@/services/article.ts'
import { getPastel } from '@/utils/pastels.ts'

const props = defineProps<{ id: string }>()

const { data: article, loading, error } = getArticle(() => props.id)
const { data: articles } = getArticles()

const pastel = computed(() => (article.value ? getPastel(article.value.id) : ''))

const nextArticle = computed(() => {
  if (!articles.value || !article.value) return null
  const sorted = [...articles.value].sort((a, b) => a.id - b.id)
  const currentIndex = sorted.findIndex((a) => a.id === article.value!.id)
  if (currentIndex === -1 || currentIndex === sorted.length - 1) return null
  return sorted[currentIndex + 1]
})

const prevArticle = computed(() => {
  if (!articles.value || !article.value) return null
  const sorted = [...articles.value].sort((a, b) => a.id - b.id)
  const currentIndex = sorted.findIndex((a) => a.id === article.value!.id)
  if (currentIndex === -1 || currentIndex === 0) return null
  return sorted[currentIndex - 1]
})
</script>

<template>
  <div class="container">
    <AppHeader />
  </div>

  <article class="article">
    <p v-if="loading">Chargement…</p>
    <p v-else-if="error">Une erreur est survenue.</p>

    <template v-else-if="article">
      <ArticleHeader :article="article" />
      <ArticleBody :article="article" />
      <ArticleFooter
        :article="article"
        :pastel="pastel"
        :next-article="nextArticle"
        :prev-article="prevArticle"
      />
    </template>
  </article>
</template>

<style scoped>
.article {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px var(--page-pad) 120px;
}
</style>
