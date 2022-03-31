/**
 * It validates a given string is a number or not
 * @param {string} value - string
 * @returns A boolean value.
 */
export const isNumberString = (value: string): boolean => {
  if (typeof value !== 'string') return false

  let result = true
  let isMayBeFloat = false

  for (const ch of value) {
    if (ch === '.' && !isMayBeFloat) {
      isMayBeFloat = true
      continue
    }

    if (isNaN(+ch)) {
      result = false
      break
    }
  }

  return result
}
