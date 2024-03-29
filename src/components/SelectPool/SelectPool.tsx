import { EPool } from 'enums'
import { minWidth } from 'helpers/responsive'
import applyTransparence from 'helpers/transparentize'
import { useState } from 'react'
import { poolSelector, setPoolSelector, usePoolStore } from 'store/pool.store'
import styled, { css } from 'styled-components'
import { colorVariables, fonts } from 'styles/variables'

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
  margin: 0;
  background: transparent;
  min-width: 120%;
  height: 100%;
  cursor: pointer;
  font-family: ${fonts.primary};
  color: ${colorVariables.white};
  font-style: normal;
  white-space: initial;
  font-size: 18px;
  text-align: center;
  display: inline-block;
  border: 1px solid ${applyTransparence(0.5, colorVariables.gunPowder)};
  border-radius: 10px;
  padding: 17px;
  position: relative;
  z-index: 1;
  left: -10%;

  &:hover,
  &:focus {
    outline: none;
  }
  & + span.dicon {
    position: relative;
    right: 46px;
    pointer-events: none;
  }
`
const PoolOption = styled.option`
  /* display: none; */
`
const CustomSelectArrow = styled.span`
  position: absolute;
  right: 15px;
  font-size: 20px;
  pointer-events: none;
  transition: all 0.1s ease-in-out;
  transform-origin: center;

  &[data-open='true'] {
    transform: rotate(90deg);
  }
`

const CustomPoolOptions = styled.div`
  //position: absolute;
  //top: 110%;
  //left: 0;
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
  //max-height: 0;
  overflow: hidden;
  //opacity: 0;
  padding: 0 1rem;
  //user-select: none;

  &[data-visible='true'] {
    z-index: 1;
    max-height: 500px;
    padding: 1rem;
    overflow: visible;
    opacity: 1;
    transition: all 0.3s ease;
  }
`
const CustomPoolOption = styled.option`
  margin: 1rem 0;
  padding: 1.5rem 2rem;
  cursor: pointer;
  border-radius: inherit;
  background: rgba(
    ${({ theme }) => theme.colors.getRGBValue(theme.colors.charade)},
    0.03
  );

  &:hover {
    color: ${({ theme }) => theme.colors.apple};
    background: rgba(
      ${({ theme }) => theme.colors.getRGBValue(theme.colors.kimberly)},
      0.03
    );
  }
  &[data-active='true'] {
    color: ${colorVariables.white};
    background: rgba(
      ${({ theme }) => theme.colors.getRGBValue(theme.colors.kimberly)},
      0.2
    );
  }
`

const CustomSelectBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: none;

  &[data-visible='true'] {
    display: block;
  }
`

const SelectPool = () => {
  const pool = usePoolStore(poolSelector)
  const setPool = usePoolStore(setPoolSelector)
  const [optionsVisibility, setOptionsVisibility] = useState(false)

  const handleOnSelectPool = (event) => {
    setPool(event.target.dataset.pool)
    setOptionsVisibility(false)
  }

  return (
    <PoolSelectionContainer>
      <PoolSelectionWrapper>
        <PoolSelect
          value={pool}
          onChange={(event) => setPool(event.target.value as EPool)}
          // onChange={ () => null }
          // onClick={ () => setOptionsVisibility(visibility => !visibility) }
        >
          <CustomPoolOption
            value={EPool.EU_PRIMARY}
            data-active={EPool.EU_PRIMARY === pool}
          >
            Primary European Pool
          </CustomPoolOption>
          <CustomPoolOption
            value={EPool.EU_BACKUP}
            data-active={EPool.EU_BACKUP === pool}
          >
            Backup European Pool
          </CustomPoolOption>
          <CustomPoolOption
            value={EPool.AS_PRIMARY}
            data-active={EPool.AS_PRIMARY === pool}
          >
            Primary Asian Pool
          </CustomPoolOption>
          <CustomPoolOption
            value={EPool.AS_BACKUP}
            data-active={EPool.AS_BACKUP === pool}
          >
            Backup Asian Pool
          </CustomPoolOption>
          <CustomPoolOption
            value={EPool.US_PRIMARY}
            data-active={EPool.US_PRIMARY === pool}
          >
            Primary US Pool
          </CustomPoolOption>
          <CustomPoolOption
            value={EPool.US_BACKUP}
            data-active={EPool.US_BACKUP === pool}
          >
            Backup US Pool
          </CustomPoolOption>
        </PoolSelect>
        <span className="dicon">▼</span>
      </PoolSelectionWrapper>
    </PoolSelectionContainer>
  )
}

export default SelectPool
