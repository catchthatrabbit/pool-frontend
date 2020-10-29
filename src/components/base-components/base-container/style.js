import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 0 ${({ theme, paddings }) => {
    return theme.dimensions[paddings] || '16px';
  }};
   
  ${({ width }) => width && `width: ${width};`}
  @media screen and ${({ theme }) =>
    theme.mediaQueriesMaxWidth.tablet} {
width: 100%;
padding: 0 16px;
}
`;

export { StyledContainer };
