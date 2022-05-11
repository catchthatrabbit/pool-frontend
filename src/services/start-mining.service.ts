import { poolEndpointsConfig } from 'config';
import { EPool } from 'enums';

export const MinerDataInfoEu = [
  { key: '1', title: 'Server', value: 'eu.catchthatrabbit.com' },
  { key: '2', title: 'Port', value: '8008' },
  {
    key: '3',
    title: 'Username',
    value: '<your wallet address>.<worker name>',
  },
  { key: '4', title: 'Password', value: '<empty>' },
]
export const MinerDataInfoEuSec = [
  { key: '1', title: 'Server', value: 'eu1.catchthatrabbit.com' },
  { key: '2', title: 'Port', value: '8008' },
  {
    key: '3',
    title: 'Username',
    value: '<your wallet address>.<worker name>',
  },
  { key: '4', title: 'Password', value: '<empty>' },
]
export const MinerDataInfoNa = [
  { key: '1', title: 'Server', value: 'na.catchthatrabbit.com' },
  { key: '2', title: 'Port', value: '8008' },
  {
    key: '3',
    title: 'Username',
    value: '<your wallet address>.<worker name>',
  },
  { key: '4', title: 'Password', value: '<empty>' },
]
export const MinerDataInfoAs = [
  { key: '1', title: 'Server', value: 'as.catchthatrabbit.com' },
  { key: '2', title: 'Port', value: '8008' },
  {
    key: '3',
    title: 'Username',
    value: '<your wallet address>.<worker name>',
  },
  { key: '4', title: 'Password', value: '<empty>' },
]
export const MinerDataInfoAsSec = [
  { key: '1', title: 'Server', value: 'as1.catchthatrabbit.com' },
  { key: '2', title: 'Port', value: '8008' },
  {
    key: '3',
    title: 'Username',
    value: '<your wallet address>.<worker name>',
  },
  { key: '4', title: 'Password', value: '<empty>' },
]
export const MinerDataCard = {
  title: 'CoreMiner',
  description:
    'Fast & Open-source miner with excellent hardware support & 0% fees.',
  info: ['OS: Ubuntu, Raspbian', 'CPUs: AMD, Intel, ARM', 'Fee: 0%'],
  configLink: 'https://gist.github.com/raisty/54a68880cb913da81273edfcb05c2270',
  minerLink: 'https://github.com/catchthatrabbit/coreminer/releases',
}
export const Links = [
  { href: '#pool-europe', text: 'European pool [EU]' },
  { href: '#pool-europe-1', text: 'European backup [EU1]' },
  { href: '#pool-asia', text: 'Asian pool [AS]' },
  { href: '#pool-asia-1', text: 'Asian backup [AS1]' },
]

const hydratePoolDetails = (data) => {
  return [
    {
      key: '1',
      title: 'Reward scheme',
      value: 'PPLNS (Pay Per Last N Shares)',
    },
    { key: '2', title: 'Pool fee', value: data.PoolFee + ' %' },
    {
      key: '3',
      title: 'Payout threshold',
      value: data.PayoutThreshold + '₥ (moli)',
    },
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
export const getPoolDetails = async () => {
  let result: {
    key: string;
    title: string;
    value: string;
  }[] = []

  try {
    const response = await fetch(poolEndpointsConfig.MAPPER[ EPool.DEFAULT ] + '/settings')
    const settings = await response.json()
    result = hydratePoolDetails(settings)

  } catch (error) {
    console.error(error)
  }

  return result
}
