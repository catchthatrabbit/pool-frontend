import Button from 'atoms/Button/Button'
import ContentTitle from 'atoms/ContentTitle/ContentTitle'
import { LogoIcon, StartMiningIcon } from 'atoms/icons'
import Link from 'atoms/Link/Link'
import Text from 'atoms/Text/Text'
import { pathsConstant } from 'constant'
import { minWidth } from 'helpers/responsive'
import applyTransparence from 'helpers/transparentize'
import ResponsiveContext from 'providers/responsive-provider/context'
import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { colorVariables, fonts } from 'styles/variables'

const InfoStyled = styled.div`
  font-family: ${fonts.secondary};
  ul {
    margin-bottom: 0;
    padding: 0;
    li {
      margin-top: 10px;
    }
  }
  margin-top: 0;
`
const FooterSection = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  background: ${applyTransparence(0.25, colorVariables.gunPowder)};
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
      margin-right: 20px;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      margin-right: 100px;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      margin-right: 250px;
    `,
  )}
`
const LogoTextStyle = styled.div`
  margin: 30px 0 0 0;
`
const HeaderTextStyle = styled.div`
  margin: 30px 0;
  ${minWidth(
    'laptop',
    css`
      margin: 60px 0;
    `,
  )}
`
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  margin: 10px 15px 28px;
  flex-flow: column;
  ${minWidth(
    'tablet',
    css`
      margin: 50px 60px 28px;
      flex-flow: row;
      height: 282px;
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
  height: auto;
  background: ${applyTransparence(0.25, colorVariables.gunPowder)};
`
const HeaderDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px;
  ${minWidth(
    'laptop',
    css`
      padding: 103px 0 103px;
    `,
  )}
`
const FooterStyled = styled.footer`
  width: 100%;
`
const FooterInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  & ul > li > text {
    cursor: pointer;
  }
`

const FooterInfo = ({ title, list }) => (
  <InfoStyled>
    <Text size="large" fontFamily="primary">
      {title}
    </Text>
    <ul>
      {list.map((item) => (
        <li key={item.text}>
          <Link to={item.href}>
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
      title: 'Start',
      list: [{ text: 'Start mining', href: '/start-mining' }],
    },
    {
      title: 'Stats',
      list: [
        { text: 'Miners', href: '/miners' },
        { text: 'Latest blocks', href: '/blocks' },
        { text: 'Payments', href: '/payments' },
      ],
    },
    {
      title: 'About',
      list: [
        { text: 'Contact', href: '/contact' },
        { text: 'Support', href: 'mailto:support@catchthatrabbit.com' },
      ],
    },
  ]
  return (
    <FooterStyled>
      <HeaderSection>
        <HeaderDiv>
          <ContentTitle Image={<StartMiningIcon />}>Start Mining</ContentTitle>
          <HeaderTextStyle>
            <Text size="very-large">Let&apos;s jump into it</Text>
          </HeaderTextStyle>
          <Button href={pathsConstant.startMining}>Start mining</Button>
        </HeaderDiv>
      </HeaderSection>
      <MainSection>
        <LogoStyled>
          <LogoIcon />
          <LogoTextStyle>
            <Text size={fontSize}>Dedicated Pool</Text>
            <br />
            <Text size={fontSize}>for </Text>
            <Text color="apple" size={fontSize}>
              CORE COIN
            </Text>
            <br />
            <Text size={fontSize}>&amp; IoT devices</Text>
          </LogoTextStyle>
        </LogoStyled>
        <FooterInfoContent>
          {footerData.map(({ title, list }) => (
            <FooterInfo key={title} title={title} list={list} />
          ))}
        </FooterInfoContent>
      </MainSection>
      <FooterSection>
        <Text size="tiny">
          © 2020-{new Date().getFullYear()} Catch That Rabbit. All rights
          reserved.
        </Text>
      </FooterSection>
    </FooterStyled>
  )
}

export default Footer
