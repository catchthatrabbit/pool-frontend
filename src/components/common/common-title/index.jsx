import { oneOf, string } from 'prop-types';
import { TitleWrapperStyled } from './style';

const CommonTitle = ({ children, color, size }) => (
  <TitleWrapperStyled color={color} size={size}>
    {children}
  </TitleWrapperStyled>
);

CommonTitle.propTypes = {
  children: string,
  color: oneOf(['green', 'white']),
  size: oneOf(['medium', 'large']),
};

CommonTitle.defaultProps = {
  children: 'Title',
  color: 'white',
  size: 'large',
};

export default CommonTitle;
