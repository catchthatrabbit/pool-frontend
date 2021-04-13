import React, { FC } from 'react'
import ContentTitle from 'atoms/ContentTitle'
import styled, { css } from 'styled-components'
import { ContactUsIcon } from 'atoms/icons'
import Background from 'atoms/Background'
import BoxEmail from 'atoms/BoxEmail'
import { minWidth } from 'helpers/responsive'

const ContainerStyled = styled.div`
  margin: 63px auto;
  width: 373px;
  ${minWidth(
    'tablet',
    css`
      margin: 36px 50px 73px;
      width: auto;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      margin: 36px 100px 73px;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      margin: 36px 140px 73px;
    `,
  )}
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
