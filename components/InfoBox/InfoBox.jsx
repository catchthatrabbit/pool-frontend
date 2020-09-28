import { PureComponent } from 'react';
import { string } from 'prop-types';

import { container, title, value } from './InfoBox.module.scss';

export default class InfoBox extends PureComponent {
  static propTypes = {
    value: string,
    title: string,
  };

  static defaultProps = {
    value: '10 units',
    title: 'title',
  };

  render() {
    const { value: boxValue, title: boxTitle } = this.props;

    return (
      <div className={container}>
        <span className={value}>{boxValue}</span>
        <span className={title}>{boxTitle}</span>
      </div>
    );
  }
}
