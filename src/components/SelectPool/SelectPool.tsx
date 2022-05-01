import { EPool } from 'enums';
import { minWidth } from 'helpers/responsive';
import { useState } from 'react';
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
  margin: 5px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${minWidth(
    'laptopL',
    css`
      height: 88px;
    `,
  )}
`
const PoolSelect = styled.select`
  appearance: none;
  padding: 0 1em 0 0;
  margin: 0;
  background: transparent;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none;
  font-family: ${fonts.primary};
  letter-spacing: 0.05em;
  color: ${colorVariables.white};
  font-style: normal;
  font-weight: 600;
  white-space: initial;
  font-size: 18px;
  text-align: center;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.spindle};
  border-radius: 10px;
  padding: 15px;
  padding-right: 30px;
  position: relative;
  z-index: 1;

  &:hover, &:focus {
    outline: none;
  }
`
const PoolOption = styled.option`
  display: none;
`
const CustomSelectArrow = styled.span`
  position: absolute;
  right: 15px;
  font-size: 20px;
  pointer-events: none;
  transition: all 0.1s ease-in-out;
  transform-origin: center;

  &[data-open="true"] {
    transform: rotate(90deg);
  }
`

const CustomPoolOptions = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background: rgb(24 26 31);
  border-radius: 10px;
  box-shadow: 0 1rem 1rem 0 rgba(0 0 0 / 20%);
  border: 1px solid ${({ theme }) => theme.colors.spindle};
  font-family: Orbitron, sans-serif;
  letter-spacing: 0.05em;
  font-style: normal;
  font-weight: 600;
  white-space: initial;
  font-size: 14px;
  z-index: -1;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  padding: 0 1rem;
  user-select: none;

  &[data-visible="true"] {
    z-index: 1;
    max-height: 500px;
    padding: 1rem;
    overflow: visible;
    opacity: 1;
    transition: all .3s ease;
  }
`
const CustomPoolOption = styled.div`
  margin: 1rem 0;
  padding: 1.5rem 2rem;
  cursor: pointer;
  border-radius: inherit;
  background: rgba(${({ theme }) => theme.colors.getRGBValue(theme.colors.white)}, .03);

  &:hover {
    color: ${({ theme }) => theme.colors.apple};
    background: rgba(${({ theme }) => theme.colors.getRGBValue(theme.colors.white)}, .03);
  }
  &[data-active="true"] {
    color: ${colorVariables.white};
    background: rgba(${({ theme }) => theme.colors.getRGBValue(theme.colors.apple)}, .2);
  }
`

const CustomSelectBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;

  &[data-visible="true"] {
    display: block;
  }
`

const SelectPool = () => {
  const pool = usePoolStore(poolSelector)
  const setPool = usePoolStore(setPoolSelector)
  const [ optionsVisibility, setOptionsVisibility ] = useState(false)

  const handleOnSelectPool = (event) => {
    setPool(event.target.dataset.pool)
    setOptionsVisibility(false)
  }

  return (
    <PoolSelectionContainer>
      <PoolSelectionWrapper>
        <PoolSelect
          value={ pool }
          onChange={ () => null }
          onClick={ () => setOptionsVisibility(visibility => !visibility) }
        >
          <PoolOption value={ EPool.EU_PRIMARY }>Primary European Pool</PoolOption>
          <PoolOption value={ EPool.EU_BACKUP }>Backup European Pool</PoolOption>
          <PoolOption value={ EPool.AS_PRIMARY }>Primary Asian Pool</PoolOption>
          <PoolOption value={ EPool.AS_BACKUP }>Backup Asian Pool</PoolOption>
        </PoolSelect>

        <CustomSelectArrow data-open={ optionsVisibility }>&rsaquo;</CustomSelectArrow>

        <CustomPoolOptions data-visible={ optionsVisibility } onClick={ handleOnSelectPool }>
          <CustomPoolOption data-pool={ EPool.EU_PRIMARY } data-active={ EPool.EU_PRIMARY === pool }>
            Primary European Pool
          </CustomPoolOption>

          <CustomPoolOption data-pool={ EPool.EU_BACKUP } data-active={ EPool.EU_BACKUP === pool }>
            Backup European Pool
          </CustomPoolOption>

          <CustomPoolOption data-pool={ EPool.AS_PRIMARY } data-active={ EPool.AS_PRIMARY === pool }>
            Primary Asian Pool
          </CustomPoolOption>

          <CustomPoolOption data-pool={ EPool.AS_BACKUP } data-active={ EPool.AS_BACKUP === pool }>
            Backup Asian Pool
          </CustomPoolOption>

        </CustomPoolOptions>

        <CustomSelectBackdrop data-visible={ optionsVisibility } onClick={ () => setOptionsVisibility(false) } />
      </PoolSelectionWrapper>
    </PoolSelectionContainer>
  )
}

export default SelectPool
