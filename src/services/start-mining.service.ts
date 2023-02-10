import { poolEndpointsConfig } from 'config';
import { unitsConstant } from 'constant';
import { EPool } from 'enums';

export const MinerDataCard = {
  title: 'CoreMiner',
  description:
    'Fast & Open-source miner with excellent hardware support & 0% fees.',
  info: ['OS: Ubuntu, Raspbian', 'CPUs: AMD, Intel, ARM', 'Fee: 0%'],
  command: 'bash <(curl -s https://raw.githubusercontent.com/catchthatrabbit/coreminer/master/mine.sh)',
  minerLink: 'https://github.com/catchthatrabbit/coreminer/releases',
}

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
      value: (data.PayoutThreshold / unitsConstant.NUCLE).toString()+'₡',
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
