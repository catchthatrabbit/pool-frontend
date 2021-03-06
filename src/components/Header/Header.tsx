import { PureComponent } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import cn from 'classnames';

import {
  HeaderStyled,
  HeaderBodyStyled,
  NavHeaderStyled,
  LogoStyled,
  ButtonStyled,
  NavBarStyled,
} from './style';
import { WithRouterProps } from 'next/dist/client/with-router';

type Props = WithRouterProps

class Header extends PureComponent<Props> {
  state = {
    prevScrollPos: 0,
    visible: true,
    isMenuOpened: false,
  };

  links = [
    { text: 'Home', href: '/' },
    { text: 'BLOCKS', href: '/blocks' },
    { text: 'Payments', href: '/payments' },
    { text: 'Miners', href: '/miners' },
    { text: 'Start Mining', href: '/start-mining' },
    { text: 'Contact', href: '/contact' },
  ];

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth >= 1440) {
      document.body.style.overflow = 'visible';
      this.setState({ isMenuOpened: false });
    }
  };

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    const { prevScrollPos } = this.state;
    const visible = prevScrollPos > currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible,
    });
  };

  handleMenuClick = () => {
    const { isMenuOpened } = this.state;
    document.body.style.overflow = !isMenuOpened ? 'hidden' : 'visible';
    this.setState({ isMenuOpened: !isMenuOpened });
  };

  handleLinkClick = () => {
    document.body.style.overflow = 'visible';
    this.setState({ isMenuOpened: false });
  };

  renderLinks = () => {
    /* eslint-disable */
    const {
      router: { pathname },
    } = this.props;

    return this.links.map(({ text, href }) => (
      <Link href={href} key={href}>
        <a onClick={this.handleLinkClick} role="link" tabIndex="0">
          <h3 className={cn({ active: href === pathname })}>{text}</h3>
        </a>
      </Link>
    ));
    /* eslint-enable */
  };

  render() {
    const { visible, isMenuOpened } = this.state;

    return (
      <HeaderStyled
        className={cn({
          hidden: !visible,
          fullHeight: isMenuOpened,
        })}
      >
        <HeaderBodyStyled>
          <NavHeaderStyled>
            <a href="/">
              <LogoStyled src="/images/logo.svg" />
            </a>
            <ButtonStyled
              type="button"
              className={cn({ cross: isMenuOpened })}
              onClick={this.handleMenuClick}
            >
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </ButtonStyled>
          </NavHeaderStyled>
          <NavBarStyled className={cn({ show: isMenuOpened })}>
            {this.renderLinks()}
          </NavBarStyled>
        </HeaderBodyStyled>
      </HeaderStyled>
    );
  }
}

export default withRouter(Header);
