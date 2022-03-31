import { AGGREGATE_API_ENDPOINTS } from 'config/api-endpoints.config'
import { aggregateNumbers, fetchAllSettled, reduceList } from 'helpers'
import { getHashText, getNumberText, getPercentText } from 'helpers/text'

const hydrateJumbotronData = (data, settings) => {
  const [node] = data.nodes
  const { roundShares } = data.stats

  return {
    poolFee: settings.PoolFee,
    infoBoxItems: [
      { title: 'Pools hashrate', value: getHashText(data.hashrate) },
      {
        title: 'Network hashrate',
        value: getHashText((node.difficulty / node.blocktime).toFixed(2)),
      },
      { title: 'Network difficulty', value: getHashText(node.difficulty) },
      { title: 'Active miners', value: getNumberText(data.minersTotal) },
      {
        title: 'Round variance',
        value: getPercentText((roundShares / node.difficulty).toFixed(2)),
      },
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
  const statsRequests = fetchAllSettled(
    AGGREGATE_API_ENDPOINTS.map((endpoint) => endpoint + 'stats'),
  )

  const results = await Promise.allSettled([
    statsRequests,
    fetch(process.env.API_ENDPOINT + 'settings.json').then((settings) =>
      settings?.json(),
    ),
  ])

  const [allStats, settings] = results.map(
    (result) => 'value' in result && result.value,
  )

  const aggregator = aggregateNumbers(['hashrate', 'minersTotal'])
  const stats = reduceList(allStats, aggregator)

  return hydrateJumbotronData(stats, settings)
}
