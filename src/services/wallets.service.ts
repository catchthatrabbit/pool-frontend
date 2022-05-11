import { tablesConfig, walletPageConfig } from 'config';
import { unitsConstant } from 'constant';
import { toStringDateTime } from 'helpers/toStringDateTime';

import type { QueryFunctionContext } from 'react-query';

/**
 * It takes a workers map and returns an array of worker
 * @param workers - {}
 * @returns An array of objects with the following properties:
 *   id: string
 *   hashShort: string
 *   hashLong: string
 *   last: string
 *   lastBeat: number
 *   status: boolean
 */
export const hydrateWorkers = (workers: {}) => {
  if (!workers) return []

  const workerMapper = ([id, detail]) => ({
    id,
    hashShort: detail.hr,
    hashLong: detail.hr2,
    last: toStringDateTime(detail.lastBeat),
    lastBeat: detail.lastBeat,
    status: !detail.offline,
  })

  return Object.entries(workers)
    .map(workerMapper)
    .sort((a, b) => (a.lastBeat < b.lastBeat ? 1 : -1))
}

/**
 * It takes a pool, an address, a limit and a page number, and returns an object with a list of workers
 * and a pagination object
 * @param {string} pool - The pool's URL.
 * @param {string} address - The address of the miner you want to get the workers for.
 * @param {number} limit - The number of items to return per page.
 * @param {number} page - The page number of the workers to fetch.
 * @returns An object with two properties: items and pagination.
 */
export const getWorkers = async (pool: string, address: string, page: number) => {
  const result: {
    items: any[]
    pages: number
    status: number
  } = {
    items: [],
    pages: 0,
    status: 500,
  }

  try {
    const response = await fetch(`${ pool }/workers/${ address }?limit=${ walletPageConfig.WORKERS_TABLE.rowCount }&offset=${ (page - 1) * walletPageConfig.WORKERS_TABLE.rowCount }`)
    result.status = response.status
    const data = await response.json()

    result.items = hydrateWorkers(data.workers)
    result.pages = Math.ceil(data.workersTotal / walletPageConfig.WORKERS_TABLE.rowCount)
    result.pages = result.pages < tablesConfig.MAX_PAGES ? result.pages : tablesConfig.MAX_PAGES

  } catch (error) {
    console.error(error)
  }

  return result
}

export const getWorkersQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string, string, number ]>) => {
  const [ _, address, pool, page ] = queryKey
  return getWorkers(pool, address, page)
}

/**
 * It takes an array of payouts, sorts them by timestamp, and then maps them to a new array of payout
 * @param {any[]} payouts - any[]
 * @returns An array of objects with the following properties:
 *   time: a string representation of the payout's timestamp
 *   tx: the payout's transaction ID
 *   amount: a string representation of the payout's amount
 */
export const hydratePayouts = (payouts: any[]) => {
  if (!payouts) return []

  const payoutMapper = (payout) => ({
    time: toStringDateTime(payout.timestamp),
    tx: payout.tx,
    amount: payout.amount,
  })

  return payouts
    .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
    .map(payoutMapper)
}

/**
 * It fetches the payouts for a given address, hydrates the data, and returns the result
 * @param {string} pool - The pool's URL.
 * @param {string} address - The address of the miner
 * @param {number} limit - The number of items to return per page.
 * @param {number} page - The page number of the paginated results.
 * @returns An object with two properties: items and pagination.
 */
export const getPayouts = async (pool: string, address: string, page: number) => {
  const result: {
    items: any[]
    pages: number
    status: number
  } = {
    items: [],
    pages: 0,
    status: 500,
  }

  try {
    const response = await fetch(`${ pool }/payments/${ address }?limit=${ walletPageConfig.PAYOUTS_TABLE.rowCount }&offset=${ (page - 1) * walletPageConfig.PAYOUTS_TABLE.rowCount }`)
    result.status = response.status
    const data = await response.json()

    result.items = hydratePayouts(data.payments)
    result.pages = Math.ceil(data.paymentsTotal / walletPageConfig.PAYOUTS_TABLE.rowCount)
    result.pages = result.pages < tablesConfig.MAX_PAGES ? result.pages : tablesConfig.MAX_PAGES

  } catch (error) {
    console.error(error)
  }

  return result
}

export const getPayoutsQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string, string, number ]>) => {
  const [ _, address, pool, page ] = queryKey
  return getPayouts(pool, address, page)
}


/**
 * It takes a data object and returns an array of objects
 * @param {any} data - any - this is the data that we're going to be using to hydrate the wallet info
 * boxes.
 * @returns An array of objects.
 */
export const hydrateWalletInfoBoxes = (data: any) => {
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
        value: toStringDateTime(data.stats.lastShare),
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
        value: data.stats.blocksFound ?? 0,
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
        value: (data.stats.immature / unitsConstant.NUCLE),
        type: 'xcb',
      },
      {
        key: '2',
        title: 'Pending balance',
        value: (data.stats.pending / unitsConstant.NUCLE),
        type: 'xcb',
      },
      {
        key: '3',
        title: 'Total payments',
        value: data.paymentsTotal,
        type: 'number',
      },
      {
        key: '4',
        title: 'Total paid',
        value: (data.stats.paid / unitsConstant.NUCLE),
        type: 'xcb',
      },
    ],
  }

  return [computingInformation, generalStats]
}

/**
 * It takes a pool and an address, fetches the data from the pool, and returns an array of objects that
 * contain the data we need to hydrate the wallet info boxes
 * @param {string} pool - The URL of the pool you want to query.
 * @param {string} address - The address of the wallet you want to get information about.
 * @returns An array of objects.
 */
export const getWalletInfo = async (pool: string, address: string) => {
  let result: any[]

  try {
    const response = await fetch(`${ pool }/accounts/${address}`)
    const data = await response.json()
    result = hydrateWalletInfoBoxes(data)

  } catch (error) {
    console.error(error);
    result = []
  }

  return result
}

export const getWalletInfoQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string, string ]>) => {
  const [ _, address, pool ] = queryKey
  return getWalletInfo(pool, address)
}