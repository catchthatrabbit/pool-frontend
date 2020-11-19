import styled from 'styled-components';

const WrapperStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 3rem;
  padding: 2rem 1rem;
  border: 1px solid
    rgba(${({ theme }) => theme.colors.getRGBValue(theme.colors.spindle)}, 0.5);
  border-radius: 10px;
`;

const TableWrapperStyled = styled.div`
  overflow-x: auto;
`;

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const TableRowStyled = styled.tr`
  &:nth-child(even) {
    background-color: rgba(
      ${({ theme }) => theme.colors.getRGBValue(theme.colors.gunPowder)},
      0.2
    );
  }
  &:not(:only-child):hover {
    background-color: rgba(
      ${({ theme }) => theme.colors.getRGBValue(theme.colors.gunPowder)},
      0.5
    );
  }
`;

const TableHeadStyled = styled.th`
  box-sizing: border-box;
  min-width: 80vw;
  padding: 0 0 1.6rem 1rem;
  font-size: 0.8rem;
  text-align: left;
  white-space: nowrap;
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileS} {
    min-width: 40vw;
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
    min-width: 0;
  }
`;

const TableCellStyled = styled.td`
  box-sizing: border-box;
  min-width: 80vw;
  padding: 1rem 1rem;
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 0.59rem;
  font-weight: 600;
  white-space: nowrap;
  a {
    color: ${({ theme }) => theme.colors.apple};
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileS} {
    min-width: 40vw;
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
    min-width: 0;
  }
`;

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.3rem;
`;

export {
  WrapperStyled,
  TableWrapperStyled,
  TableStyled,
  TableRowStyled,
  TableHeadStyled,
  TableCellStyled,
  FooterStyled,
};
