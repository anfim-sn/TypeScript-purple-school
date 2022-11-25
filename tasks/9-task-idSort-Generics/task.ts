interface IData {
  id: number
}
const data = [
  { id: 1, name: 'Anfim' },
  { id: 2, name: 'Alexey' },
  { id: 3, name: 'Dmitriy' }
]

function sortById<T extends IData,>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
  return data.sort((a, b) => {
    switch (type) {
      case 'asc':
        return a.id - b.id
      case 'desc':
        return b.id - a.id
    }
  })
}