/* eslint-disable react/prop-types */
import { WrapperStyled, ContentWrapperStyled } from './style';

const CommonEmailBox = ({ children }) => (
  <WrapperStyled>
    <ContentWrapperStyled>{children}</ContentWrapperStyled>
  </WrapperStyled>
);

export default CommonEmailBox;
