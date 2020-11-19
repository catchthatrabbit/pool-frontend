import styled, { css } from 'styled-components';

const TableWrapperStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  overflow-x: auto;
`;

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRowStyled = styled.tr`
  &:nth-child(even) {
    background-color: rgba(
      ${({ theme }) => theme.colors.getRGBValue(theme.colors.gunPowder)},
      0.2
    );
  }
`;

const cellStyling = css`
  box-sizing: border-box;
  padding: 1rem 0.5rem;
  font-size: min(max(1.5vw, 0.45rem), 0.75rem);
  text-align: left;
  font-weight: 400;
  white-space: nowrap;
  // @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
  //   font-size: 0.75rem;
  // }
`;

const TableHeadStyled = styled.th`
  ${cellStyling}
  min-width: 10vw;
  border-right: 1px solid ${({ theme }) => theme.colors.gunPowder};
`;

const TableDataStyled = styled.td`
  ${cellStyling}
  min-width: 40vw;
  padding-left: min(max(3.75vw, 0.5rem), 3rem);
  font-family: ${({ theme }) => theme.typography.secondary};
`;

export {
  TableWrapperStyled,
  TableStyled,
  TableRowStyled,
  TableHeadStyled,
  TableDataStyled,
};
