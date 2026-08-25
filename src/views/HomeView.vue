<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectSection from '@/components/sections/ProjectSection.vue'
import ArticleSection from '@/components/sections/ArticleSection.vue'
</script>

<template>
  <div class="container">
    <AppHeader />
    <HeroSection />
    <ProjectSection />
    <SkillsSection />
    <ExperienceSection />
    <ArticleSection />
    <ContactSection />
  </div>
</template>
