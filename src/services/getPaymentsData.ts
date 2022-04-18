
import type { Column } from '@components/Table/Table'

export const PAYMENT_TABLE_COLUMNS: Column[] = [
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
