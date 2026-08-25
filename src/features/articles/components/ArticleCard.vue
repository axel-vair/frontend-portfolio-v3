<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '@/types/article.ts'
import { getPastel } from '@/utils/pastels.ts'

const props = defineProps<{ article: Article }>()
const pastel = computed(() => getPastel(props.article.id))
const dateFormated = computed(() =>
  new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'numeric', year: 'numeric' }).format(
    new Date(props.article.datePublication),
  ),
)
</script>

<template>
  <article class="article">
    <div class="banner" :class="pastel"></div>
    <div class="body">
      <div class="meta">
        <span class="date-pill" :class="pastel">{{ dateFormated }}</span>
      </div>
      <h3>{{ article.titre }}</h3>
      <p class="description">{{ article.chapeau }}</p>
      <RouterLink
        class="article-link"
        :to="{ name: 'article', params: { id: article.id }}"
      >
        Lire l'article
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
.article {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.35s var(--ease),
    box-shadow 0.35s;
}

.article:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.banner {
  height: 8px;
}

.body {
  padding: 26px 26px 28px;
}

.meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.date-pill {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  border-radius: var(--radius-pill);
  padding: 5px 12px;
}

h1 {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  margin: 0 0 12px;
  overflow-wrap: break-word;
}

.description {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 20px;
}

.article-link {
  display: inline-flex;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
  cursor: pointer;
}

.card-terracotta {
  background: var(--pastel-terracotta);
}
.card-sage {
  background: var(--pastel-sage);
}
.card-blue {
  background: var(--pastel-blue);
}
.card-sand {
  background: var(--pastel-sand);
}
</style>
