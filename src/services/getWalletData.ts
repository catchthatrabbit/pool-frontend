import {
  aggregateNumbers,
  fetchAllSettled,
  mergeArraysAndObjects,
  reduceList,
} from 'helpers'
import { toStringDateTime } from 'helpers/toStringDateTime'
import { toXCBPrice } from 'helpers/toXCBPrice'

import type { Column } from '@components/Table/Table'
import { AGGREGATE_API_ENDPOINTS } from 'config/api-endpoints.config'

const hydrateWorkersTableData = (workers: any) => {
  if (!workers) return []

  const workerMapper = ([id, detail]) => ({
    id,
    hashShort: detail.hr,
    hashLong: detail.hr2,
    last: toStringDateTime(detail.lastBeat),
    lastBeat: detail.lastBeat,
    status: detail.offline,
  })

  return Object.entries(workers)
    .map(workerMapper)
    .sort((a, b) => (a.lastBeat < b.lastBeat ? 1 : -1))
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

const hydratePayoutsTableData = (payouts: any[]) => {
  if (!payouts) return []

  const payoutMapper = (payout) => ({
    time: toStringDateTime(payout.timestamp),
    tx: payout.tx,
    amount: toXCBPrice(payout.amount),
  })

  return payouts
    .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
    .map(payoutMapper)
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
  if (!data) return []

  const computingInformation = {
    title: 'Computing information',
    data: [
      {
        key: '1',
        title: 'Workers online',
        value: data.workersOnline,
        type: 'number',
      },
      {
        key: '2',
        title: 'Hashrate ~30m',
        value: data.currentHashrate,
        type: 'hashrate',
      },
      {
        key: '3',
        title: 'Hashrate ~3h',
        value: data.hashrate,
        type: 'hashrate',
      },
      {
        key: '4',
        title: 'Last share',
        value: toStringDateTime(data.lastShare),
        type: 'ago',
      },
      {
        key: '5',
        title: 'Round share',
        value: data.roundShares,
        type: 'percentage',
      },
      {
        key: '6',
        title: 'Blocks found',
        value: data.blocksFound ?? 0,
        type: 'number',
      },
    ],
  }

  const generalStats = {
    title: 'General stats',
    data: [
      {
        key: '1',
        title: 'Immature balance',
        value: toXCBPrice(data.immature),
        type: 'xcb',
      },
      {
        key: '2',
        title: 'Pending balance',
        value: toXCBPrice(data.pending),
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
        value: toXCBPrice(data.paid),
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
export const getWalletData = async (address: string): Promise<any> => {
  const allAccounts = await fetchAllSettled(
    AGGREGATE_API_ENDPOINTS.map((endpoint) => `${endpoint}accounts/${address}`),
  )

  //
  // separating stats and tables data from each other
  const { allAccountsStatsData, allAccountsTableData } = allAccounts.reduce(
    (acc, item) => {
      const { stats, workers, payments, ...rest } = item

      acc.allAccountsStatsData = [
        ...acc.allAccountsStatsData,
        { ...stats, ...rest },
      ]
      acc.allAccountsTableData = [
        ...acc.allAccountsTableData,
        { workers, payments },
      ]

      return acc
    },
    { allAccountsStatsData: [], allAccountsTableData: [] },
  )

  const aggregator = aggregateNumbers([
    'currentHashrate',
    'hashrate',
    'balance',
    'blocksFound',
    'immature',
    'paid',
    'pending',
    'roundShares',
    'paymentsTotal',
    'workersOffline',
    'workersOnline',
    'workersTotal',
  ])
  const stats = reduceList<any>(allAccountsStatsData, aggregator)
  const account = reduceList<any>(allAccountsTableData, mergeArraysAndObjects)

  return {
    isNotFound: !account,
    minerInfo: hydrateMinerInfoData(stats),
    workersTable: {
      data: hydrateWorkersTableData(account?.workers),
      columns: hydrateWorkersTableColumns(),
    },
    payoutsTable: {
      data: hydratePayoutsTableData(account?.payments),
      columns: hydratePayoutsTableColumns(),
    },
  }
}
