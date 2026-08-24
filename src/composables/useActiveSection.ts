import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveSection(ids: readonly string[], offset = 140) {
  const active = ref<string>(ids[0] ?? '')

  const onScroll = () => {
    let current = ids[0] ?? ''
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= offset) current = id
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

  return { active }
}
