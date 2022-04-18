import { toStringDateTime } from 'helpers/toStringDateTime';
import { toXCBPrice } from 'helpers/toXCBPrice';

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
    reward: toXCBPrice(block.reward),
    variance: (block.difficulty / block.shares).toFixed(2),
  })

  return blocks
    .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
    .map(blockMapper)
}

const getBlocks = (type: string) => async (pool: string, page: number, limit = 10) => {
  let result: {
    items: any[]
    pages: number
  }

  try {
    const response = await fetch(`${ pool }/${ type }_blocks?limit=${ limit }&offset=${ (page - 1) * limit }`)
    const blocks = await response.json()
    result = {
      items: hydrateBlocks(blocks?.[ type ] || []),
      pages: Math.ceil(blocks?.[ `${ type }Total` ] / limit),
    }

  } catch (error) {
    console.error(error);
    result = {
      items: [],
      pages: 0,
    }
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
