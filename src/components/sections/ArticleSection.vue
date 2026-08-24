<script setup lang="ts">
import ArticleCard from '@/features/articles/components/ArticleCard.vue'
import ArticleCardSkeleton from '@/features/articles/components/ArticleCardSkeleton.vue'
import PaginationUi from '@/components/ui/pagination-ui.vue'
import { getArticles } from '@/services/article.ts'
import { usePagination } from '@/composables/usePagination.ts'

const { data: articles, loading, error, execute } = getArticles()
const { page, pageCount, visibles, offset, goTo, prev, next } = usePagination(articles, 3)

const pastels = ['card-terracotta', 'card-sage', 'card-blue'] as const
</script>

<template>
  <section class="section">
    <div class="section-head">
      <h2>Articles</h2>
      <span class="meta">{{ articles?.length ?? 0 }} articles</span>
    </div>

    <!-- Chargement -->
    <div v-if="loading" class="article-container">
      <ArticleCardSkeleton v-for="n in 3" :key="n" />
    </div>

    <!-- Erreur -->
    <div v-else-if="error" class="state-error">
      <div class="state-error-head">
        <span class="state-dot"></span>
        Impossible de charger les articles
      </div>
      <p class="state-error-text">
        Le serveur n'a pas répondu. Vérifiez votre connexion, ou réessayez dans un instant.
      </p>
      <button class="btn btn-secondary" @click="execute">Réessayer</button>
    </div>

    <!-- Contenu -->
    <template v-else>
      <div class="article-container">
        <ArticleCard
          v-for="(article, i) in visibles"
          :key="article.id"
          :article="article"
          :pastel="pastels[(offset + i) % pastels.length] ?? pastels[0]"
        />
      </div>

      <pagination-ui :page="page" :page-count="pageCount" @prev="prev" @go-to="goTo" @next="next" />
    </template>
  </section>
</template>

<style scoped>
.article-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 980px) {
  .article-container {
    grid-template-columns: 1fr;
  }
}
</style>
