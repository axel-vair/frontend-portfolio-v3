const pastels = ['card-terracotta', 'card-sage', 'card-blue', 'card-sand'] as const

export function getPastel(id: string | number) {
  const index = Number(id) % pastels.length
  return pastels[index] ?? pastels[0]
}
