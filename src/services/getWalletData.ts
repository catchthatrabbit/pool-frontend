import { toStringDateTime } from 'helpers/toStringDateTime'
import { toXCBPrice } from 'helpers/toXCBPrice'

import type { Column } from '@components/Table/Table'


const hydrateWorkersTableData = (workers: any[]) => {
  const workerMapper = ([id, detail]) => ({
    id,
    hashShort: detail.hr,
    hashLong: detail.hr2,
    last: toStringDateTime(detail.lastBeat),
    status: detail.offline,
  })

  return Object.entries(workers).map(workerMapper)
}

const hydrateWorkersTableColumns = (): Column[] => {
  return [
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
}

const hydratePayoutsTableData = (payouts) => {
  const payoutMapper = (payout) => ({
    time: toStringDateTime(payout.timestamp),
    tx: payout.tx,
    amount: toXCBPrice(payout.amount),
  })

  return payouts.map(payoutMapper)
}

const hydratePayoutsTableColumns = (): Column[] => {
  return [
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
}

const hydrateMinerInfoData = (data) => {
  const computingInformation = {
    title: 'Computing information',
    data: [
      {
        key: '1',
        title: 'Workers online',
        value: data.workersOnline,
        type: 'number',
      },
      { key: '2', title: 'Hashrate ~30m', value: data.currentHashrate, type: 'hashrate' },
      { key: '3', title: 'Hashrate ~3h', value: data.hashrate, type: 'hashrate' },
      { key: '4', title: 'Last share', value: toStringDateTime(data.stats?.lastShare), type: 'ago' },
      {
        key: '5',
        title: 'Round share',
        value: data.roundShares,
        type: 'percentage',
      },
      { key: '6', title: 'Blocks found', value: data.stats?.blocksFound ?? 0, type: 'number' },
    ],
  }

  const generalStats = {
    title: 'General stats',
    data: [
      {
        key: '1',
        title: 'Immature balance',
        value: toXCBPrice(data.stats.immature),
        type: 'xcb',
      },
      {
        key: '2',
        title: 'Pending balance',
        value: toXCBPrice(data.stats.pending),
        type: 'xcb',
      },
      {
        key: '3',
        title: 'Total payments',
        value: toXCBPrice(data.paymentsTotal),
        type: 'number',
      },
      {
        key: '4',
        title: 'Total paid',
        value: toXCBPrice(data.stats.paid),
        type: 'xcb',
      },
    ],
  }

  return [computingInformation, generalStats]
}

/**
 * It fetches the data from the API, and then hydrates the data into the correct format
 * @returns an object with two keys:
 * - workersInfoBox: a hydrated version for the workers InfoBox component
 * - workerTable: a hydrated version for the worker Table component
 */
export const getWalletData = async (address: string) => {
  // TODO Araad: use "address"
  const result = await fetch(process.env.API_ENDPOINT + 'accounts-ab623f7c365a5da4b3b00bf0a54a1887ac528eeaaa86.json')
  const data = await result.json()

  return {
    minerInfo: hydrateMinerInfoData(data),
    workersTable: {
      data: hydrateWorkersTableData(data.workers),
      columns: hydrateWorkersTableColumns(),
    },
    payoutsTable: {
      data: hydratePayoutsTableData(data.payments),
      columns: hydratePayoutsTableColumns(),
    },
  }
}
