import styled from 'styled-components';

const WrapperStyled = styled.div`
  position: relative;
  font-family: arial;

`;
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  &:nth-child(odd) {
    background-color: rgb(66 66 89 / 0.2);
  }
`;
const StyledTitle = styled.div`
  flex: 0.3;
  padding-right: 3%;
  font-style: italic;

`;
const StyledValue = styled.div``;

const StyledSeperator = styled.div`
  position: absolute;
  width: 2px;
  background-color: #424259;
  top: 2%;
  bottom: 2%;
  left: 26%;
`;

export { WrapperStyled, StyledRow, StyledTitle, StyledValue, StyledSeperator };
