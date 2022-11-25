function toStringGenerics<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString()
  }

  switch (typeof data) {
    case 'string':
      return data
    case 'number':
    case 'bigint':
    case 'boolean':
    case 'symbol':
    case 'function':
      return data.toString()
    case 'object':
      return JSON.stringify(data)
    default:
      return undefined
  }
}