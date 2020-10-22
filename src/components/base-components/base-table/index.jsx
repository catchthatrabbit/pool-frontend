/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import BasePagination from '../base-pagination';
import {
  TableStyled,
  TableRowStyled,
  TableHeadStyled,
  TableCellStyled,
  TableFooterStyled,
} from './style';

/* eslint-disable no-unused-vars */
const BaseTable = ({ data }) => {
  console.log(data);
  return (
    <TableStyled cellpadding="10">
      <thead>
        <TableRowStyled>
          <TableHeadStyled>Company</TableHeadStyled>
          <TableHeadStyled>Contact</TableHeadStyled>
          <TableHeadStyled>CounTableRowStyledy</TableHeadStyled>
        </TableRowStyled>
      </thead>
      <tbody>
        <TableRowStyled>
          <TableCellStyled>Alfreds Futterkiste</TableCellStyled>
          <TableCellStyled>Maria Anders</TableCellStyled>
          <TableCellStyled>Germany</TableCellStyled>
        </TableRowStyled>
        <TableRowStyled>
          <TableCellStyled>
            CenTableRowStyledo comercial Moctezuma
          </TableCellStyled>
          <TableCellStyled>Francisco Chang</TableCellStyled>
          <TableCellStyled>Mexico</TableCellStyled>
        </TableRowStyled>
        <TableRowStyled>
          <TableCellStyled>Ernst Handel</TableCellStyled>
          <TableCellStyled>Roland Mendel</TableCellStyled>
          <TableCellStyled>AusTableRowStyledia</TableCellStyled>
        </TableRowStyled>
        <TableRowStyled>
          <TableCellStyled>Island TableRowStyledading</TableCellStyled>
          <TableCellStyled>Helen Bennett</TableCellStyled>
          <TableCellStyled>UK</TableCellStyled>
        </TableRowStyled>
        <TableRowStyled>
          <TableCellStyled>Laughing Bacchus Winecellars</TableCellStyled>
          <TableCellStyled>Yoshi Tannamuri</TableCellStyled>
          <TableCellStyled>Canada</TableCellStyled>
        </TableRowStyled>
        <TableRowStyled>
          <TableCellStyled>Magazzini Alimentari Riuniti</TableCellStyled>
          <TableCellStyled>Giovanni Rovelli</TableCellStyled>
          <TableCellStyled>Italy</TableCellStyled>
        </TableRowStyled>
      </tbody>
      <TableFooterStyled>
        <tr>
          <td colSpan="5">
            {' '}
            <BasePagination />
          </td>
        </tr>
      </TableFooterStyled>
    </TableStyled>
  );
};

export default BaseTable;
