<script setup lang="ts"></script>
<template>
  <article class="article">
    <div class="banner"></div>
    <div class="body">
      <div class="meta">
        <span class="date-pill">Pill</span>
      </div>
      <h3>Titre</h3>
      <p class="description">Description</p>
      <a class="article-link">Lire l'article</a>
    </div>
  </article>
</template>

<style scoped>
.article {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition:
    transform 0.35s var(--ease),
    box-shadow 0.35s;
  overflow: hidden;
  cursor: pointer;
}

.article:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.banner {
  height: 8px;
  background: var(--pastel-terracotta);
}

.body {
  padding: 26px 26px 28px;
}

.meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.date-pill {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  border-radius: var(--radius-pill);
  padding: 5px 12px;
  background-color: var(--pastel-terracotta);
}

.read-time {
  font-family: var(--font-body);
  font-size: 12.5px;
  color: var(--text-faint);
}

h3 {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 12px;
}

.description {
  font-family: var(--font-body);
  color: var(--text-muted);
  margin: 0 0 20px;
}

.article-link {
  display: inline-flex;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
  cursor: pointer;
}
</style>
