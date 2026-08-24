<script setup lang="ts">
import ArticleCard from '@/features/articles/components/ArticleCard.vue'
</script>
<template>
  <section id="stack" class="section">
    <div class="section-head">
      <h2>Stack technique</h2>
      <span class="meta">Au quotidien</span>
    </div>
    <div class="skills" v-reveal>
      <span class="pill-skills">Symfony</span>
      <span class="pill-skills">PHP</span>
      <span class="pill-skills">VueJs</span>
      <span class="pill-skills">Nuxt</span>
      <span class="pill-skills">JavaScript</span>
      <span class="pill-skills">Spring Boot</span>
      <span class="pill-skills">Java</span>
      <span class="pill-skills">Git</span>
      <span class="pill-skills">Docker</span>
      <span class="pill-skills">Postgres</span>
      <span class="pill-skills">MongoDB</span>
      <span class="pill-skills">Wordpress</span>
      <span class="pill-skills">Ansible</span>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 44px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--pastel-sage);
}

.pill-skills {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(20px, 2.4vw, 30px);
  letter-spacing: -0.6px;
  padding: 9px 22px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  transition: transform 0.3s var(--ease);
}

.pill-skills:hover {
  transform: translateY(-3px);
}
@media (max-width: 640px) {
  .skills {
    padding: 24px;
    gap: 8px;
  }
  .pill-skills {
    padding: 7px 16px;
  }
}
</style>
