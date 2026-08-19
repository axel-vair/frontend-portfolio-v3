<script setup lang="ts">
import type { Project } from '@/types/project'


defineProps<{
  project: Project
  pastel: string
}>()
</script>

<template>
  <article class="project" :class="pastel">
    <div class="project-img">
      <img v-if="project.image" :src="project.image" :alt="project.nom" />
      <div v-else class="project-img-empty">{{ project.nom }}</div>
    </div>
    <div class="project-body">
      <h3 class="project-title">{{ project.nom }}</h3>
      <p class="project-description">{{ project.description }}</p>
      <div class="container-tags">
        <span v-for="tag in project.tags" :key="tag.nom" class="project-tag">
          {{ tag.nom }}
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
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
</style>
