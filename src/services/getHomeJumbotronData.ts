import { getHashText, getNumberText, getPercentText } from 'helpers/text'

import  type { InfoBoxItem } from 'helpers/text'

const hydrateJumbotronData = (data): InfoBoxItem[] => {
  const [ node ] = data.nodes
  const { roundShares } = data.stats

  return [
    { title: 'Pools hashrate', value: getHashText(data.hashrate) },
    { title: 'Network hashrate', value: getHashText((node.difficulty / node.blocktime).toFixed(2)) },
    { title: 'Network difficulty', value: getHashText(node.difficulty) },
    { title: 'Active miners', value: getNumberText(data.minersTotal) },
    { title: 'Round variance', value: getPercentText((roundShares / node.difficulty).toFixed(2)) },
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
