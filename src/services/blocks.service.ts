import { blocksPageConfig, tablesConfig } from 'config';
import { toStringDateTime } from 'helpers/toStringDateTime';

import type { QueryFunctionContext } from 'react-query'

/**
 * It takes an array of blocks, sorts them by timestamp, and returns an array of objects with the
 * block's height, type, timestamp, hash, reward, and variance
 * @param blocks - An array of block objects.
 */
export const hydrateBlocks = (blocks: any[]) => {
  if (!blocks?.length) return []

  const blockMapper = (block) => ({
    height: block.height,
    type: block.uncle ? 'Uncle' : block.orphan ? 'Orphan' : 'Block',
    'mined on': toStringDateTime(block.timestamp),
    'block hash': block.hash,
    reward: block.reward,
    variance: (block.difficulty / block.shares).toFixed(2),
  })

  return blocks
    .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
    .map(blockMapper)
}

const getBlocks = (type: string) => async (pool: string, page: number, limit = blocksPageConfig.BLOCKS_TABLE.rowCount) => {
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
    const response = await fetch(`${ pool }/${ type }_blocks?limit=${ limit }&offset=${ (page - 1) * limit }`)
    result.status = response.status
    const blocks = await response.json()

    result.items = hydrateBlocks(blocks?.[ type ] || []),
    result.pages = Math.ceil(blocks?.[ `${ type }Total` ] / limit)
    result.pages = result.pages < tablesConfig.MAX_PAGES ? result.pages : tablesConfig.MAX_PAGES

  } catch (error) {
    console.error(error)
  }

  return result
}

export const getMatured = getBlocks('matured')
export const getMaturedQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string, number ]>) => {
  const [ _, pool, page ] = queryKey
  return getMatured(pool, page)
}

export const getImmature = getBlocks('immature')
export const getImmatureQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string, number ]>) => {
  const [ _, pool, page ] = queryKey
  return getImmature(pool, page)
}

export const getCandidates = getBlocks('candidates')
export const getCandidatesQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string, number ]>) => {
  const [ _, pool, page ] = queryKey
  return getCandidates(pool, page)
}
