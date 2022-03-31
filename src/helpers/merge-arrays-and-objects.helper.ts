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
  )
    return source

  let result = {} as T
  Object.entries(source).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      result[key] = [...value, ...(target[key] ?? [])]
    } else if (typeof value === 'object') {
      result[key] = { ...value, ...(target[key] ?? {}) }
    } else {
      result[key] = value
    }
  })

  return result
}
