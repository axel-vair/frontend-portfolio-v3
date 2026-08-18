import type { Tag } from '@/types/tags.ts'

export type Project = {
  id: number
  nom: string
  description: string
  lien: string
  image: string
  tags: Tag[]
}
