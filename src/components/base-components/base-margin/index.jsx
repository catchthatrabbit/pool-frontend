/* eslint-disable react/prop-types */
import StyledMargin from './style';

const BaseMargin = ({
  children,
  x,
  y,
  right,
  left,
  top,
  bottom,
  all,
  inline,
  flex,
}) => (
  <StyledMargin
    x={x}
    y={y}
    right={right}
    left={left}
    top={top}
    bottom={bottom}
    all={all}
    inline={inline}
    flex={flex}
  >
    {children}
  </StyledMargin>
);

export default BaseMargin;
