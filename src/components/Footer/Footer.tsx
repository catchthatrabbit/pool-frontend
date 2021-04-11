import React, { useContext } from 'react'
import Link from 'next/link'

import styled, { css } from 'styled-components'
import { colorVariables, fonts } from 'styles/variables'
import applyTransparence from 'helpers/transparentize'
import Button from 'atoms/Button/Button'
import Text from 'atoms/Text/Text'
import ContentTitle from 'atoms/ContentTitle/ContentTitle'
import { LogoIcon, StartMiningIcon } from 'atoms/icons'
import { startMining } from 'constants/paths'
import { minWidth } from 'helpers/responsive'
import ResponsiveContext from 'providers/responsive-provider/context'

const InfoStyled = styled.div`
  font-family: ${fonts.secondary};
  ul {
    margin-bottom: 0;
    padding: 0;
    li {
      margin-top: 10px;
    }
  }
  margin-top: 24px;
  ${minWidth(
    'tablet',
    css`
      margin-top: 0;
    `,
  )}
`
const FooterSection = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  background: ${applyTransparence(0.25, colorVariables.gunPowder)};
  border: 1px solid ${colorVariables.gunPowder};
  text-align: center;
`
const LogoStyled = styled.div`
  svg {
    width: 240px;
    height: auto;
  }
  transform: scale(0.5);
  align-self: center;
  ${minWidth(
    'tablet',
    css`
      transform: scale(1);
    `,
  )}
`
const LogoTextStyle = styled.div`
  margin: 30px 0 0 0;
`
const HeaderTextStyle = styled.div`
  margin: 60px 0;
`
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  margin: 10px 50px 28px;
  flex-flow: column;
  ${minWidth(
    'tablet',
    css`
      margin: 50px 60px 28px;
      flex-flow: column;
      height: 282px;
    `,
  )}
  ${minWidth(
    'tablet',
    css`
      margin: 50px 60px 28px;
      flex-flow: row;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      margin: 50px 100px 28px 100px;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      margin: 50px 442px 28px 278px;
    `,
  )}
`
const HeaderSection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 494px;
  background: ${applyTransparence(0.25, colorVariables.gunPowder)};
  border: 1px solid ${colorVariables.gunPowder};
`
const HeaderDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 103px 0 103px 0;
`
const FooterStyled = styled.footer`
  width: 100%;
`
const FooterInfo = ({ title, list }) => (
  <InfoStyled>
    <Text size="large" fontFamily="primary">
      {title}
    </Text>
    <ul>
      {list.map((item) => (
        <li key={item.text}>
          <Link href={item.href}>
            <Text size="medium" fontFamily="secondary">
              {item.text}
            </Text>
          </Link>
        </li>
      ))}
    </ul>
  </InfoStyled>
)

const Footer = () => {
  const displayType = useContext(ResponsiveContext)
  const fontSize = displayType === 'mobileL' ? 'ultra-large' : 'large'

  const footerData = [
    {
      title: 'Legal',
      list: [
        { text: 'Terms of Operation', href: '/' },
        { text: 'Privacy Policy', href: '/' },
      ],
    },
    {
      title: 'Resources',
      list: [
        { text: 'Getting Started', href: '/' },
        { text: 'Help & Support', href: '/' },
        { text: 'FAQ', href: '/' },
        { text: 'API', href: '/' },
      ],
    },
    {
      title: 'About',
      list: [
        { text: 'Contact', href: '/' },
        { text: 'Our goal', href: '/' },
        { text: 'Pool Address', href: '/' },
      ],
    },
  ]
  return (
    <FooterStyled>
      <HeaderSection>
        <HeaderDiv>
          <ContentTitle Image={<StartMiningIcon />}>Start Mining</ContentTitle>
          <HeaderTextStyle>
            <Text size="very-large" italic>
              Let&apos;s jump into it
            </Text>
          </HeaderTextStyle>
          <Button href={startMining}>Start mining</Button>
        </HeaderDiv>
      </HeaderSection>
      <MainSection>
        <LogoStyled>
          <LogoIcon />
          <LogoTextStyle>
            <Text italic size={fontSize}>
              Dedicated Pool
            </Text>
            <br />
            <Text italic size={fontSize}>
              for{' '}
            </Text>
            <Text color="apple" italic size={fontSize}>
              CORE COIN
            </Text>
          </LogoTextStyle>
        </LogoStyled>
        {footerData.map(({ title, list }) => (
          <FooterInfo key={title} title={title} list={list} />
        ))}
      </MainSection>
      <FooterSection>
        <Text size="tiny">© 2020 Catch That Rabbit. All rights reserved.</Text>
      </FooterSection>
    </FooterStyled>
  )
}

export default Footer
