
import type { Column } from '@components/Table/Table'

export const MINER_TABLE_COLUMNS: Column[] = [
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
