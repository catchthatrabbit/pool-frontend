import React, { FC } from 'react'
import ContentTitle from 'atoms/ContentTitle'
import styled from 'styled-components'
import { ContactUsIcon } from 'atoms/icons'
import Background from 'atoms/Background'
import BoxEmail from 'atoms/BoxEmail'

const ContainerStyled = styled.div`
  margin: 36px 140px 35px;
  z-index: 1;
`
const BoxContentStyled = styled.div`
  margin-top: 41px;
`

const ContactsPage: FC = () => (
  <>
    <Background />
    <ContainerStyled>
      <ContentTitle Image={<ContactUsIcon />}>CONTACT US</ContentTitle>
      <BoxContentStyled>
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
      </BoxContentStyled>
    </ContainerStyled>
  </>
)

export default ContactsPage
