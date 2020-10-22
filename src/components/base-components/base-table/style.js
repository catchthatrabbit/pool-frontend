import styled from 'styled-components';

const TableStyled = styled.table`
  width: 100%;
  max-width: 100%;
  overflow: auto;
  border: 1px solid #424259;
  font-size: 11px;
  border-spacing: 0;
`;
const TableRowStyled = styled.tr`
  &:nth-child(even) {
    background-color: rgb(66 66 89 / 0.2);
  }
`;
const TableCellStyled = styled.td`
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &:first-child {
    padding-left: 2rem;
  }
`;
const TableHeadStyled = styled.th`
  text-align: left;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 1.2em;
  &:first-child {
    padding-left: 2rem;
  }
  &:last-child {
    padding-right: 2rem;
  }
`;

const TableFooterStyled = styled.tfoot`
  border: 1px solid #424259;
  width: 100%;
`;

export {
  TableStyled,
  TableRowStyled,
  TableCellStyled,
  TableHeadStyled,
  TableFooterStyled,
};
