import { BLOCKS_TABLE_COLUMNS } from './blocks-page.config'

/**
/* NOTE: it's the data key that we want to aggregate on them.
/*       if the field is nested in, the parents key must be present in its list.
*/
export const WHITELIST_AGGREGATION_KEYS = {
  jumbotron: [ 'hashrate', 'minersTotal' ],
  stats: [ 'poolCharts', 'y' ],
}

export const BLOCKS_TABLE = {
  columns: BLOCKS_TABLE_COLUMNS,
  rowCount: 5, // 5 * 4 Pools = 20 Rows
  page: 1,
  moreLink: { href: '/blocks', text: 'View More Blocks' },
}
