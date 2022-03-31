import { isNumberString } from './is-number-string.helper'

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
  if (source === undefined || source === null || target === undefined || target === null) return source

  let result = {} as T

  Object.entries(source).forEach(([ key, value ]) => {
    if (!whitelist?.length || whitelist?.includes(key) || (!!blacklist?.length && !blacklist?.includes(key))) {
      if (typeof value === 'number' || isNumberString(value)) {
        result[ key ] = +(value as string | number) + +target[ key ]
      } else if (Array.isArray(value)) {
        result[ key ] = value.map((item, index) => aggregateNumbers(whitelist, blacklist)(item, target[ key ][ index ]))
      } else if (typeof value === 'object') {
        result[ key ] = aggregateNumbers(whitelist, blacklist)(value, target[ key ])
      } else {
        result[ key ] = value
      }
    } else {
      result[ key ] = value
    }
  })

  return result
}