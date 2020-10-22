/* eslint-disable quotes */
import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const PrevBtnStyled = styled.div`
  color: #717198;
  padding: 16px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    color: white;
  }
`;
const NextBtnStyled = styled.div`
  color: #717198;
  padding: 16px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    color: white;
  }
`;
const SepratorStyled = styled.div`
  margin: 0 32px;
  width: 1px;
  height: 30px;
  background-color: #424259;
`;

const PageStyled = styled.div`
  color: #717198;
  padding: 16px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    color: white;
  }
  ${({ active }) =>
    active
    && `border: 1px solid #424259; background-color: rgba(66,66,89,0.25); color: white; border-radius: 8px`}
`;

export {
  WrapperStyled,
  PrevBtnStyled,
  NextBtnStyled,
  SepratorStyled,
  PageStyled,
};
