import { homePageConfig, poolEndpointsConfig } from 'config';
import { unitsConstant } from 'constant';
import { aggregateNumbers, fetchAllSettled, reduceList, resultAllSettled } from 'helpers';
import { getAgoText, getHashText, getNumberText, getPercentText, getXCBText } from 'helpers/text';
import { toStringDateTime } from 'helpers/toStringDateTime';
import { blocksService } from 'services';

import type {  InfoBoxItemProps } from 'helpers/text'
import type { ChartItem } from 'types/app'

const BLOCK_TIME = 7 as const

const hydrateJumbotron = (data, settings) => {
  if (!data || !settings) {
    return {
      poolFee: '',
      infoBoxItems: [],
    }
  }

  const [node] = data.nodes
  const { roundShares } = data.stats

  return {
    poolFee: settings.PoolFee,
    infoBoxItems: [
      { title: 'Pools hashrate', value: getHashText(data.hashrate) },
      {
        title: 'Network hashrate',
        value: getHashText(node.difficulty / BLOCK_TIME),
      },
      { title: 'Network difficulty', value: getHashText(node.difficulty, '') },
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
export const getJumbotron = async () => {
  const statsRequests = fetchAllSettled(
    poolEndpointsConfig.AGGREGATION_APIS.map((endpoint) => endpoint + '/stats'),
  )

  const results = await Promise.allSettled([
    statsRequests,
    fetch(poolEndpointsConfig.EU_PRIMARY_API + '/settings').then((settings) =>
      settings?.json(),
    ),
  ])

  const [ allStats, settings ] = results.map(
    (result) => 'value' in result && result.value,
  )

  const aggregator = aggregateNumbers(homePageConfig.WHITELIST_AGGREGATION_KEYS.jumbotron)
  const stats = reduceList(allStats, aggregator)

  return hydrateJumbotron(stats, settings)
}


const hydrateInfoBoxData = (data):  InfoBoxItemProps[] => {
  if (!data?.nodes) return []

  const [node] = data.nodes

  return [
    { title: 'Network difficulty', value: getHashText(node.difficulty) },
    { title: 'Blockchain Height', value: getNumberText(node.height) },
    { title: 'Round Shares', value: getNumberText(data.stats.roundShares) },
    {
      title: 'Last block found',
      value: getAgoText(toStringDateTime(data.stats.lastBlockFound)),
    },
    { title: 'Block reward', value: getXCBText(data.blockReward / unitsConstant.CORE) },
  ]
}

const hydrateChartData = (poolCharts: any[]): ChartItem[] => {
  if (!poolCharts) return []
  //
  // map chart items to proper shape for the chart
  const chartItemMapper = (item) => ({
    value: item.y,
    time: toStringDateTime(item.x),
    hour: toStringDateTime(item.x, { hour: '2-digit', hour12: false }),
  })

  //
  // reduce the amount of data by calculating their averages per an hour
  // it preserves latest chart item date of an average group as "time" field to show on chart by hovering
  const chartItemAverageReducer = (
    averages: Map<string, ChartItem>,
    chartItem: ChartItem,
  ) => {
    if (!averages.has(chartItem.hour)) {
      averages.set(chartItem.hour, chartItem)
    } else {
      const chartItemAvg = averages.get(chartItem.hour) as ChartItem
      chartItemAvg.value += chartItem.value
      chartItemAvg.value /= 2
      averages.set(chartItemAvg.hour, chartItemAvg)
    }

    return averages
  }

  const averagePerHours = poolCharts
    .sort((first, second) => (first.x < second.x ? 1 : -1)) // sort chart items based on their timestamp which is filed "x"
    .map(chartItemMapper)
    .reduce(chartItemAverageReducer, new Map<string, ChartItem>())

  return [...averagePerHours.values()]
}

/**
 * It fetches the data from the API, and then hydrates the data into the correct format
 * @returns it resolves an object with two properties:
 * - infoBoxData
 * - chartData
 */
export const geStats = async () => {
  const allStats = await fetchAllSettled(
    poolEndpointsConfig.AGGREGATION_APIS.map((endpoint) => endpoint + '/stats/chart'),
  )

  const { allPoolChartsData, allLastBlockFound } = allStats.reduce<{ allPoolChartsData: any[], allLastBlockFound: any[] }>(
    (acc, item) => {
      const { poolCharts, stats } = item

      acc.allPoolChartsData = [...acc.allPoolChartsData, { poolCharts }]
      acc.allLastBlockFound = [...acc.allLastBlockFound, stats.lastBlockFound]

      return acc
    },
    { allPoolChartsData: [], allLastBlockFound: [] },
  )

  const aggregator = aggregateNumbers(homePageConfig.WHITELIST_AGGREGATION_KEYS.stats)
  const all = reduceList<any>(allPoolChartsData, aggregator)
  const lastBlockFound = Math.max(...allLastBlockFound)

  return {
    infoBoxes: hydrateInfoBoxData({ ...allStats[0], lastBlockFound }),
    chart: hydrateChartData(all?.poolCharts || []),
  }
}

export const getBlocks = async () => {
  const allBlocks = await resultAllSettled([
    blocksService.getMatured(poolEndpointsConfig.EU_PRIMARY_API, homePageConfig.BLOCKS_TABLE.page, homePageConfig.BLOCKS_TABLE.rowCount),
    blocksService.getMatured(poolEndpointsConfig.EU_BACKUP_API, homePageConfig.BLOCKS_TABLE.page, homePageConfig.BLOCKS_TABLE.rowCount),
    blocksService.getMatured(poolEndpointsConfig.AS_PRIMARY_API, homePageConfig.BLOCKS_TABLE.page, homePageConfig.BLOCKS_TABLE.rowCount),
    blocksService.getMatured(poolEndpointsConfig.AS_BACKUP_API, homePageConfig.BLOCKS_TABLE.page, homePageConfig.BLOCKS_TABLE.rowCount),
  ])

  const blocks = allBlocks
    .flatMap(block => block.items)
    .sort((a, b) => (a['mined on'] < b['mined on'] ? 1 : -1))

  return blocks
}
