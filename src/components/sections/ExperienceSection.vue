<script setup lang="ts">
import { getExperiences } from '@/services/experience'
import ExperienceItem from '@/features/experience/components/ExperienceItem.vue'
import ExperienceSkeletonItem from '@/features/experience/components/ExperienceSkeletonItem.vue'
import ErrorState from '@/components/ui/error-state.vue'
import ArticleCard from '@/features/articles/components/ArticleCard.vue'

const { data: experiences, loading, error, execute } = getExperiences()
const pastels = ['pill-sand', 'pill-sage', 'pill-blue'] as const
</script>

<template>
  <section id="parcours" class="section">
    <div class="section-head">
      <h2>Parcours</h2>
      <span class="meta">Depuis 2022</span>
    </div>

    <!-- Chargement -->
    <div v-if="loading" class="section-body">
      <ExperienceSkeletonItem v-for="n in 3" :key="n" />
    </div>

    <!-- Erreur -->
    <ErrorState v-else-if="error" title="Impossible de charger les experiences" @retry="execute" />

    <!-- Contenu -->
    <div v-else class="section-body">
      <ExperienceItem
        v-for="(experience, i) in experiences"
        :key="experience.id"
        v-reveal
        :experience="experience"
        :pastel="pastels[i % pastels.length] ?? pastels[0]"
      />
    </div>
  </section>
</template>
