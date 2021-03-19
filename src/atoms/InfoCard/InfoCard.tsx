import styled from 'styled-components'
import React, { FC } from 'react'
import Text from 'atoms/Text/Text'
import InfoText, { InfoBoxItem } from 'atoms/InfoText'

const WrapperStyled = styled.div`
  width: 812px;
  border: 1px solid ${({ theme }) => theme.colors.spindle};
  border-radius: 10px;
`
const TitleStyled = styled.div`
  padding: 43px 65px 18px;
`
const ContentTextStyled = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: 18px 0 0;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  padding-bottom: 43px;
`
const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  :not(:nth-child(3)) {
    margin-right: 126px;
  }
`

interface IProps {
  title: string
  data: InfoBoxItem[]
}
const InfoCard: FC<IProps> = ({ title, data }) => {
  return (
    <WrapperStyled>
      <TitleStyled>
        <Text size="very-large" fontWeight="bold" italic>
          {title}
        </Text>
      </TitleStyled>
      <ContentTextStyled>
        {data.map(({ title, value, type }) => (
          <TextStyled>
            <InfoText title={title} value={value} type={type} />
          </TextStyled>
        ))}
      </ContentTextStyled>
    </WrapperStyled>
  )
}

export default InfoCard
