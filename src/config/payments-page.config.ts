import { tablesConfig } from 'config';

import type { Column } from '@components/Table/Table'
const PAYMENTS_TABLE_COLUMNS: Column[] = [
  {
    name: 'Time',
    id: 'time',
    type: 'time',
  },
  {
    name: 'Amount',
    id: 'amount',
    type: 'xcb',
  },
  {
    name: 'Address',
    id: 'address',
    type: 'address',
  },
  {
    name: 'Tx id',
    id: 'tx id',
    type: 'tx',
  },
]

export const PAYMENTS_TABLE = {
  columns: PAYMENTS_TABLE_COLUMNS,
  rowCount: tablesConfig.PAGE_LIMIT,
}
