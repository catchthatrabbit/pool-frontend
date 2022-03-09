import { toStringDateTime } from 'helpers/toStringDateTime'
import { toXCBPrice } from 'helpers/toXCBPrice'

import type { Column } from '@components/Table/Table'

const hydrateBlockTableData = (blocks: any[]) => {
  if (!blocks?.length) return []

  const blockMapper = (block) => ({
    height: block.height,
    type: block.uncle ? 'Uncle' : block.orphan ? 'Orphan' : 'Block',
    'mined on': toStringDateTime(block.timestamp),
    'block hash': block.hash,
    reward: toXCBPrice(block.reward),
    variance: (block.difficulty / block.shares).toFixed(2),
  })

  return blocks.map(blockMapper)
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
 * It fetches tables data from the blocks API endpoint, parses it, and returns the data in a format
 * that can be used by the tables component
 * @returns An object with three keys:
 * - blocks
 * - immature
 * - newBlocks
 */
export const getBlocksTableData = async () => {
  const result = await fetch(process.env.API_ENDPOINT + 'blocks.json')
  const data = await result.json()

  return {
    blocks: {
      data: hydrateBlockTableData(data.matured),
      columns: hydrateBlockTableColumns(),
    },
    immature: {
      data: hydrateBlockTableData(data.immature),
      columns: hydrateBlockTableColumns(),
    },
    newBlocks: {
      data: hydrateBlockTableData(data.luck),
      columns: hydrateBlockTableColumns(),
    },
  }
}
