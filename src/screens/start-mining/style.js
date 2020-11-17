import styled from 'styled-components';

const TableInfoStyled = styled.div`
  margin: 16px 0;
`;

const TextStyled = styled.p`
  margin: 1rem 0;
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 0.583rem;
  a {
    color: ${({ theme }) => theme.colors.apple};
  }
`;

const MinerCardsWrapperStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  margin: 2rem 0;
`;

const LinksWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
  a {
    margin: 0.5rem 0;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.apple};
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    margin: 3rem 0;
  }
`;

export {
  TableInfoStyled,
  TextStyled,
  MinerCardsWrapperStyled,
  LinksWrapperStyled,
};
