import { AGGREGATE_API_ENDPOINTS } from 'config/api-endpoints.config'
import { fetchAllSettled, mergeArraysAndObjects, reduceList } from 'helpers'
import { toStringDateTime } from 'helpers/toStringDateTime'
import { toXCBPrice } from 'helpers/toXCBPrice'

import type { Column } from '@components/Table/Table'
const hydrateBlockTableData = (blocks: any[]) => {
  const blockMapper = (block) => ({
    height: block.height,
    type: block.uncle ? 'Uncle' : block.orphan ? 'Orphan' : 'Block',
    'mined on': toStringDateTime(block.timestamp),
    'block hash': block.hash,
    reward: toXCBPrice(block.reward),
    variance: (block.difficulty / block.shares).toFixed(2),
  })

  return blocks
    .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
    .slice(0, 10)
    .map(blockMapper)
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
  const allBlocks = await fetchAllSettled(
    AGGREGATE_API_ENDPOINTS.map((endpoint) => endpoint + 'blocks'),
  )

  const blocks = reduceList<any>(allBlocks, mergeArraysAndObjects)

  return {
    data: hydrateBlockTableData(blocks.matured),
    columns: hydrateBlockTableColumns(),
  }
}
