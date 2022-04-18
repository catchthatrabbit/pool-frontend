import { EPool } from 'enums';
import { minWidth } from 'helpers/responsive';
import { poolSelector, setPoolSelector, usePoolStore } from 'store/pool.store';
import styled, { css } from 'styled-components';
import { colorVariables, fonts } from 'styles/variables';

const PoolSelectionContainer = styled.div`
  margin: 41px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PoolSelectionWrapper = styled.div`
  height: 70px;
  padding: 15px;
  margin: 5px;
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.spindle};
  border-radius: 10px;
  ${minWidth(
    'laptopL',
    css`
      height: 88px;
    `,
  )}
`
const PoolSelect = styled.select`
  background: transparent;
  text-align: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  border: none;
  font-family: ${fonts.primary};
  letter-spacing: 0.05em;
  color: ${colorVariables.white};
  font-style: normal;
  font-weight: 600;
  white-space: initial;
  font-size: 18px;

  &:hover, &:focus {
    outline: none;
  }
`

const SelectPool = () => {
  const pool = usePoolStore(poolSelector)
  const setPool = usePoolStore(setPoolSelector)

  return (
    <PoolSelectionContainer>
      <PoolSelectionWrapper>
        <PoolSelect value={pool} onChange={(event) => setPool(event.target.value as EPool)}>
          <option value={EPool.EU_PRIMARY}>Primary European Pool</option>
          <option value={EPool.EU_BACKUP}>Backup European Pool</option>
          <option value={EPool.AS_PRIMARY}>Primary Asian Pool</option>
          <option value={EPool.AS_BACKUP}>Backup Asian Pool</option>
        </PoolSelect>
      </PoolSelectionWrapper>
    </PoolSelectionContainer>
  )
}

export default SelectPool
