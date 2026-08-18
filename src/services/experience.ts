import { useFetch } from '@/composables/useFetch'
import type { Experience } from '@/types/experience.ts'

export const getExperiences = () => {
  return useFetch<Experience[]>('http://localhost:8000/api/experiences')
}
