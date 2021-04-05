import React, { FC } from 'react'
import { colorVariables } from 'styles/variables'
import styled from 'styled-components'
import applyTransparence from 'helpers/transparentize'
import { CopyIcon } from '../icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ButtonStyled = styled.button`
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
  color: ${colorVariables.white};
  text-align: center;
  white-space: nowrap;
  width: 37px;
  height: 37px;
  border: 1px solid ${applyTransparence(0.5, colorVariables.gunPowder)};
  background-color: ${applyTransparence(0.1, colorVariables.gunPowder)};
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid ${applyTransparence(1, colorVariables.gunPowder)};
    background-color: ${applyTransparence(0.5, colorVariables.gunPowder)};
  }
`

interface IProps {
  value: string
}

const CopyButton: FC<IProps> = ({ value }) => {
  return (
    <ButtonStyled type="button">
      <CopyToClipboard text={value}>
        <CopyIcon />
      </CopyToClipboard>
    </ButtonStyled>
  )
}

export default CopyButton
