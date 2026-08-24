import type { Tag } from '@/types/tag.ts'

export type Project = {
  id: number
  nom: string
  description: string
  lien: string
  image?: {
    '@id': string
    contentUrl: string
  } | null
  tags: Tag[]
}
