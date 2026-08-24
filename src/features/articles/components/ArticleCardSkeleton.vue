<script setup lang="ts">
import ProjectCard from '@/features/projects/components/ProjectCard.vue'
import ProjectCardSkeleton from '@/features/projects/components/ProjectCardSkeleton.vue'
import { computed, ref } from 'vue'
import { getArticles } from '@/services/article.ts'

const { data: articles, loading, error, execute } = getArticles()

const pageSize = 4
const page = ref(0)
const pageCount = computed(() => Math.ceil((articles.value?.length ?? 0) / pageSize))
const visibles = computed(
  () => articles.value?.slice(page.value * pageSize, (page.value + 1) * pageSize) ?? [],
)
const goTo = (n: number) => {
  page.value = n
}
const prev = () => {
  page.value = Math.max(0, page.value - 1)
}
const next = () => {
  page.value = Math.min(pageCount.value - 1, page.value + 1)
}
</script>

<template>
  <section class="section">
    <div class="section-head">
      <h2>Articles</h2>
      <span class="meta">{{ articles?.length }} articles</span>
    </div>

    <!-- Chargement -->
    <div v-if="loading" class="project-container">
      <ProjectCardSkeleton v-for="n in 4" :key="n" />
    </div>

    <!-- Erreur -->
    <div v-else-if="error" class="state-error">
      <div class="state-error-head">
        <span class="state-dot"></span>
        Impossible de charger les projets
      </div>
      <p class="state-error-text">
        Le serveur n'a pas répondu. Vérifiez votre connexion, ou réessayez dans un instant.
      </p>
      <button class="btn btn-secondary" @click="execute">Réessayer</button>
    </div>

    <!-- Contenu -->
    <template v-else>
      <div class="project-container">
        <ProjectCard
          v-for="(project, i) in visibles"
          :key="project.id"
          :project="project"
          :pastel="pastels[(page * pageSize + i) % pastels.length] ?? pastels[0]"
        />
      </div>

      <div v-if="pageCount > 1" class="pagination">
        <button @click="prev" :disabled="page === 0">←</button>
        <button
          v-for="n in pageCount"
          :key="n"
          :class="{ 'is-active': page === n - 1 }"
          @click="goTo(n - 1)"
        >
          {{ n }}
        </button>
        <button @click="next" :disabled="page === pageCount - 1">→</button>
      </div>
    </template>
  </section>
</template>

<style scoped></style>
