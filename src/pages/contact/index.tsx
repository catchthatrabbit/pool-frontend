import React, { FC } from 'react'
import ContentTitle from 'atoms/ContentTitle'
import styled from 'styled-components'
import { ContactUsIcon } from 'atoms/icons'
import Background from 'atoms/Background'
import BoxEmail from 'atoms/BoxEmail'

const StyledContainer = styled.div`
  margin: 60px 140px 35px;
`
const StyledBoxContent = styled.div`
  margin-top: 62px;
`

const ContactsPage: FC = () => (
  <>
    <Background />
    <StyledContainer>
      <ContentTitle Image={<ContactUsIcon />}>CONTACT US</ContentTitle>
      <StyledBoxContent>
        <BoxEmail title="Support" email="support@catchthatrabbit.com">
          If you have any questions about our pool, you can contact us freely
          through this email.
        </BoxEmail>
        <BoxEmail
          title="Security &amp; Bug reports"
          email="issues@catchthatrabbit.com"
        >
          Any bug or any other security issues reports are highly and greatly
          appreciated.
        </BoxEmail>
        <BoxEmail
          title="Legal &amp; Commercial"
          email="office@catchthatrabbit.com"
        >
          For legal and commercial questions please feel free to email us.
        </BoxEmail>
      </StyledBoxContent>
    </StyledContainer>
  </>
)

export default ContactsPage
