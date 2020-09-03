import { PureComponent } from 'react';
import { string, number, oneOfType } from 'prop-types';
import SvgImage from './SvgImage';

export default (path, props = {}) =>
  class Image extends PureComponent {
    static propTypes = {
      width: oneOfType([number, string]),
      height: oneOfType([number, string]),
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
