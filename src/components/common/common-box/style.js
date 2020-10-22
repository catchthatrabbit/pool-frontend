import styled from 'styled-components';

const WrapperStyled = styled.div`
  padding: 1.4rem;
  border: 1px solid #424259;
  border-radius: 8px;
`;
const TitleWrapperStyled = styled.div`
  color: white;
  font-size: 0.7rem;
  border-bottom: 1px solid #424259;
  padding: 1.2rem 0;
  color: ${({ titleColor }) => titleColor && '#46B549'};
  font-family: arial;
`;
const ContentWrapperStyled = styled.div`
  font-size: 0.4rem;
  padding: 1.1rem 0;
  ${({ twoColumn }) => !twoColumn && 'padding: 0'};
`;

export { WrapperStyled, TitleWrapperStyled, ContentWrapperStyled };
