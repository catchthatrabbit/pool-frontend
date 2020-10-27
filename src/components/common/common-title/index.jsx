/* eslint-disable react/prop-types */
import { WrapperStyled, TitleWrapperStyled } from './style';

const CommonTitle = ({ children, titleColor, seperatorColor }) => (
  <WrapperStyled>
    <TitleWrapperStyled titleColor={titleColor} seperatorColor={seperatorColor}>
      {children}
    </TitleWrapperStyled>
  </WrapperStyled>
);

export default CommonTitle;
