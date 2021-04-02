import styled from 'styled-components'
import React, { FC } from 'react'
import Text from 'atoms/Text/Text'
import { colorVariables } from 'styles/variables'

const WrapperStyled = styled.div`
  width: 500px;
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  padding: 50px 55px 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const TextContainerStyled = styled.div`
  margin-bottom: 15px;
`
const SubtitleStyled = styled.div`
  line-height: 12px;
  margin-top: 10px;
  height: 14px;
`

interface IProps {
  title: string
  subtitle: string
  value: string
  suffix: string
}
const InfoStatsBox: FC<IProps> = ({ title, subtitle, value, suffix }) => {
  return (
    <WrapperStyled>
      <TextContainerStyled>
        <Text size="very-large" fontWeight="bold" italic>
          {title}
        </Text>
      </TextContainerStyled>
      <Text size="very-large" fontWeight="bold" italic>
        {`${value} ${suffix}`}
      </Text>
      <SubtitleStyled>
        <Text size="small" italic>
          {subtitle}
        </Text>
      </SubtitleStyled>
    </WrapperStyled>
  )
}

export default InfoStatsBox
