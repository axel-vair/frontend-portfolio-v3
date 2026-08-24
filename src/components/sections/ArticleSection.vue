<script setup lang="ts">
import ArticleCard from '@/features/articles/components/ArticleCard.vue'
</script>

<template>
  <section class="section">
    <div class="section-head">
      <h2>Articles</h2>
      <span class="meta">articles</span>
    </div>
    <div class="article-container">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  </section>
</template>

<style scoped>
.article-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
</style>
