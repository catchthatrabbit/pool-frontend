import PropTypes from 'prop-types';
import StyledPadding from './style';

const Padding = ({
  children,
  x,
  y,
  right,
  left,
  top,
  bottom,
  all,
}) => (
  <StyledPadding
    x={x}
    y={y}
    right={right}
    left={left}
    top={top}
    bottom={bottom}
    all={all}
  >
    {children}
  </StyledPadding>
);
Padding.propTypes = {
  children: PropTypes.node,
  x: PropTypes.string,
  y: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  all: PropTypes.string,
};
export default Padding;
