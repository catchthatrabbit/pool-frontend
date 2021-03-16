import React, { FC } from 'react'
import styled from 'styled-components'
import { colorVariables } from 'styles/variables'
import Text from 'atoms/Text'
import applyTransparence from '../../helpers/transparentize'

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 39px;
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  margin-bottom: 56px;
`
const StyledEmailBoxWrapper = styled.div`
  margin: 50px 0 0 0;
  align-self: center;
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileM} {
    align-self: flex-start;
  }
`

const EmailContainer = styled.div`
  display: inline-block;
  padding: 30px 74px;
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  background-color: ${applyTransparence(0.2, colorVariables.gunPowder)};
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
    padding: 30px 74px;
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
    padding: 30px 74px;
  }
`
const StyledTextTitle = styled.div`
  border-bottom: 1px solid ${colorVariables.gunPowder};
  padding-bottom: 25px;
`
const StyledTextContent = styled.div`
  margin-top: 37px;
`

interface IProps {
  title: string
  email: string
}

const BoxEmail: FC<IProps> = ({ title, email, children }) => (
  <StyledBox>
    <StyledTextTitle>
      <Text size="very-large">{title}</Text>
    </StyledTextTitle>
    <StyledTextContent>
      <Text size="medium" fontFamily="secondary">
        {children}
      </Text>
    </StyledTextContent>
    <StyledEmailBoxWrapper>
      <EmailContainer>{email}</EmailContainer>
    </StyledEmailBoxWrapper>
  </StyledBox>
)

export default BoxEmail
