import { tablesConfig } from 'config';

import type { Column } from '@components/Table/Table'

const WORKERS_TABLE_COLUMNS: Column[] = [
  {
    name: 'Rabbit',
    id: 'id',
    type: 'string',
  },
  {
    name: 'Hashrate ~30m',
    id: 'hashShort',
    type: 'hashrate',
  },
  {
    name: 'Hashrate ~3h',
    id: 'hashLong',
    type: 'hashrate',
  },
  {
    name: 'Last share',
    id: 'last',
    type: 'ago',
  },
  {
    name: 'Status',
    id: 'status',
    type: 'status',
  },
]

export const WORKERS_TABLE = {
  columns: WORKERS_TABLE_COLUMNS,
  rowCount: tablesConfig.PAGE_LIMIT,
}


const PAYOUTS_TABLE_COLUMNS: Column[] = [
  {
    name: 'Time',
    id: 'time',
    type: 'time',
  },
  {
    name: 'Tx id',
    id: 'tx',
    type: 'block',
  },
  {
    name: 'Amount',
    id: 'amount',
    type: 'xcb',
  },
]

export const PAYOUTS_TABLE = {
  columns: PAYOUTS_TABLE_COLUMNS,
  rowCount: tablesConfig.PAGE_LIMIT,
}
