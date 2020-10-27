import styled from 'styled-components';

const WrapperStyled = styled.div`
  padding: 1.4rem 0;
`;
const TitleWrapperStyled = styled.div`
  color: white;
  font-size: 0.7rem;
  border-bottom: 1px solid
    ${({ seperatorColor }) => (seperatorColor || '#424259')};
  padding: 1.2rem 0;
  color: ${({ titleColor }) => titleColor && '#46B549'};
  font-family: arial;
`;

export { WrapperStyled, TitleWrapperStyled };
