<script setup lang="ts">
import type { Experience } from '@/types/experience.ts'

defineProps<{
  experience: Experience
  pastel: string
}>()
</script>

<template>
  <div class="experience-body">
    <div>
      <div class="date">{{ experience.date }}</div>
      <span class="entreprise-pill" :class="pastel">
        {{ experience.entreprise }}
      </span>
    </div>
    <div>
      <h3>{{ experience.titre }}</h3>
      <p class="description">{{ experience.description }}</p>
    </div>
  </div>
</template>

<style scoped>
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

.description {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0;
}
</style>
