const hydrateJumbotronData = (data) => {
  const [node] = data.nodes
  const { roundShares } = data.stats

  return [
    { title: 'Pool hashrate', value: data.hashrate, type: 'hashSpeed' },
    { title: 'Network hashrate', value: (node.difficulty / node.blocktime).toFixed(2), type: 'hashSpeed' },
    { title: 'Network difficulty', value: node.difficulty, type: 'hash' },
    { title: 'Active miners', value: data.minersTotal, type: 'number' },
    {
      title: 'Round variance',
      value: (roundShares / node.difficulty).toFixed(2),
      type: 'percent',
    },
  ]
}

/**
 * It fetches the data from the API, and then hydrates the data into the correct format for the Jumbotron component
 * @returns it resolves an array of objects for each of following properties:
 *   - Pool hashrate
 *   - Network hashrate
 *   - Network difficulty
 *   - Active miners
 *   - Round variance
 */
export const getHomeJumbotronData = async () => {
  const result = await fetch(process.env.API_ENDPOINT + 'stats.json')
  const data = await result.json()

  return hydrateJumbotronData(data)
}
