import { minersPageConfig, tablesConfig } from 'config';
import { getHashText, getNumberText } from 'helpers/text';
import { toStringDateTime } from 'helpers/toStringDateTime';

import type { QueryFunctionContext } from 'react-query';
import type {  InfoBoxItemProps } from 'helpers/text';

/**
 * It takes in a data object and returns an array of  InfoBoxItemProps objects
 * @param data - any
 * @returns { InfoBoxItemProps} An array of objects with two properties: title and value.
 */
export const hydrateMinersInfoBox = (data: any):  InfoBoxItemProps[] => {
  return [
    { title: 'Total miners', value: getNumberText(data.minersTotal) },
    { title: 'Total hashrate', value: getHashText(data.hashrate) },
  ]
}

/**
 * It takes a dictionary of miners and returns an array of miners sorted by last beat
 * @param miners - {}
 * @returns An array of objects with the following properties:
 *   miner: string
 *   hashrate: number
 *   last beat: string
 *   lastBeat: number
 */
export const hydrateMiners = (miners: {}) => {
  const minerMapper = ([miner, detail]) => ({
    miner: miner.toUpperCase(),
    hashrate: detail?.hr,
    'last beat': toStringDateTime(detail?.lastBeat),
    lastBeat: detail?.lastBeat,
  })

  return Object.entries(miners)
    .map(minerMapper)
    .sort((a, b) => (a.lastBeat < b.lastBeat ? 1 : -1))
}

export const getMiners = async (pool: string, page: number) => {
  let result: {
    items: any[]
    pages: number
    status: number
  } = {
    items: [],
    pages: 0,
    status: 500,
  }

  try {
    const response = await fetch(`${ pool }/miners?limit=${ minersPageConfig.MINERS_TABLE.rowCount }&offset=${ (page - 1) * minersPageConfig.MINERS_TABLE.rowCount }`)
    result.status = response.status
    const data = await response.json()

    result.items = hydrateMiners(data.miners),
    result.pages = Math.ceil(data.minersTotal / minersPageConfig.MINERS_TABLE.rowCount)
    result.pages = result.pages < tablesConfig.MAX_PAGES ? result.pages : tablesConfig.MAX_PAGES

  } catch (error) {
    console.error(error)
  }

  return result
}

export const getMinersQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string, number ]>) => {
  const [ _, pool, page ] = queryKey
  return getMiners(pool, page)
}


export const getMinersInfo = async (pool: string) => {
  let result:  InfoBoxItemProps[]

  try {
    const response = await fetch(`${ pool }/miners_stats`)
    const data = await response.json()
    result = hydrateMinersInfoBox(data)

  } catch (error) {
    console.error(error);
    result = []
  }

  return result
}

export const getMinersInfoQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string ]>) => {
  const [ _, pool ] = queryKey
  return getMinersInfo(pool)
}
