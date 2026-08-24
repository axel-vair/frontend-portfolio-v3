import { useFetch } from '@/composables/useFetch'
import type { Article } from '@/types/article.ts'

export const getArticles = () => {
  return useFetch<Article[]>('http://localhost:8000/api/articles')
}
