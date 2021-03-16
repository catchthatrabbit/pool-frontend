import React, { FC } from 'react'
import CommonContentTitle from 'atoms/ContentTitle'
import styled from 'styled-components'
import { ContactUsIcon } from 'atoms/icons'
import Text from 'atoms/Text'

const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
  margin-bottom: 56px;
`

const TextStyled = styled.p`
  margin: 1rem 0 0;
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 0.583rem;
`

const EmailBoxWrapperStyled = styled.div`
  margin: 2rem 0 0 0;
  align-self: center;
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileM} {
    align-self: flex-start;
  }
`

const EmailContainer = styled.div`
  display: inline-block;
  padding: 1rem 0.5rem;
  font-size: min(max(3vw, 0.35rem), 0.75rem);
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
  background-color: rgba(
    ${({ theme }) => theme.colors.getRGBValue(theme.colors.gunPowder)},
    0.2
  );
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
    padding: 29px 1rem;
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
    padding: 29px 3rem;
  }
`
const StyledContainer = styled.div`
  margin: 60px 140px 35px;
`
const StyledBoxContent = styled.div`
  margin-top: 62px;
`
const StyledTextTitle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gunPowder};
  padding-bottom: 25px;
`

const ContactsPage: FC = () => (
  <StyledContainer>
    <CommonContentTitle Image={<ContactUsIcon />}>
      CONTACT US
    </CommonContentTitle>
    <StyledBoxContent>
      <BoxStyled>
        <Text>Support</Text>
        <TextStyled>
          If you have any questions about our pool, you can contact us freely
          through this email.
        </TextStyled>
        <EmailBoxWrapperStyled>
          <EmailContainer>support@catchthatrabbit.com</EmailContainer>
        </EmailBoxWrapperStyled>
      </BoxStyled>
      <BoxStyled>
        <StyledTextTitle>
          <Text>Security &amp; Bug reports</Text>
        </StyledTextTitle>
        <TextStyled>
          Any bug or any other security issues reports are highly and greatly
          appreciated.
        </TextStyled>
        <EmailBoxWrapperStyled>
          <EmailContainer>issues@catchthatrabbit.com</EmailContainer>
        </EmailBoxWrapperStyled>
      </BoxStyled>
      <BoxStyled>
        <StyledTextTitle>
          <Text>Legal &amp; Commercial</Text>
        </StyledTextTitle>
        <TextStyled>
          For legal and commercial questions please feel free to email us.
        </TextStyled>
        <EmailBoxWrapperStyled>
          <EmailContainer>office@catchthatrabbit.com</EmailContainer>
        </EmailBoxWrapperStyled>
      </BoxStyled>
    </StyledBoxContent>
  </StyledContainer>
)

export default ContactsPage
