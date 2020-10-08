import { PureComponent } from 'react';
import Link from 'next/link';

import Button from '../Button';
import ContentTitle from '../ContentTitle';
import StartMining from '../SvgImage/images/StartMining';
import Logo from '../SvgImage/images/Logo';

import {
  footer,
  headerSection,
  mainSection,
  footerSection,
  logo,
  info,
} from './Footer.module.scss';

/* eslint-disable */
const FooterInfo = ({ title, list }) => (
  <div className={info}>
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
  </div>
);
/* eslint-enable */

export default class Footer extends PureComponent {
  footerData = [
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

  render() {
    return (
      <footer className={footer}>
        <div className={headerSection}>
          <ContentTitle image={StartMining}>Start Mining</ContentTitle>
          <h3>Let&apos;s jump into it</h3>
          <Button>Start mining</Button>
        </div>
        <div className={mainSection}>
          <div className={logo}>
            <Logo />
            <h4>
              Dedicated Pool
              <br />
              for <span>CORE COIN</span>
            </h4>
          </div>
          {this.footerData.map(({ title, list }) => (
            <FooterInfo key={title} title={title} list={list} />
          ))}
        </div>
        <div className={footerSection}>
          © 2020 Catch That Rabbit. All rights reserved.
        </div>
      </footer>
    );
  }
}
