<script setup lang="ts"></script>

<template>
  <div class="skeleton-card">
    <div class="skeleton-img">
      <span class="sk sk-img"></span>
    </div>
    <div class="skeleton-body">
      <span class="sk sk-title"></span>
      <span class="sk sk-text"></span>
      <span class="sk sk-text-short"></span>
      <div class="skeleton-tags">
        <span class="sk sk-tag"></span>
        <span class="sk sk-tag"></span>
        <span class="sk sk-tag"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.skeleton-img {
  padding: 24px 24px 0;
}

.skeleton-body {
  padding: 22px 26px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skeleton-tags {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.sk {
  border-radius: var(--radius-pill);
  animation: pulse 1.4s ease-in-out infinite;
}

.sk-img {
  display: block;
  width: 100%;
  height: 250px;
  border-radius: 16px;
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
.sk-tag {
  width: 74px;
  height: 29px;
  background: var(--divider);
}

@media (prefers-reduced-motion: reduce) {
  .sk {
    animation: none;
  }
}
</style>
