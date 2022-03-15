import { getHashText, getNumberText, getPercentText } from 'helpers/text'


const hydrateJumbotronData = (data, settings) => {
  const [ node ] = data.nodes
  const { roundShares } = data.stats

  return {
    poolFee: settings.PoolFee,
    infoBoxItems: [
      { title: 'Pools hashrate', value: getHashText(data.hashrate) },
      { title: 'Network hashrate', value: getHashText((node.difficulty / node.blocktime).toFixed(2)) },
      { title: 'Network difficulty', value: getHashText(node.difficulty) },
      { title: 'Active miners', value: getNumberText(data.minersTotal) },
      { title: 'Round variance', value: getPercentText((roundShares / node.difficulty).toFixed(2)) },
    ],
  }
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
  const [stats, settings] = await Promise.all([
    fetch(process.env.API_ENDPOINT + 'stats.json').then(stats => stats.json()),
    fetch(process.env.API_ENDPOINT + 'settings.json').then(settings => settings.json()),
  ])

  return hydrateJumbotronData(stats, settings)
}
