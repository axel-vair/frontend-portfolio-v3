<script setup lang="ts">
import { getProjects } from '@/services/project.ts'
import ProjectCardSkeleton from '@/features/projects/components/ProjectCardSkeleton.vue'
import ProjectCard from '@/features/projects/components/ProjectCard.vue'
import { usePagination } from '@/composables/usePagination.ts'
import PaginationUi from '@/components/ui/pagination-ui.vue'
import ErrorState from '@/components/ui/error-state.vue'

const { data: projects, loading, error, execute } = getProjects()
const { page, pageCount, visibles, offset, goTo, prev, next } = usePagination(projects, 4)

const pastels = ['card-terracotta', 'card-sand', 'card-sage', 'card-blue'] as const
</script>

<template>
  <section id="projets" class="section">
    <div class="section-head">
      <h2>Projets</h2>
      <span class="meta">{{ projects?.length }} projets</span>
    </div>

    <!-- Chargement -->
    <div v-if="loading" class="project-container">
      <ProjectCardSkeleton v-for="n in 4" :key="n" />
    </div>

    <!-- Erreur -->
    <ErrorState v-else-if="error" title="Impossible de charger les projets" @retry="execute" />

    <!-- Contenu -->
    <template v-else>
      <div class="project-container">
        <ProjectCard
          v-for="(project, i) in visibles"
          :key="project.id"
          v-reveal
          :project="project"
          :pastel="pastels[(offset + i) % pastels.length] ?? pastels[0]"
        />
      </div>

      <pagination-ui :page="page" :page-count="pageCount" @prev="prev" @go-to="goTo" @next="next" />
    </template>
  </section>
</template>

<style scoped>
.project-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

@media (max-width: 980px) {
  .project-container {
    grid-template-columns: 1fr;
  }
}
</style>
