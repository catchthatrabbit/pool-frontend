import { string } from 'prop-types';
import { WrapperStyled, TitleStyled, ImageStyled } from './style';

const CommonContentTitle = ({ children: title, image }) => (
  <WrapperStyled>
    <ImageStyled src={image} alt={`logo-${title}`} />
    <TitleStyled>{title}</TitleStyled>
  </WrapperStyled>
);

CommonContentTitle.propTypes = {
  children: string,
  image: string,
};

CommonContentTitle.defaultProps = {
  children: 'Content Title',
  image: '',
};

export default CommonContentTitle;
