import PropTypes from 'prop-types';
import StyledCard from './style';
const Card = ({ children, type, align, onClick }) => (
  <StyledCard align={align} type={type} onClick={onClick && onClick}>
    {children}
  </StyledCard>
);

Card.defaultProps = {
  type: 'dark',
};

Card.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  align: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
