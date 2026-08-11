<script setup lang="ts"></script>
<template>
  <section class="section">
    <div class="section-head">
      <h2>Parcours</h2>
      <span class="meta">Depuis 2022</span>
    </div>

    <div class="section-body">
      <div class="experience-body">
        <div>
          <div class="date">2025 - 2027</div>
          <span class="entreprise-pill pill-sand">DGA</span>
        </div>
        <div>
          <h3>Développeur web full-stack en apprentissage</h3>
          <p class="description">
            Continuation mon apprentissage en alternance au sein de la DGA avec à la clé la
            validation d'un titre RNCP d'Expert en développement full-stack (Niv.7)
          </p>
        </div>
      </div>
      <div class="experience-body">
        <div>
          <div class="date">2023 - 2025</div>
          <span class="entreprise-pill pill-sage">DGA</span>
        </div>
        <div>
          <h3>Développeur web full-stack en apprentissage</h3>
          <p class="description">
            Développement full-stack à travers des projets concrets, en équipe et en solo en
            alternance au sein de la DGA, suivi d'une validation d'un titre RNCP de Développeur
            Concepteur d'Applications (Niv.6)
          </p>
        </div>
      </div>
      <div class="experience-body">
        <div>
          <div class="date">2022 - 2023</div>
          <span class="entreprise-pill pill-blue">Bootcamp / École</span>
        </div>
        <div>
          <h3>Formation développeur web & web mobile</h3>
          <p class="description">
            Début de l'apprentissage du développement informatique par autoformation sur
            FreeCodeCamp et Codecademy, suivi d'un BootCamp sur Marseille.
          </p>
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
