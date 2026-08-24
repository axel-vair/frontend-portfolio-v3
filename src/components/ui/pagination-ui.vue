<template>
  <div v-if="pageCount > 1" class="pagination">
    <button @click="$emit('prev')" :disabled="page === 0">←</button>
    <button
      v-for="n in pageCount"
      :key="n"
      :class="{ 'is-active': page === n - 1 }"
      @click="$emit('goTo', n - 1)"
    >
      {{ n }}
    </button>
    <button @click="$emit('next')" :disabled="page === pageCount - 1">→</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ page: number; pageCount: number }>()
defineEmits<{ prev: []; next: []; goTo: [n: number] }>()
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 34px;
}

.pagination button {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-strong);
  background: transparent;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.25s;
}

.pagination button.is-active {
  background: var(--text);
  color: var(--text-invert);
}

.pagination button:disabled {
  opacity: 0.35;
  cursor: default;
}
</style>
