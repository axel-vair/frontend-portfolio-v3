<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'

type Experience = {
  id: number
  date: string
  entreprise: string
  titre: string
  description: string
}

const {
  data: experiences,
  loading,
  error,
  execute,
} = useFetch<Experience>('http://localhost:8000/api/experiences')

const pastels = ['pill-sand', 'pill-sage', 'pill-blue']
</script>

<template>
  <section class="section">
    <div class="section-head">
      <h2>Parcours</h2>
      <span class="meta">Depuis 2022</span>
    </div>

    <!-- Chargement -->
    <div v-if="loading">
      <div v-for="n in 3" :key="n" class="skeleton-row">
        <div class="skeleton-left">
          <span class="sk sk-date"></span>
          <span class="sk sk-badge"></span>
        </div>
        <div class="skeleton-right">
          <span class="sk sk-title"></span>
          <span class="sk sk-text"></span>
          <span class="sk sk-text-short"></span>
        </div>
      </div>
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
      <div v-for="(exp, i) in experiences" :key="exp.id" class="experience-body">
        <div>
          <div class="date">{{ exp.date }}</div>
          <span class="entreprise-pill" :class="pastels[i % pastels.length]">
            {{ exp.entreprise }}
          </span>
        </div>
        <div>
          <h3>{{ exp.titre }}</h3>
          <p class="description">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 70px 0;
}

/* Étape */
.experience-body {
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 40px;
  align-items: start;
  padding: 30px 0;
  border-top: 1px solid var(--divider);
}

.date {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.4px;
  margin-bottom: 8px;
}

.entreprise-pill {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  padding: 5px 13px;
  border-radius: var(--radius-pill);
  color: var(--text);
}

.pill-sand {
  background: var(--pastel-sand);
}
.pill-sage {
  background: var(--pastel-sage);
}
.pill-blue {
  background: var(--pastel-blue);
}

h3 {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0 0 10px;
}

.description {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0;
}

/* Chargement */
.skeleton-row {
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 40px;
  align-items: start;
  padding: 30px 0;
  border-top: 1px solid var(--divider);
}

.skeleton-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-right {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sk {
  border-radius: var(--radius-pill);
  animation: pulse 1.4s ease-in-out infinite;
}

.sk-date {
  width: 140px;
  height: 24px;
  background: var(--divider);
}
.sk-badge {
  width: 90px;
  height: 25px;
  background: var(--divider);
}
.sk-title {
  width: 70%;
  height: 26px;
  background: var(--divider);
}
.sk-text {
  width: 100%;
  height: 14px;
  background: #1c1b1810;
}
.sk-text-short {
  width: 82%;
  height: 14px;
  background: #1c1b1810;
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
