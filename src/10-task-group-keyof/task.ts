interface IData {
  group: number
  name: string
}

const data: IData[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'b' }
]

interface IGroup<T> {
  [key: string]: T[]
}

type key = string | number | symbol

function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
  return array.reduce<IGroup<T>>((accum: IGroup<T>, item) => {
    const itemKey = item[key]
    let currentElement = accum[itemKey]
    if (Array.isArray(currentElement)) {
      currentElement.push(item)
    } else {
      currentElement = [item]
    }
    accum[itemKey] = currentElement
    return accum
  }, {})
}

const result = group<IData>(data, 'group')