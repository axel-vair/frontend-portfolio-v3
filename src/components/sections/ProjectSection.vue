<script setup lang="ts">
import { getProjects } from '@/services/project.ts'
import ProjectCardSkeleton from '@/features/projects/components/ProjectCardSkeleton.vue'
import ProjectCard from '@/features/projects/components/ProjectCard.vue'
import { usePagination } from '@/composables/usePagination.ts'

const { data: projects, loading, error, execute } = getProjects()
const { page, pageCount, visibles, offset, goTo, prev, next } = usePagination(projects, 4)

const pastels = ['card-terracotta', 'card-sand', 'card-sage', 'card-blue'] as const
</script>

<template>
  <section class="section">
    <div class="section-head">
      <h2>Projets</h2>
      <span class="meta">{{ projects?.length }} projets</span>
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
          :pastel="pastels[(offset + i) % pastels.length] ?? pastels[0]"
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

<style scoped>
.section {
  padding: 70px 0;
}

.project-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Erreur */
.state-error {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: 40px 36px;
}

.state-error-head {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.4px;
  margin-bottom: 10px;
}

.state-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.state-error-text {
  font-family: var(--font-body);
  font-size: 15.5px;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 420px;
  margin: 0 0 24px;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 34px;
}

.pagination button {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-strong);
  background: transparent;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.25s;
}

.pagination button.is-active {
  background: var(--text);
  color: var(--text-invert);
}

.pagination button:disabled {
  opacity: 0.35;
  cursor: default;
}

/* Boutons */
.btn {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15px;
  padding: 15px 26px;
  border-radius: var(--radius-pill);
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.25s;
}

.btn:hover {
  opacity: 0.75;
}

.btn-secondary {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border-strong);
}

@media (max-width: 980px) {
  .project-container {
    grid-template-columns: 1fr;
  }
}
</style>
