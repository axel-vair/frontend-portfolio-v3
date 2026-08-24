<script setup lang="ts">
import { useActiveSection } from '@/composables/useActiveSection'

type NavItem = {
  id: string
  label: string
  pill: string
}

const items: NavItem[] = [
  { id: 'projets', label: 'Projets', pill: 'var(--pastel-terracotta)' },
  { id: 'stack', label: 'Stack', pill: 'var(--pastel-sage)' },
  { id: 'parcours', label: 'Parcours', pill: 'var(--pastel-blue)' },
  { id: 'articles', label: 'Articles', pill: 'var(--pastel-sand)' },
]

const { active } = useActiveSection(items.map((i) => i.id))
</script>

<template>
  <header class="header">
    <div class="brand">
      <span class="logo-mark">
        <span class="logo-triangle"></span>
      </span>
      <span class="logo-name">Axel Vair</span>
    </div>

    <nav class="nav">
      <a
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ 'is-active': active === item.id }"
        :style="{ '--pill': item.pill }"
      >
        {{ item.label }}
      </a>
    </nav>

    <a href="#contact" class="contact">Contact</a>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
  position: sticky;
  top: 0;
  z-index: 50;
  background: #f7f5f0f2;
  backdrop-filter: blur(8px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 13px;
}

.logo-mark {
  width: 36px;
  height: 36px;
  background: var(--text);
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-triangle {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 13px solid var(--bg);
  margin-top: 1px;
}

.logo-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 4px;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 6px;
  border-radius: var(--radius-pill);
}

.nav a {
  --pill: transparent;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  padding: 9px 17px;
  border-radius: var(--radius-pill);
  color: var(--text);
  background: transparent;
  text-decoration: none;
  transition:
    background 0.25s,
    box-shadow 0.25s;
}

.nav a.is-active {
  background: var(--pill);
  box-shadow: inset 0 0 0 1px var(--divider);
}

.contact {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  padding: 12px 20px;
  border-radius: var(--radius-pill);
  background: var(--text);
  color: var(--text-invert);
  transition: transform 0.3s var(--ease);
}

.contact:hover {
  transform: translateY(-2px);
  opacity: 1;
}

@media (max-width: 980px) {
  .header {
    padding: 16px 0;
    backdrop-filter: none;
    background: var(--bg);
  }

  .nav {
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 32px);
    max-width: 420px;
    justify-content: space-between;
    gap: 2px;
    padding: 5px;
    box-shadow: 0 10px 30px -12px #1c1b1840;
  }

  .nav a {
    flex: 1;
    text-align: center;
    padding: 10px 8px;
    font-size: 13px;
    white-space: nowrap;
  }

  .contact {
    font-size: 13px;
  }
}
</style>
