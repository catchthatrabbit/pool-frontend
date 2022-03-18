const MinerDataInfoDataEu = [
  { key: '1', title: 'Server', value: 'eu.catchthatrabbit.com' },
  { key: '2', title: 'Port', value: '8008' },
  {
    key: '3',
    title: 'Username',
    value: '<your wallet address>.<worker name>',
  },
  { key: '4', title: 'Password', value: '<empty>' },
]
const MinerDataInfoDataEuSec = [
  { key: '1', title: 'Server', value: 'eu1.catchthatrabbit.com' },
  { key: '2', title: 'Port', value: '8008' },
  {
    key: '3',
    title: 'Username',
    value: '<your wallet address>.<worker name>',
  },
  { key: '4', title: 'Password', value: '<empty>' },
]
const MinerDataInfoDataNa = [
  { key: '1', title: 'Server', value: 'na.catchthatrabbit.com' },
  { key: '2', title: 'Port', value: '8008' },
  {
    key: '3',
    title: 'Username',
    value: '<your wallet address>.<worker name>',
  },
  { key: '4', title: 'Password', value: '<empty>' },
]
const MinerDataInfoDataAs = [
  { key: '1', title: 'Server', value: 'as.catchthatrabbit.com' },
  { key: '2', title: 'Port', value: '8008' },
  {
    key: '3',
    title: 'Username',
    value: '<your wallet address>.<worker name>',
  },
  { key: '4', title: 'Password', value: '<empty>' },
]
const MinerDataInfoDataAsSec = [
  { key: '1', title: 'Server', value: 'as1.catchthatrabbit.com' },
  { key: '2', title: 'Port', value: '8008' },
  {
    key: '3',
    title: 'Username',
    value: '<your wallet address>.<worker name>',
  },
  { key: '4', title: 'Password', value: '<empty>' },
]
const MinerDataCardData = {
  title: 'CoreMiner',
  description:
    'Fast & Open-source miner with excellent hardware support & 0% fees.',
  info: ['OS: Ubuntu, Raspbian', 'CPUs: AMD, Intel, ARM', 'Fee: 0%'],
  configLink: 'https://gist.github.com/raisty/54a68880cb913da81273edfcb05c2270',
  minerLink: 'https://github.com/catchthatrabbit/coreminer/releases',
}
const LinksData = [
  { href: '#pool-europe', text: 'Europe' },
  { href: '#pool-europe-1', text: 'Eu1' },
  { href: '#pool-asia', text: 'Asia' },
  { href: '#pool-asia-1', text: 'As1' },
]

const hydratePoolDetailsData = (data) => {
  return [
    {
      key: '1',
      title: 'Reward scheme',
      value: 'PPLNS (Pay Per Last N Shares)',
    },
    { key: '2', title: 'Pool fee', value: data.PoolFee + ' %' },
    { key: '3', title: 'Payout threshhold', value: data.PayoutThreshold + 'ꞥ (nucles)' },
    { key: '4', title: 'Mining algorithm', value: 'RandomY' },
  ]
}

/**
 * It fetches the data from the API, and then hydrates the data into the correct format
 * @returns it resolves an object with following keys:
    - minerDataInfoDataEu
    - minerDataInfoDataNa
    - minerDataInfoDataAs
    - linksData
    - poolDetailsData
 */
export const getStartMiningData = async () => {
  const result = await fetch(process.env.API_ENDPOINT + 'settings.json')
  const data = await result.json()

  return {
    minerDataInfoEu: MinerDataInfoDataEu,
	minerDataInfoEuSec: MinerDataInfoDataEuSec,
    minerDataInfoNa: MinerDataInfoDataNa,
    minerDataInfoAs: MinerDataInfoDataAs,
	minerDataInfoAsSec: MinerDataInfoDataAsSec,
    minerDataCard: MinerDataCardData,
    links: LinksData,
    poolDetails: hydratePoolDetailsData(data),
  }
}
