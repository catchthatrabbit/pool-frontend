import React, { FC } from 'react'
import styled from 'styled-components'
import { colorVariables } from 'styles/variables'
import Text from 'atoms/Text'
import Button from 'atoms/Button'

const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 39px;
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  margin-bottom: 56px;
`
const EmailBoxWrapperStyled = styled.div`
  margin: 50px 0 0 0;
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
  email: string
}

const BoxEmail: FC<IProps> = ({ title, email, children }) => (
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
    <EmailBoxWrapperStyled>
      <Button theme="email">{email}</Button>
    </EmailBoxWrapperStyled>
  </BoxStyled>
)

export default BoxEmail
