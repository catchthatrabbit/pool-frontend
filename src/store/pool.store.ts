import { poolEndpointsConfig } from 'config';
import { EPool } from 'enums';
import create from 'zustand';

interface IPoolState {
  poolEndpoint: string
  pool: EPool
  setPool: (pool: EPool) => void
  resetPool: () => void
}

//
// STORE
export const usePoolStore = create<IPoolState>(set => ({
  poolEndpoint: poolEndpointsConfig.MAPPER[ EPool.DEFAULT ],
  pool: EPool.DEFAULT,
  setPool: (value: EPool) => {
    const pool = Object.values(EPool).includes(value) ? value : EPool.DEFAULT
    set({ pool, poolEndpoint: poolEndpointsConfig.MAPPER[ pool ] })
  },
  resetPool: () => set({
    pool: EPool.DEFAULT,
    poolEndpoint: poolEndpointsConfig.MAPPER[ EPool.DEFAULT ],
  }),
}))

//
// SELECTORS
export const poolSelector = (state: IPoolState) => state.pool
export const poolEndpointSelector = (state: IPoolState) => state.poolEndpoint
export const setPoolSelector = (state: IPoolState) => state.setPool
export const resetPoolSelector = (state: IPoolState) => state.resetPool
