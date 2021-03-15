import { BoxStyled, TextStyled, EmailBoxWrapperStyled } from './style'
import CommonContentTitle from '../../../components/ContentTitle'
import CommonTitle from '../../atoms/common-title'
import styled from 'styled-components'

const EmailContainer = styled.div`
  display: inline-block;
  padding: 1rem 0.5rem;
  font-size: min(max(3vw, 0.35rem), 0.75rem);
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  background-color: rgba(
    ${({ theme }) => theme.colors.getRGBValue(theme.colors.gunPowder)},
    0.2
  );
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
    padding: 1.4rem 1rem;
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
    padding: 1.4rem 3rem;
  }
`

const ContactPageUi = () => (
  <>
    <CommonContentTitle image="/images/contact-us.svg">
      CONTACT US
    </CommonContentTitle>
    <BoxStyled>
      <CommonTitle>Support</CommonTitle>
      <TextStyled>
        If you have any questions about our pool, you can contact us freely
        through this email.
      </TextStyled>
      <EmailBoxWrapperStyled>
        <EmailContainer>support@catchthatrabbit.com</EmailContainer>
      </EmailBoxWrapperStyled>
    </BoxStyled>
    <BoxStyled>
      <CommonTitle>Security &amp; Bug reports</CommonTitle>
      <TextStyled>
        Any bug or any other security issues reports are highly and greatly
        appreciated.
      </TextStyled>
      <EmailBoxWrapperStyled>
        <EmailContainer>issues@catchthatrabbit.com</EmailContainer>
      </EmailBoxWrapperStyled>
    </BoxStyled>
    <BoxStyled>
      <CommonTitle>Legal &amp; Commercial</CommonTitle>
      <TextStyled>
        For legal and commercial questions please feel free to email us.
      </TextStyled>
      <EmailBoxWrapperStyled>
        <EmailContainer>office@catchthatrabbit.com</EmailContainer>
      </EmailBoxWrapperStyled>
    </BoxStyled>
  </>
)

export default ContactPageUi
