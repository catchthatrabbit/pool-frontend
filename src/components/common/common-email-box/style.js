import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: inline-block;
  padding: 1rem 0.5rem;
  font-size: min(max(3vw, 0.35rem), 0.75rem);
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  background-color: rgba(
    ${({ theme }) => theme.colors.getRGBValue(theme.colors.gunPowder)},
    0.2
  );
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
    padding: 1.4rem 1rem;
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
    padding: 1.4rem 3rem;
  }
`;

export { WrapperStyled };
