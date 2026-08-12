<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
const { data: experiences, loading, error } = useFetch('http://localhost:8000/api/experiences')

const pastels = ['pill-sand', 'pill-sage', 'pill-blue']
</script>

<template>
  <section class="section">
    <div class="section-head">
      <h2>Parcours</h2>
      <span class="meta">Depuis 2022</span>
    </div>

    <div v-if="loading">Chargement…</div>
    <div v-else-if="error">Impossible de charger le parcours.</div>
    <div v-else class="section-body">
      <div v-for="(exp, i) in experiences" :key="exp.id" class="experience-body">
        <div>
          <div class="date">{{ exp.date }}</div>
          <span class="entreprise-pill" :class="pastels[i % pastels.length]">{{
            exp.entreprise
          }}</span>
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
.experience-body {
  align-items: start;
  display: grid;
  grid-template-columns: 210px 1fr;
  border-top: 1px solid var(--divider);
  padding: 30px 0;
  gap: 40px;
}

h3 {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-top: 0;
  margin-bottom: 10px;
}

.date {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.4px;
}

.entreprise-pill {
  color: var(--text);
  display: inline-block;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  padding: 5px 13px;
  border-radius: var(--radius-pill);
}

.pill-sage {
  background: var(--pastel-sage);
}
.pill-sand {
  background: var(--pastel-sand);
}
.pill-blue {
  background: var(--pastel-blue);
}

.description {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text-muted);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
}

@media (max-width: 980px) {
  .experience-body {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
