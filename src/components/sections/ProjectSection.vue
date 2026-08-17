<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFetch } from '@/composables/useFetch'

type Tag = { nom: string }
type Projet = {
  id: number
  nom: string
  description: string
  lien: string
  image: string
  tags: Tag[]
}

const {
  data: projets,
  loading,
  error,
  execute,
} = useFetch<Projet>('http://localhost:8000/api/projets')

/* Pagination */
const pageSize = 4
const page = ref(0)
const pageCount = computed(() => Math.ceil(projets.value.length / pageSize))
const visibles = computed(() =>
  projets.value.slice(page.value * pageSize, (page.value + 1) * pageSize),
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

const pastels = ['card-terracotta', 'card-sand', 'card-sage', 'card-blue']
</script>

<template>
  <section class="section">
    <div class="section-head">
      <h2>Projets</h2>
      <span class="meta">{{ projets.length }} projets</span>
    </div>

    <!-- Chargement -->
    <div v-if="loading" class="project-container">
      <div v-for="n in 4" :key="n" class="skeleton-card">
        <div class="skeleton-img">
          <span class="sk sk-img"></span>
        </div>
        <div class="skeleton-body">
          <span class="sk sk-title"></span>
          <span class="sk sk-text"></span>
          <span class="sk sk-text-short"></span>
          <div class="skeleton-tags">
            <span class="sk sk-tag"></span>
            <span class="sk sk-tag"></span>
            <span class="sk sk-tag"></span>
          </div>
        </div>
      </div>
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
        <article
          v-for="(projet, i) in visibles"
          :key="projet.id"
          class="project"
          :class="pastels[(page * pageSize + i) % pastels.length]"
        >
          <div class="project-img">
            <img v-if="projet.image" :src="projet.image" :alt="projet.nom" />
            <div v-else class="project-img-empty">{{ projet.nom }}</div>
          </div>
          <div class="project-body">
            <h3 class="project-title">{{ projet.nom }}</h3>
            <p class="project-description">{{ projet.description }}</p>
            <div class="container-tags">
              <span v-for="tag in projet.tags" :key="tag.nom" class="project-tag">
                {{ tag.nom }}
              </span>
            </div>
          </div>
        </article>
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

/* Carte */
.project {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition:
    transform 0.35s var(--ease),
    box-shadow 0.35s;
}

.project:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.project-img {
  padding: 24px 24px 0;
}

.project-img img {
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
}

.project-img-empty {
  height: 250px;
  border-radius: 16px;
  background: #ffffff80;
  border: 1px dashed #1c1b1833;
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 18px;
  color: var(--text-faint);
  text-align: center;
  padding: 0 20px;
}

.project-body {
  padding: 22px 26px 28px;
}

.project-title {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.6px;
  margin: 0 0 10px;
}

.project-description {
  font-family: var(--font-body);
  font-size: 15.5px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0 0 18px;
}

.container-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tag {
  font-family: var(--font-body);
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.2px;
  padding: 7px 14px;
  border-radius: var(--radius-pill);
  background: #ffffffcc;
  box-shadow: 0 1px 2px #1c1b1810;
}

.card-terracotta {
  background: var(--pastel-terracotta);
}
.card-sand {
  background: var(--pastel-sand);
}
.card-sage {
  background: var(--pastel-sage);
}
.card-blue {
  background: var(--pastel-blue);
}

/* Chargement */
.skeleton-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.skeleton-img {
  padding: 24px 24px 0;
}

.skeleton-body {
  padding: 22px 26px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skeleton-tags {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.sk {
  border-radius: var(--radius-pill);
  animation: pulse 1.4s ease-in-out infinite;
}

.sk-img {
  display: block;
  width: 100%;
  height: 250px;
  border-radius: 16px;
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
.sk-tag {
  width: 74px;
  height: 29px;
  background: var(--divider);
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

@media (prefers-reduced-motion: reduce) {
  .sk {
    animation: none;
  }
}
</style>
