import { isNumberString } from './is-number-string.helper'

const AGGREGATE_MAPPER: Record<string, (x: any, y: any, whitelist?: string[], blacklist?: string[]) => any> = {
  'number:true|object:false|array:false': (x: number, y: number) => +x + +y,
  'number:false|object:true|array:false': (x: {}, y: {}, whitelist, blacklist) => aggregateNumbers(whitelist, blacklist)(x, y),
  'number:false|object:true|array:true': (x: [], y: [], whitelist, blacklist) => x.map((item, index) => aggregateNumbers(whitelist, blacklist)(item, y[index])),
  'number:false|object:false|array:false': (x: any, _) => x,
}

/**
 * It creates a function based on "whitelist" and "blacklist" which takes two objects and returns a new object that is the result of adding the values of the same
 * keys in both objects
 * @param {string[]} whitelist - an array of strings that are the keys of the object you want to
 * aggregate.
 * - pass a string array to utilize the "whitelist"
 * - pass an empty array to accept all keys
 * - pass null to utilize the "blacklist"
 * @param {string[]} blacklist - an array of strings that are the keys of the object you do not want to
 * aggregate.
 * - must pass null for "whitelist" to utilize the "blacklist"
 * @returns The result of the aggregation.
 */
export const aggregateNumbers = (whitelist?: string[], blacklist?: string[]) => <T>(source: T, target: T): T => {
  if (
    source === undefined ||
    source === null ||
    target === undefined ||
    target === null
  ) return source

  let result = {} as T
  Object.entries(source).forEach(([ key, value ]) => {
    result[ key ] = value

    if (!whitelist?.length || whitelist?.includes(key) || (!!blacklist?.length && !blacklist?.includes(key))) {
      const isNumber = typeof value === 'number' || isNumberString(value)
      const isObject = typeof value === 'object'
      const isArray = Array.isArray(value)
      const type = `number:${ isNumber }|object:${ isObject }|array:${ isArray }`

      result[ key ] = AGGREGATE_MAPPER[ type ](value, target[ key ], whitelist, blacklist)
    }
  })

  return result
}
