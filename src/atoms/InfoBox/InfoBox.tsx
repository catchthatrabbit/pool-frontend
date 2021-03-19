import styled from 'styled-components'
import React, { FC } from 'react'
import InfoText, { InfoBoxItem } from 'atoms/InfoText'

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
  return (
    <WrapperStyled>
      <InfoText title={title} value={value} type={type} />
    </WrapperStyled>
  )
}

export default InfoBox
