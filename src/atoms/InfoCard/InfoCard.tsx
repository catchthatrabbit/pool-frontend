import styled from 'styled-components'
import React, { FC } from 'react'
import Text from 'atoms/Text/Text'
import { colorVariables } from 'styles/variables'
import getText, { TextType, InfoBoxItem } from 'helpers/text'

const WrapperStyled = styled.div`
  width: 812px;
  border: 1px solid ${colorVariables.gunPowder};
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
  let text: TextType = {
    value: 0,
    metric: '',
    prefix: '',
    suffix: '',
  }
  return (
    <WrapperStyled>
      <TitleStyled>
        <Text size="very-large" fontWeight="bold" italic>
          {title}
        </Text>
      </TitleStyled>
      <ContentTextStyled>
        {data.map(({ title, value, type }) => {
          text = getText(type, value)
          return (
            <TextStyled>
              <Text size="very-large" fontWeight="bold" italic>
                {text.value}
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
            </TextStyled>
          )
        })}
      </ContentTextStyled>
    </WrapperStyled>
  )
}

export default InfoCard
