/**
 * Given a list of items, and a function that takes two items and returns a single item, return the
 * single item that is the result of applying the function to each item in the list
 * @param {T[]} list - The list of items to aggregate.
 * @param by - A reducer function that takes two parameters and returns a single value.
 * @returns The result of the reduce function.
 */
export const reduceList = <T>(list: T[], by: (x: T, y: T) => T): T => {
  if (!Array.isArray(list)) throw new Error('list must be an array')

  const [first, ...rest] = list
  return rest.reduce(by, first)
}
