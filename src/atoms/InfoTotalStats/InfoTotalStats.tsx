import styled from 'styled-components'
import React, { FC } from 'react'
import Text from 'atoms/Text/Text'
import { colorVariables } from 'styles/variables'

const WrapperStyled = styled.div`
  width: 812px;
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  padding: 42px 55px;
`
const TitleContainerStyled = styled.div`
  margin-bottom: 18px;
`
const SubtitleStyled = styled.div`
  line-height: 12px;
  margin-top: 10px;
`
const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

interface IProps {
  title: string
  subtitle: string
  value: number
  suffix: string
}
const InfoTotalStats: FC<IProps> = ({ title, subtitle, value, suffix }) => {
  return (
    <WrapperStyled>
      <TitleContainerStyled>
        <Text size="very-large" fontWeight="bold" italic>
          {title}
        </Text>
      </TitleContainerStyled>
      <TextContainerStyled>
        <Text size="very-large" fontWeight="bold" italic>
          {`${value} ${suffix}`}
        </Text>
        <SubtitleStyled>
          <Text size="small" italic>
            {subtitle}
          </Text>
        </SubtitleStyled>
      </TextContainerStyled>
    </WrapperStyled>
  )
}

export default InfoTotalStats
