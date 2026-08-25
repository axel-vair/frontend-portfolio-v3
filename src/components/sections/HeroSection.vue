<script setup lang="ts"></script>
<template>
  <!-- Hero Section -->
  <section class="column">
    <!--    Hero Info -->
    <div>
      <div class="pill">
        <span class="pill-dot"></span>
        Disponible
      </div>
      <h1 class="title-hero">
        Développeur <span class="accent">full-stack</span> junior - j'écris du code
        <span class="accent-green">propre</span> et durable.
      </h1>
      <p class="description-hero">
        Symfony et Spring Boot côté serveur, VueJS, Nuxt côté front. Je conçois des applications
        testées, lisibles et pensées pour évoluer.
      </p>
      <div class="hero-actions">
        <RouterLink  :to="{ name: 'home', hash: '#projets' }" class="btn btn-primary">Voir mes projets</RouterLink>
        <a class="btn btn-secondary">Mon CV</a>
      </div>
    </div>
    <!-- Hero Terminal -->
    <div class="terminal">
      <div class="terminal-title">
        <div class="dots">
          <span class="dot dot-1"></span>
          <span class="dot dot-2"></span>
          <span class="dot dot-3"></span>
        </div>
        <span class="filename">axel.js</span>
      </div>
      <pre class="code-body"><span class="kw">const</span> <span class="var">axel</span> = {
  <span class="key">role</span>: <span class="str">'Développeur Full-Stack'</span>,
  <span class="key">niveau</span>: <span class="str">'Junior, en alternance'</span>,
  <span class="key">stack</span>: [<span class="val">'Symfony'</span>, <span class="val">'Spring Boot'</span>,
    <span class="val">'Vue.js'</span>, <span class="val">'Nuxt'</span>],
  <span class="key">objectif</span>: <span class="str">'du code propre, testé, qui dure'</span>,
};</pre>
    </div>
  </section>
</template>

<style scoped>
/* Title and colors */
.title-hero {
  margin: 0 0 26px;
  font-family: var(--font-display);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -2px;
  font-size: clamp(38px, 5vw, 66px);
}
.accent {
  color: var(--accent);
}

.accent-green {
  color: var(--accent-green);
}

.description-hero {
  margin: 0 0 32px;
  max-width: 520px;
  color: var(--text-soft);
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 19px;
  line-height: 1.65;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 8px 16px;
  margin-bottom: 28px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 13.5px;
  color: var(--text-soft);
}

.pill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--dot-green);
  animation: breathe 2.4s ease-in-out infinite;
}

/* Terminal card */

.column {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: center;
  padding: 60px 0 80px;
}

.terminal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-panel);
}

.terminal-title {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  background: var(--surface-alt);
  border-bottom: 1px solid #1c1b1810;
}

.filename {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-faint);
}

.dots {
  display: flex;
  gap: 7px;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.dot-1 {
  background: #e9b9a6;
}

.dot-2 {
  background: #efd9a8;
}

.dot-3 {
  background: #b9cfb2;
}

.code-body {
  margin: 0;
  padding: 26px 24px;
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-soft);
  line-height: 1.95;
  overflow-x: auto;
}
.kw {
  color: #8f7bb5;
}
.var {
  color: #4f7fa8;
}
.key {
  color: #4f7fa8;
}
.str {
  color: var(--accent);
}
.val {
  color: var(--accent-green);
}
/* Buttons */

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
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

.btn-primary {
  background: var(--text);
  color: var(--text-invert);
  border: none;
}
.btn-secondary {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border-strong);
}

@media (max-width: 980px) {
  .column {
    grid-template-columns: 1fr;
  }
}

@keyframes breathe {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pill-dot {
    animation: none;
  }
}

@media (max-width: 640px) {
  .column {
    gap: 32px;
    padding: 32px 0 48px;
  }
  .title-hero {
    letter-spacing: -1px;
  }
  .code-body {
    font-size: 12px;
    padding: 20px 18px;
  }
}
</style>
