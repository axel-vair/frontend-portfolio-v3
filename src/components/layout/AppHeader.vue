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
      <a href="#contact" class="contact">Contact</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type NavItem = {
  id: string
  label: string
  pill: string
}
const items: NavItem[] = [
  { id: 'projets', label: 'Projets', pill: '#f0d7cb' },
  { id: 'stack', label: 'Stack', pill: '#e6ebe0' },
  { id: 'parcours', label: 'Parcours', pill: '#e2e7f0' },
  { id: 'articles', label: 'Articles', pill: '#f2e6cd' },
]

const active = ref<string>('projets')

function onScroll() {
  let current: string = items[0]!.id
  for (const item of items) {
    const element = document.getElementById(item.id)
    if (element && element.getBoundingClientRect().top <= 140) current = item.id
  }
  active.value = current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

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
  background: #1c1b18;
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
  border-bottom: 13px solid #f7f5f0;
  margin-top: 1px;
}

.logo-name {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 700;
  font-size: 18px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #ffffff;
  border: 1px solid #1c1b1814;
  padding: 6px;
  border-radius: 100px;
}

.nav a {
  --pill: transparent;
  font-size: 14px;
  font-weight: 600;
  padding: 9px 17px;
  border-radius: 100px;
  color: #1c1b18;
  background: transparent;
  text-decoration: none;
  transition:
    background 0.25s,
    box-shadow 0.25s;
}

.nav a.is-active {
  background: var(--pill);
  box-shadow: inset 0 0 0 1px #1c1b1818;
}

.nav a.contact {
  font-weight: 700;
  padding: 9px 18px;
  background: #1c1b18;
  color: #f7f5f0;
}

@media (max-width: 980px) {
  .header {
    flex-wrap: wrap;
    gap: 14px;
  }
  .nav {
    overflow-x: auto;
    max-width: 100%;
    -webkit-overflow-scrolling: touch;
  }
  .nav a {
    white-space: nowrap;
  }
}
</style>
