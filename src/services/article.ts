import { useFetch } from '@/composables/useFetch'
import type { Article } from '@/types/article.ts'
import { type MaybeRefOrGetter, toValue } from 'vue'

export const getArticles = () => {
  return useFetch<Article[]>('http://localhost:8000/api/articles')
}

export const getArticle = (id: MaybeRefOrGetter<string>) =>
  useFetch<Article>(()=> `http://localhost:8000/api/articles/${toValue(id)}`)
