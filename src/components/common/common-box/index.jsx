/* eslint-disable react/prop-types */
import {
  WrapperStyled,
  TitleWrapperStyled,
  ContentWrapperStyled,
} from './style';

const CommonBox = ({ title, content, titleColor, twoColumn }) => (
  <WrapperStyled>
    <TitleWrapperStyled titleColor={titleColor}>{title}</TitleWrapperStyled>
    <ContentWrapperStyled twoColumn={twoColumn}>{content}</ContentWrapperStyled>
  </WrapperStyled>
);

export default CommonBox;
