<script setup lang="ts">
import { getExperiences } from '@/services/experience'
import ExperienceItem from '@/features/experience/components/ExperienceItem.vue'
import ExperienceSkeletonItem from '@/features/experience/components/ExperienceSkeletonItem.vue'

const { data: experiences, loading, error, execute } = getExperiences()
const pastels = ['pill-sand', 'pill-sage', 'pill-blue'] as const
</script>

<template>
  <section class="section">
    <div class="section-head">
      <h2>Parcours</h2>
      <span class="meta">Depuis 2022</span>
    </div>

    <!-- Chargement -->
    <div v-if="loading">
      <ExperienceSkeletonItem v-for="n in 3" :key="n"/>
    </div>

    <!-- Erreur -->
    <div v-else-if="error" class="state-error">
      <div class="state-error-head">
        <span class="state-dot"></span>
        Impossible de charger le parcours
      </div>
      <p class="state-error-text">
        Le serveur n'a pas répondu. Vérifiez votre connexion, ou réessayez dans un instant.
      </p>
      <button class="btn btn-secondary" @click="execute">Réessayer</button>
    </div>

    <!-- Contenu -->
    <div v-else class="section-body">
      <ExperienceItem
        v-for="(experience, i) in experiences"
        :key="experience.id"
        :experience="experience"
        :pastel="pastels[i % pastels.length] ?? pastels[0]"
      />
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 70px 0;
}

h3 {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0 0 10px;
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
  .experience-body,
  .skeleton-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sk {
    animation: none;
  }
}
</style>
