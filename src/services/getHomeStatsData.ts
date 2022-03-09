import { getAgoText, getHashText, getNumberText, getXCBText } from 'helpers/text';
import { toStringDateTime } from 'helpers/toStringDateTime';
import { toXCBPrice } from 'helpers/toXCBPrice';

import type { InfoBoxItem } from 'helpers/text';
import type { ChartItem } from 'types/app'

const hydrateInfoBoxData = (data): InfoBoxItem[] => {
  const [node] = data.nodes

  return [
    { title: 'Network difficulty', value: getHashText(node.difficulty) },
    { title: 'Blockchain Height', value: getNumberText(node.height) },
    { title: 'Round Shares', value: getNumberText(data.stats.roundShares) },
    { title: 'Last block found', value: getAgoText(toStringDateTime(data.stats.lastBlockFound)) },
    { title: 'Block reward', value: getXCBText(toXCBPrice(data.blockReward)) },
  ]
}

const hydrateChartData = (poolCharts: any[]): ChartItem[] => {
  //
  // map chart items to proper shape for the chart
  const chartItemMapper = (item) => ({
    value: item.y,
    time: toStringDateTime(item.x),
    hour: toStringDateTime(item.x).split(' ')[1].slice(0, 2),
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
export const getHomeStatsData = async () => {
  const result = await fetch(process.env.API_ENDPOINT + 'stats-chart.json')
  const data = await result.json()

  return {
    infoBoxData: hydrateInfoBoxData(data),
    chartData: hydrateChartData(data.poolCharts),
  }
}
