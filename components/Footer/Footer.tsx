import React from 'react';
import Link from 'next/link';

import styled, { css } from 'styled-components';
import Button from '../Button';
import CommonContentTitle from '../../src/components/common/common-content-title';
import { LogoIcon } from '../icons';

const InfoStyled = styled.div`
  margin-top: 24px;
  font-family: var(--secondary-font-family);
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
`;
const FooterSection = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  background: rgba(var(--gun-powder-rgb), 0.25);
  border: 1px solid var(--gun-powder);
  font-size: 10px;
  line-height: 15px;
  text-align: center;
`;
const LogoStyled = styled.div`
   align-self: center;
   svg {
      width: 140px;
      height: auto;
      @media screen and (min-width: $middle-screen) {
        width: 200px;
      }
      @media screen and (min-width: $large-screen) {
         width: 240px;
      }
   }
   h4 {
      margin: 30px 0 0 0;
      font-size: min(max(1vw, 12px), 18px);
      span {
        color: var(--apple);
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
    ${InfoMargin};
  }
`;
const HeaderSection = styled.div`
  box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 495px;
    background: rgba(var(--gun-powder-rgb), 0.25);
    border: 1px solid var(--gun-powder);
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
/* eslint-disable */
const FooterInfo = ({ title, list }) => (
  <InfoStyled>
    <h4>{title}</h4>
    <ul>
      {list.map((item) => (
        <li key={item.text}>
          <Link href={item.href}>
            <a>{item.text}</a>
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
        <CommonContentTitle image="/images/start-mining.svg">
          Start Mining
        </CommonContentTitle>
        <h3>Let&apos;s jump into it</h3>
        <Button>Start mining</Button>
      </HeaderSection>
      <MainSection>
        <LogoStyled>
          <LogoIcon />
          <h4>
            Dedicated Pool
            <br />
            for <span>CORE COIN</span>
          </h4>
        </LogoStyled>
        {footerData.map(({ title, list }) => (
          <FooterInfo key={title} title={title} list={list} />
        ))}
      </MainSection>
      <FooterSection>
        © 2020 Catch That Rabbit. All rights reserved.
      </FooterSection>
    </FooterStyled>
  );
};

export default Footer;
