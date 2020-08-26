import { PureComponent } from "react";
import { number, node, string } from "prop-types";

import { svgImage } from "./SvgImage.module.scss";

export default class SvgImage extends PureComponent {
  static propTypes = {
    children: node,
    width: number,
    height: number,
    viewBox: string,
  };

  static defaultProps = {
    children: null,
    width: 140,
    height: 90,
    viewBox: "0 0 140 90",
  };

  render() {
    const { children, width, height, viewBox } = this.props;

    return (
      <svg
        className={svgImage}
        viewBox={viewBox}
        width={width}
        height={height}
        focusable={false}
        style={{
          width,
          height,
        }}
      >
        {children}
      </svg>
    );
  }
}
