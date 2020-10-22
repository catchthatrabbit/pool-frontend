/* eslint-disable react/prop-types */
import { WrapperStyled, TitleStyled, ImageStyled } from './style';

const CommonPageTitle = ({ title, image }) => (
  <WrapperStyled>
    <ImageStyled src={image} alt={`logo-${title}`} />

    <TitleStyled>{title}</TitleStyled>
  </WrapperStyled>
);
export default CommonPageTitle;
