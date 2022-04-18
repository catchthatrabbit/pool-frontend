import { EU_PRIMARY_API_ENDPOINT, POOL_ENDPOINTS_MAPPER } from 'config';
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
  poolEndpoint: EU_PRIMARY_API_ENDPOINT,
  pool: EPool.EU_PRIMARY,
  setPool: (value: EPool) =>set({
    pool: Object.values(EPool).includes(value) ? value : EPool.EU_PRIMARY,
    poolEndpoint: POOL_ENDPOINTS_MAPPER?.[ value ] || POOL_ENDPOINTS_MAPPER.default,
  }),
  resetPool: () => set({
    pool: EPool.EU_PRIMARY,
    poolEndpoint: EU_PRIMARY_API_ENDPOINT,
  }),
}))

//
// SELECTORS
export const poolSelector = (state: IPoolState) => state.pool
export const poolEndpointSelector = (state: IPoolState) => state.poolEndpoint
export const setPoolSelector = (state: IPoolState) => state.setPool
export const resetPoolSelector = (state: IPoolState) => state.resetPool
