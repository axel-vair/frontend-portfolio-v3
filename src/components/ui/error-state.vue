<script setup lang="ts">
defineProps<{ title: string }>()
defineEmits<{ retry: [] }>()
</script>

<template>
  <div class="state-error">
    <div class="state-error-head"><span class="state-dot"></span>{{ title }}</div>
    <p class="state-error-text">
      Le serveur n'a pas répondu. Vérifiez votre connexion, ou réessayez dans un instant.
    </p>
    <button class="btn btn-secondary" @click="$emit('retry')">Réessayer</button>
  </div>
</template>

<style scoped>
.state-error {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  padding: 40px 36px;
}

.state-error-head {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.4px;
  margin-bottom: 10px;
}

.state-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.state-error-text {
  font-family: var(--font-body);
  font-size: 15.5px;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 420px;
  margin: 0 0 24px;
}
</style>
