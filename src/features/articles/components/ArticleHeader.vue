<script setup lang="ts">
import { computed } from 'vue'
import { getPastel } from '@/utils/pastels.ts'
import type { Article } from '@/types/article.ts'

const props = defineProps<{ article: Article }>()

const dateFormated = computed(() =>
  new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(props.article.datePublication)),
)

const pastel = computed(() => getPastel(props.article.id))
</script>

<template>
  <div :class="pastel">
    <RouterLink class="btn btn-secondary back-pill" :to="{ name: 'home', hash: '#articles' }">
      <span class="arrow">←</span> Tous les articles
    </RouterLink>

    <h1>{{ article.titre }}</h1>
    <p class="lede">{{ article.chapeau }}</p>
    <div class="date">
      <span class="date-pill">{{ dateFormated }}</span>
    </div>
    <div class="divider"></div>
  </div>
</template>

<style scoped>
/* Le pastel de l'article est exposé une fois, puis lu par la pilule et le survol */
.card-terracotta {
  --pill: var(--pastel-terracotta);
}
.card-sage {
  --pill: var(--pastel-sage);
}
.card-blue {
  --pill: var(--pastel-blue);
}
.card-sand {
  --pill: var(--pastel-sand);
}

.back-pill {
  gap: 9px;
  margin-bottom: 32px;
  background: transparent;
  transition: background 0.25s;
}

.back-pill:hover {
  background: var(--pill);
  opacity: 1;
}

.arrow {
  font-size: 15px;
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(34px, 5vw, 54px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -1.5px;
  text-wrap: pretty;
  overflow-wrap: anywhere;
  margin: 0 0 24px;
}

.lede {
  font-family: var(--font-body);
  font-size: 19px;
  font-weight: 400;
  line-height: 1.65;
  color: #4a4842;
  text-wrap: pretty;
  margin: 0 0 28px;
}

.date {
  margin-bottom: 32px;
}

.date-pill {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: var(--radius-pill);
  background: var(--pill);
}

.divider {
  border-top: 1px solid var(--divider);
  margin-bottom: 40px;
}
</style>
