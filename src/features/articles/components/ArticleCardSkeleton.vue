<template>
  <div class="skeleton-card">
    <span class="sk sk-banner"></span>
    <div class="skeleton-body">
      <span class="sk sk-pill"></span>
      <span class="sk sk-title"></span>
      <span class="sk sk-text"></span>
      <span class="sk sk-text-short"></span>
      <span class="sk sk-link"></span>
    </div>
  </div>
</template>

<style scoped>
.skeleton-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.sk-banner {
  display: block;
  height: 8px;
  background: var(--divider);
}

.skeleton-body {
  padding: 26px 26px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sk {
  border-radius: var(--radius-pill);
  animation: pulse 1.4s ease-in-out infinite;
}

.sk-pill {
  width: 80px;
  height: 25px;
  background: var(--divider);
  margin-bottom: 6px;
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
.sk-link {
  width: 90px;
  height: 14px;
  background: var(--divider);
  margin-top: 6px;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sk {
    animation: none;
  }
}
</style>
