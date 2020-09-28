import Link from 'next/link';
import { PureComponent } from 'react';
import { func, node, oneOf, string } from 'prop-types';
import cn from 'classnames';

import { button, theme_outline, theme_transparent } from './Button.module.scss';

export default class Button extends PureComponent {
  static propTypes = {
    children: node,
    className: string,
    onClick: func,
    href: string,
    theme: oneOf(['outline', 'transparent']),
  };

  static defaultProps = {
    children: 'Button',
    className: '',
    onClick: null,
    href: '',
    theme: 'outline',
  };

  render() {
    const { children, className, onClick, href, theme } = this.props;
    const classes = cn(className, {
      [button]: true,
      [theme_outline]: theme === 'outline',
      [theme_transparent]: theme === 'transparent',
    });

    if (href) {
      return (
        <Link href={href}>
          <a className={classes}>{children}</a>
        </Link>
      );
    }

    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }
}
