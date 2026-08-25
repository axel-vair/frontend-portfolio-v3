import { useFetch } from '@/composables/useFetch'
import type { Article } from '@/types/article.ts'

export const getArticles = () => {
  return useFetch<Article[]>('http://localhost:8000/api/articles')
}

export const getArticle = (id: string) =>
  useFetch<Article>(`http://localhost:8000/api/articles/${id}`)
