import { PureComponent } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import cn from 'classnames';
import Logo from '../SvgImage/images/Logo';

import {
  header,
  headerBody,
  navHeader,
  navBar,
  active,
  bar1,
  bar2,
  bar3,
  cross,
  hidden,
  show,
  fullHeight,
} from './Header.module.scss';

class Header extends PureComponent {
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
    if (window.innerWidth >= 1320) {
      document.body.style.overflow = 'visible';
      this.setState({ isMenuOpened: false });
    }
  };

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 200) {
      return;
    }

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
        <a
          className={cn({ [active]: href === pathname })}
          onClick={this.handleLinkClick}
          role="link"
          tabIndex="0"
        >
          <h3>{text}</h3>
        </a>
      </Link>
    ));
    /* eslint-enable */
  };

  render() {
    const { visible, isMenuOpened } = this.state;

    return (
      <header
        className={cn({
          [header]: true,
          [hidden]: !visible,
          [fullHeight]: isMenuOpened,
        })}
      >
        <div className={headerBody}>
          <div className={navHeader}>
            <a href="/">
              <Logo />
            </a>
            <button
              type="button"
              className={cn({ [cross]: isMenuOpened })}
              onClick={this.handleMenuClick}
            >
              <div className={bar1} />
              <div className={bar2} />
              <div className={bar3} />
            </button>
          </div>
          <nav className={cn({ [navBar]: true, [show]: isMenuOpened })}>
            {this.renderLinks()}
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
