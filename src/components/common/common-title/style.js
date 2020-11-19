import styled from 'styled-components';

const TitleWrapperStyled = styled.div`
  color: ${({ theme, color }) =>
    (color === 'white' ? theme.colors.white : theme.colors.apple)};
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gunPowder};
  font-size: ${({ size }) => (size === 'medium' ? '0.75rem' : '1rem')};
`;

export { TitleWrapperStyled };
