import { toStringDateTime } from 'helpers/toStringDateTime'
import { toXCBPrice } from 'helpers/toXCBPrice'

import type { Column } from '@components/Table/Table'

const hydrateBlockTableData = (blocks) => {
  const blockMapper = (block) => ({
    height: block.height,
    type: block.uncle ? 'Uncle' : block.orphan ? 'Orphan' : 'Block',
    'mined on': toStringDateTime(block.timestamp),
    'block hash': block.hash,
    reward: toXCBPrice(block.reward),
    variance: (block.difficulty / block.shares).toFixed(2),
  })

  return blocks.map(blockMapper).slice(0, 10)
}

const hydrateBlockTableColumns = (): Column[] => {
  return [
    {
      name: 'Height',
      id: 'height',
      type: 'block',
    },
    {
      name: 'Type',
      id: 'type',
      type: 'string',
    },
    {
      name: 'Mined on',
      id: 'mined on',
      type: 'time',
    },
    {
      name: 'Block hash',
      id: 'block hash',
      type: 'block',
    },
    {
      name: 'Reward',
      id: 'reward',
      type: 'xcb',
    },
    {
      name: 'Variance',
      id: 'variance',
      type: 'percentage',
    },
  ]
}

/**
 * It fetches the data from the API, and then hydrates the data into the correct format
 * @returns an object with two properties:
 * - infoBoxData
 * - chartData
 */
export const getHomeBlockTableData = async () => {
  const result = await fetch(process.env.API_ENDPOINT + 'blocks.json')
  const data = await result.json()

  return {
    data: hydrateBlockTableData(data.matured),
    columns: hydrateBlockTableColumns(),
  }
}
