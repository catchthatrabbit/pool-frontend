const MERGE_MAPPER: Record<string, (x: any, y: any) => any> = {
  'array:true|object:true': (x: any[], y: any[]) => [ ...(x ?? []), ...(y ?? []) ].sort((a, b) => a.timestamp > b.timestamp ? 1 : -1),
  'array:false|object:true': (x: {}, y: {}) => ({ ...(x ?? {}), ...(y ?? {}) }),
  'array:false|object:false': (x: any, _) => x,
}

/**
 * Merge two arrays/objects together, with the following rules:
 *
 * If the value is an array, then the value is the concatenation of the two arrays.
 * If the value is an object, then the value is the merge of the two objects.
 * If the value is anything else, then the value is the value of the source object
 * @returns The result of the merge.
 */
export const mergeArraysAndObjects = <T>(source: T, target: T): T => {
  if (
    source === undefined ||
    source === null ||
    target === undefined ||
    target === null
  ) return source

  let result = {} as T

  Object.entries(source).forEach(([key, value]) => {
    const isArray = Array.isArray(value)
    const isObject = typeof value === 'object'
    const type = `array:${isArray}|object:${isObject}`

    result[key] = MERGE_MAPPER[type](value, target[key])
  })

  return result
}
