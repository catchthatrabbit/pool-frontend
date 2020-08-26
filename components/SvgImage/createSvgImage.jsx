import { PureComponent } from 'react';
import { string, number } from 'prop-types';
import SvgImage from './SvgImage';

export default (path, props = {}) =>
  class Image extends PureComponent {
    static propTypes = {
      width: number,
      height: number,
      viewBox: string,
    };

    /* eslint-disable */
    static defaultProps = {
      width: props.width,
      height: props.height,
      viewBox: props.viewBox,
    };
    /* eslint-enable */

    render() {
      const { width, height, viewBox } = this.props;

      return (
        <SvgImage width={width} height={height} viewBox={viewBox}>
          {path}
        </SvgImage>
      );
    }
  };
