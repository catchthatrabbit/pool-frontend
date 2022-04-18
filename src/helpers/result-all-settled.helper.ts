/**
 * It takes an array of promises, waits for them all to resolve, and returns an array of the resolved
 * values
 * @param {Promise<any>[]} fetches - Promise<any>[]
 * @returns An array of all the values of the promises that were fulfilled.
 */
 export const resultAllSettled = async (fetches: Promise<any>[]) => {
  const requests = await Promise.allSettled(fetches)

  const results = requests
    .filter((request) => request.status === 'fulfilled')
    .map((response) => 'value' in response && response.value)

  return Promise.all(results)
}
