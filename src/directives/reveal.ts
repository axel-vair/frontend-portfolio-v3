import type { Directive } from 'vue'

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement
        el.style.animationDelay = `${Math.min(i, 3) * 70}ms`
        el.setAttribute('data-reveal', 'in')
        observer.unobserve(el)
      }
    })
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
)

export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    el.setAttribute('data-reveal', 'out')
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
