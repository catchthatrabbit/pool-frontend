/* eslint-disable quotes */
import styled, { createGlobalStyle } from 'styled-components';

const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PrevNextBtnStyled = styled.div`
  color: #717198;
  padding: 8px;
  padding-right: 32px;
  cursor: pointer;
`;

const SepratorStyled = styled.div`
  margin: 0 16px;
  width: 1px;
  height: 30px;
  background-color: #424259;
`;

const GlobalStyle = createGlobalStyle`
ul.pagination {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    cursor: pointer;
    a {
      padding: 12px;
      &:focus {
        border: none;
        outline: none;
      }
    }
    &.active {
      padding: 0;
      a {
        border: 1px solid #424259;
        background-color: rgba(66,66,89,0.25);
         color: white; 
         border-radius: 8px;
         padding: 12px;
      }
     
    }
  }
}
`;

export default GlobalStyle;

export { WrapperStyled, PrevNextBtnStyled, SepratorStyled };
