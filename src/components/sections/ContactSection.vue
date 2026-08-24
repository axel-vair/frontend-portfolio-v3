<script setup lang="ts"></script>

<template>
  <section id="contact" class="section" v-reveal>
    <h2 class="title">Parlons de votre projet</h2>
    <p class="description">
      Ouvert à toute opportunité, premier poste de développeur, mission de freelance.
    </p>
    <div class="actions">
      <a href="mailto:contact@axelvair.fr" class="btn btn-primary">contact@axelvair.fr</a>
      <a
        href="https://linkedin.com/in/axel-vair"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary"
        >LinkedIn</a
      >
      <a
        href="https://github.com/axel-vair"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary"
        >GitHub</a
      >
    </div>
  </section>
</template>

<style scoped>
.section {
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 70px 48px;
  margin: 70px 0 48px;
  background: var(--pastel-terracotta);
}

.title {
  font-family: var(--font-display);
  font-size: clamp(34px, 5.5vw, 64px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -2px;
  margin: 0 0 20px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.description {
  max-width: 520px;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 18px;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 34px;
}

.btn:hover {
  opacity: 0.75;
}

.btn-primary {
  color: var(--text-invert);
  border-radius: var(--radius-pill);
  background-color: var(--text);
  padding: 16px 30px;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
}

.btn-secondary {
  border-radius: var(--radius-pill);
  border: 1px solid #1c1b1833;
  background-color: transparent;
  padding: 16px 26px;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
}

@media (max-width: 640px) {
  .section {
    padding: 40px 24px;
    margin: 48px 0 32px;
  }
  .title {
    letter-spacing: -1px;
  }
  .description {
    font-size: 16px;
  }
}
</style>
