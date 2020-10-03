import { PureComponent } from 'react';
import { string } from 'prop-types';
import cn from 'classnames';
import Button from '../Button';
import MapCircle from '../MapCircle';
import { mapButton } from './MapButton.module.scss';

export default class MapButton extends PureComponent {
  static propTypes = {
    children: string,
    href: string,
    className: string,
  };

  static defaultProps = {
    children: 'Connect ... location',
    href: '',
    className: '',
  };

  render() {
    const { children, href, className } = this.props;

    return (
      <div className={cn({ [mapButton]: true, [className]: true })}>
        <MapCircle />
        <Button theme="transparent" href={href}>
          {children}
        </Button>
      </div>
    );
  }
}
