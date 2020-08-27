import { PureComponent } from 'react';
import { string, func } from 'prop-types';

import { contentTitle } from './ContentTitle.module.scss';

export default class ContentTitle extends PureComponent {
  static propTypes = {
    children: string,
    image: func,
  };

  static defaultProps = {
    children: 'Content Title',
    image: null,
  };

  render() {
    const { children: titleText, image: Image } = this.props;

    return (
      <div className={contentTitle}>
        {Image && <Image />}
        <h2>{titleText}</h2>
      </div>
    );
  }
}
