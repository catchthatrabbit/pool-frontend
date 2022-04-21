import { tablesConfig } from 'config';

import type { Column } from '@components/Table/Table'

const MINERS_TABLE_COLUMNS: Column[] = [
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

export const MINERS_TABLE = {
  columns: MINERS_TABLE_COLUMNS,
  rowCount: tablesConfig.PAGE_LIMIT,
}
