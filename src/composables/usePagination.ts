import { computed, ref, type Ref } from 'vue'

/**
 *
 * @param items
 * @param pageSize
 */
export function usePagination<T>(items: Ref<T[] | null | undefined>, pageSize: number) {
  const page = ref(0)

  const pageCount = computed(() => Math.ceil((items.value?.length ?? 0) / pageSize))
  const visibles = computed(
    () => items.value?.slice(page.value * pageSize, (page.value + 1) * pageSize) ?? [],
  )
  const offset = computed(() => page.value * pageSize)

  const goTo = (n: number) => {
    page.value = n
  }
  const prev = () => {
    page.value = Math.max(0, page.value - 1)
  }
  const next = () => {
    page.value = Math.min(pageCount.value - 1, page.value + 1)
  }

  return { page, pageCount, visibles, offset, goTo, prev, next }
}
