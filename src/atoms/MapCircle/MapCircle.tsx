import React from 'react'
import styled, { keyframes } from 'styled-components'
import { colorVariables } from 'styles/variables'
import applyTransparence from 'helpers/transparentize'

const Circle = styled.div`
  height: 24px;
  width: 24px;
  background: ${colorVariables.white};
  border-radius: 50%;
  @media screen and (min-width: 1320px) {
    height: 24px;
    width: 24px;
  }
`
const pulse = keyframes`
  0% {
    border-color: ${applyTransparence(0.6, colorVariables.white)}
  }
  33% {
    border-color: ${applyTransparence(1, colorVariables.white)}
  }
  66% {
    border-color: ${applyTransparence(0.4, colorVariables.white)}
  }
  100% {
    border-color: ${applyTransparence(0.2, colorVariables.white)}
  }
`
const Border = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
`
const Border1 = styled(Border)`
  border: 3px solid;
  padding: 3px;
  animation: ${pulse} infinite normal 2s 0s;
`
const Border2 = styled(Border)`
  border: 2px solid;
  padding: 4px;
  animation: ${pulse} infinite normal 2s 0.5s;
`
const Border3 = styled(Border)`
  display: inline-block;
  border: 1px solid;
  padding: 5px;
  animation: ${pulse} infinite normal 2s 1s;
`

const MapCircle = () => (
  <Border3>
    <Border2>
      <Border1>
        <Circle />
      </Border1>
    </Border2>
  </Border3>
)

export default MapCircle
