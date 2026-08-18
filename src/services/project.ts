import { useFetch } from '@/composables/useFetch'
import type { Project } from '@/types/project.ts'

export const getProjects = () => {
  return useFetch<Project[]>('http://localhost:8000/api/projets')
}
