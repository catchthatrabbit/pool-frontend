/* eslint-disable react/prop-types */
import {
  WrapperStyled,
  TitleWrapperStyled,
  ContentWrapperStyled,
} from './style';

const CommonBox = ({ title, content }) => (
  <WrapperStyled>
    <TitleWrapperStyled>{title}</TitleWrapperStyled>
    <ContentWrapperStyled>{content}</ContentWrapperStyled>
  </WrapperStyled>
);

export default CommonBox;
