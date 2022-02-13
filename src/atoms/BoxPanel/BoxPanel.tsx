import React, { FC } from 'react'
import styled from 'styled-components'
import { colorVariables } from 'styles/variables'
import Text from 'atoms/Text'

const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 39px;
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  margin-bottom: 56px;
`
const DescBoxWrapperStyled = styled.div`
  margin: 30px 0 0 0;
  align-self: flex-start;
`
const TextTitleStyled = styled.div`
  border-bottom: 1px solid ${colorVariables.gunPowder};
  padding-bottom: 25px;
`
const TextContentStyled = styled.div`
  margin-top: 37px;
`

interface IProps {
  title: string
  desc: string
}

const BoxPanel: FC<IProps> = ({ title, desc, children }) => (
  <BoxStyled>
    <TextTitleStyled>
      <Text size="very-large">
        {title}
      </Text>
    </TextTitleStyled>
    <TextContentStyled>
      <Text size="medium" fontFamily="secondary" space={'initial'}>
        {children}
      </Text>
    </TextContentStyled>
    <DescBoxWrapperStyled>
      <Text size="small" fontFamily="secondary" space={'initial'}>
        {desc}
      </Text>
    </DescBoxWrapperStyled>
  </BoxStyled>
)

export default BoxPanel
