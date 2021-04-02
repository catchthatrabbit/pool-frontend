import styled from 'styled-components'
import React, { FC } from 'react'
import Text from 'atoms/Text/Text'
import getText, { TextType, InfoBoxItem } from 'helpers/text'

const WrapperStyled = styled.div`
  padding: 15px 0 20px;
  height: 88px;
  width: 260px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.spindle};
  border-radius: 10px;
`

const InfoBox: FC<InfoBoxItem> = ({ value, title, type = 'hash' }) => {
  const text: TextType = getText(type, value)
  console.log(text)
  return (
    <WrapperStyled>
      <Text size="very-large" fontWeight="bold" italic>
        {text.prefix}
        {text.value}
        {text.suffix}
        <Text size="large" fontWeight="bold" italic>
          {text.metric !== '' && ' ' + text.metric}
          {type === 'hashSpeed' && '/'}
        </Text>
        {type === 'hashSpeed' && (
          <Text size="small" fontWeight="bold" italic>
            s
          </Text>
        )}
      </Text>
      <Text size="small" fontWeight="light">
        {title}
      </Text>
    </WrapperStyled>
  )
}

export default InfoBox
