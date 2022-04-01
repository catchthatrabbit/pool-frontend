/**
/* NOTE: it's the data key that we want to aggregate on them.
/*       if the field is nested in, the parents key must be present in its list.
*/
export const WHITELIST_AGGREGATE_KEYS = {
  home: {
    jumbotron: [ 'hashrate', 'minersTotal' ],
    stats: [ 'poolCharts', 'y' ],
  },
  miners: [ 'hashrate', 'minersTotal' ],
  payments: [ 'paymentsAmount', 'paymentsTotal' ],
  wallet: [ 'currentHashrate', 'hashrate', 'balance', 'blocksFound', 'immature', 'paid', 'pending', 'roundShares', 'paymentsTotal', 'workersOffline', 'workersOnline', 'workersTotal' ],
}
