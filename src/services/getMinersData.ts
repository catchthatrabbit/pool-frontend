import { toStringDateTime } from 'helpers/toStringDateTime'

import type { Column } from '@components/Table/Table'
import type { InfoBoxItem } from 'helpers/text'

const hydrateMinersInfoBox = (data): InfoBoxItem[] => {
  return [
    { title: 'Total miners', value: data.minersTotal, type: 'number' },
    { title: 'Total hashrate', value: data.hashrate, type: 'hashSpeed' },
  ]
}

const hydrateMinerTableData = (miners) => {
  const minerMapper = ([miner, detail]) => ({
    miner: miner.toUpperCase(),
    hashrate: detail?.hr,
    'last beat': toStringDateTime(detail?.lastBeat),
  })

  return Object.entries(miners).map(minerMapper)
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
  const result = await fetch(process.env.API_ENDPOINT + 'miners.json')
  const data = await result.json()

  return {
    minersInfoBox: hydrateMinersInfoBox(data),
    minerTable: {
      data: hydrateMinerTableData(data.miners),
      columns: hydrateMinerTableColumns(),
    },
  }
}
