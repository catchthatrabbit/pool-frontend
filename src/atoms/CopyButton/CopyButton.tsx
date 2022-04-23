import { notify } from 'atoms/Toaster';
import { notificationsConfig } from 'config';
import applyTransparence from 'helpers/transparentize';
import React, { FC, useCallback, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { colorVariables } from 'styles/variables';

import { CopyIcon } from '../icons';
import Text from '../Text';


const ButtonStyled = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
  color: ${colorVariables.white};
  text-align: center;
  white-space: nowrap;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
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

interface ICopyButtonProps {
  value: string
}

const CopyButton: FC<ICopyButtonProps> = ({ value }) => {
  const [ isOnce, setIsOnce ] = useState(false)
  const timeoutId = useRef<NodeJS.Timeout>()

  const handleOnCopy = useCallback(() => {
    if (isOnce) return

    setIsOnce(true)
    timeoutId.current && clearTimeout(timeoutId.current)
    timeoutId.current = setTimeout(() => setIsOnce(false), notificationsConfig.COPY_TO_CLIPBOARD_OPTIONS.duration)

    notify.success(
      <Text fontFamily='secondary'>Copied to your clipboard</Text>,
      notificationsConfig.COPY_TO_CLIPBOARD_OPTIONS,
    )
  }, [ isOnce ])

  return (
    <CopyToClipboard text={ value }>
      <ButtonStyled type="button" title="copy to clipboard" onClick={ handleOnCopy }>
        <CopyIcon />
        <Text>COPY</Text>
      </ButtonStyled>
    </CopyToClipboard>
  )
}

export default CopyButton
