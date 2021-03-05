import React from 'react';
import Link from 'next/link';

import styled, { css } from 'styled-components';
import { colorVariables, fonts, screen } from 'styles/variables';
import applyTransparence from 'helpers/transparentize.ts';
import Button from 'components/Button/Button';
import Text from 'components/Text/Text';
import { WrapperStyled, TitleStyled } from '../../src/components/common/common-content-title/style';
import { LogoIcon, StartMiningIcon } from '../icons';

const InfoStyled = styled.div`
  margin-top: 24px;
  font-family: ${fonts.secondary};
  h4 {
      margin: 0;
      font-size: 18px;
  }
  ul {
    margin-bottom: 0;
    padding: 0;
    list-style-type: none;
    font-size: 14px;
    li {
       margin-top: 10px;
    }
 }
 a {
    text-decoration: none;
 }
`;
const FooterSection = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  background: ${applyTransparence(0.25, colorVariables.gunPowder)};;
  border: 1px solid ${colorVariables.gunPowder};
  font-size: 10px;
  line-height: 15px;
  text-align: center;
`;
const LogoStyled = styled.div`
   align-self: center;
   svg {
      width: 140px;
      height: auto;
      @media screen and (min-width: ${screen.middleScreen}) {
        width: 100%;
      }
      @media screen and (min-width: ${screen.largeScreen}) {
         width: 100%;
      }
   }
   h4 {
      margin: 30px 0 0 0;
      font-size: min(max(1vw, 12px), 18px);
      span {
        color: ${colorVariables.apple};
      }
   }
`;
const InfoMargin = css`
  margin: 0;
`;
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 40px auto;
  ${LogoStyled};
  ${InfoStyled};
  @media screen and (min-width: 600px) {
    flex-flow: row;
    // ${InfoMargin};
  }
`;
const HeaderSection = styled.div`
  box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 495px;
    background: ${applyTransparence(0.25, colorVariables.gunPowder)};
    border: 1px solid ${colorVariables.gunPowder};
    h3 {
      margin: 65px 0;
      font-size: min(max(1.25vw, 18px), 24px);
    }
`;
const FooterStyled = styled.footer`
  width: 100%;
  ${HeaderSection};
  ${MainSection};
  ${FooterSection};
`;
const ImageStyled = styled.div`
  @media screen and (min-width: 1320px) {
    margin-right: 1rem;
  }
`;
/* eslint-disable */
const FooterInfo = ({ title, list }) => (
  <InfoStyled>
    <h4><Text size="medium" fontFamily="secondary" color="white">{title}</Text></h4>
    <ul>
      {list.map((item) => (
        <li key={item.text}>
          <Link href={item.href}>
            <a><Text size="medium" fontFamily="secondary" color="white">{item.text}</Text></a>
          </Link>
        </li>
      ))}
    </ul>
  </InfoStyled>
);
/* eslint-enable */
const Footer = () => {
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
  ];
  return (
    <FooterStyled>
      <HeaderSection>
        <WrapperStyled>
          <ImageStyled><StartMiningIcon /></ImageStyled>
          <TitleStyled><Text size="very-large" fontFamily="primary" color="white" italic>Start Mining</Text></TitleStyled>
        </WrapperStyled>
        <h3><Text size="very-large" fontFamily="primary" color="white" italic>Let&apos;s jump into it</Text></h3>
        <Button>Start mining</Button>
      </HeaderSection>
      <MainSection>
        <LogoStyled>
          <LogoIcon />
          <h4>
            <Text size="large" fontFamily="primary" color="white" italic>Dedicated Pool</Text>
            <br />
            <Text size="large" fontFamily="primary" color="white" italic>for </Text>
            <span><Text size="large" fontFamily="primary" color="apple" italic>CORE COIN</Text></span>
          </h4>
        </LogoStyled>
        {footerData.map(({ title, list }) => (
          <FooterInfo key={title} title={title} list={list} />
        ))}
      </MainSection>
      <FooterSection>
        <Text size="tiny" fontFamily="primary" color="white">© 2020 Catch That Rabbit. All rights reserved.</Text>
      </FooterSection>
    </FooterStyled>
  );
};

export default Footer;
