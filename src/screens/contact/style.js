import styled from 'styled-components';

const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
`;

const TextStyled = styled.p`
  margin: 1rem 0 0;
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 0.583rem;
`;

const EmailBoxWrapperStyled = styled.div`
  margin: 2rem 0 0 0;
  align-self: center;
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileM} {
    align-self: flex-start;
  }
`;

export { BoxStyled, TextStyled, EmailBoxWrapperStyled };
