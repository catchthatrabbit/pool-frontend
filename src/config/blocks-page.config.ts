import { tablesConfig } from 'config';

import type { Column } from '@components/Table/Table'

export const BLOCKS_TABLE_COLUMNS: Column[] = [
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

export const BLOCKS_TABLE = {
  columns: BLOCKS_TABLE_COLUMNS,
  rowCount: tablesConfig.PAGE_LIMIT,
}
