import { AGGREGATE_API_ENDPOINTS } from 'config/api-endpoints.config'
import {
  aggregateNumbers,
  fetchAllSettled,
  mergeArraysAndObjects,
  reduceList,
} from 'helpers'
import { getHashText, getNumberText } from 'helpers/text'
import { toStringDateTime } from 'helpers/toStringDateTime'

import type { Column } from '@components/Table/Table'
import type { InfoBoxItem } from 'helpers/text'

const hydrateMinersInfoBox = (data): InfoBoxItem[] => {
  return [
    { title: 'Total miners', value: getNumberText(data.minersTotal) },
    { title: 'Total hashrate', value: getHashText(data.hashrate) },
  ]
}

const hydrateMinerTableData = (miners: {}) => {
  const minerMapper = ([miner, detail]) => ({
    miner: miner.toUpperCase(),
    hashrate: detail?.hr,
    'last beat': toStringDateTime(detail?.lastBeat),
    lastBeat: detail?.lastBeat,
  })

  return Object.entries(miners)
    .map(minerMapper)
    .sort((a, b) => (a.lastBeat < b.lastBeat ? 1 : -1))
}

const hydrateMinerTableColumns = (): Column[] => {
  return [
    {
      name: 'Miner',
      id: 'miner',
      type: 'address',
    },
    {
      name: 'Hashrate',
      id: 'hashrate',
      type: 'hashrate',
    },
    {
      name: 'Last beat',
      id: 'last beat',
      type: 'time',
    },
  ]
}

/**
 * It fetches the data from the payments API, and then hydrates the data into the correct format
 * @returns an object with two keys:
 * - minersInfoBox: a hydrated version for the miners InfoBox component
 * - minerTable: a hydrated version for the miner Table component
 */
export const getMinersData = async () => {
  const allMiners = await fetchAllSettled(
    AGGREGATE_API_ENDPOINTS.map((endpoint) => endpoint + 'miners'),
  )

  const aggregator = aggregateNumbers(['hashrate', 'minersTotal'])
  const info = reduceList(allMiners, aggregator)
  const { miners } = reduceList(allMiners, mergeArraysAndObjects)

  return {
    minersInfoBox: hydrateMinersInfoBox(info),
    minerTable: {
      data: hydrateMinerTableData(miners),
      columns: hydrateMinerTableColumns(),
    },
  }
}
