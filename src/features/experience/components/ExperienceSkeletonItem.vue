<script setup lang="ts"></script>

<template>
  <div v-for="n in 3" :key="n" class="skeleton-row">
    <div class="skeleton-left">
      <span class="sk sk-date"></span>
      <span class="sk sk-badge"></span>
    </div>
    <div class="skeleton-right">
      <span class="sk sk-title"></span>
      <span class="sk sk-text"></span>
      <span class="sk sk-text-short"></span>
    </div>
  </div>
</template>

<style scoped>
.skeleton-row {
  display: grid;
  grid-template-columns: 210px 1fr;
  gap: 40px;
  align-items: start;
  padding: 30px 0;
  border-top: 1px solid var(--divider);
}

.skeleton-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-right {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sk {
  border-radius: var(--radius-pill);
  animation: pulse 1.4s ease-in-out infinite;
}

.sk-date {
  width: 140px;
  height: 24px;
  background: var(--divider);
}
.sk-badge {
  width: 90px;
  height: 25px;
  background: var(--divider);
}
.sk-title {
  width: 70%;
  height: 26px;
  background: var(--divider);
}
.sk-text {
  width: 100%;
  height: 14px;
  background: #1c1b1810;
}
.sk-text-short {
  width: 82%;
  height: 14px;
  background: #1c1b1810;
}
</style>
