/**
 * It takes an array of URLs, and returns an array of data from the API
 * @param {string[]} urls - an array of URLs to fetch
 * @returns An array of objects, each object containing the data from the API which fulfilled.
 */
export const fetchAllSettled = async (urls: string[]) => {
  const requests = await Promise.allSettled(urls.map((url) => fetch(url)))

  const results = requests
    .filter((request) => request.status === 'fulfilled' && request.value.ok)
    .map((response) => 'value' in response && response.value?.json())

  return Promise.all(results)
}
