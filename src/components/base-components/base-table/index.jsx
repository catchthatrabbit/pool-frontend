/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */

import { memo, useState } from 'react';
import {
  TableStyled,
  TableRowStyled,
  TableHeadStyled,
  TableCellStyled,
  TableFooterStyled,
} from './style';

/* eslint-disable no-unused-vars */
const BaseTable = memo(({ data, footer, hightLightColIds }) => {
  const mockTableData = {
    head: [
      { key: 'time', value: 'Time' },
      { key: 'amount', value: 'Amount' },
      { key: 'address', value: 'Address' },
      { key: 'txId', value: 'Tx ID' },
    ],
    body: [
      [
        { key: 'time', value: '8/9/2020, 2:43:09 PM' },
        { key: 'amount', value: '0.223' },
        { key: 'address', value: 'CBd27e990fe5167a37bb4a4ebd10233ea71ec83603' },
        {
          key: 'txId',
          value: ' a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86',
        },
      ],
      [
        { key: 'time', value: '8/9/2020, 2:43:09 PM' },
        { key: 'amount', value: '0.223' },
        { key: 'address', value: 'CBd27e990fe5167a37bb4a4ebd10233ea71ec83603' },
        {
          key: 'txId',
          value: ' a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86',
        },
      ],
      [
        { key: 'time', value: '8/9/2020, 2:43:09 PM' },
        { key: 'amount', value: '0.223' },
        { key: 'address', value: 'CBd27e990fe5167a37bb4a4ebd10233ea71ec83603' },
        {
          key: 'txId',
          value: ' a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86',
        },
      ],
      [
        { key: 'time', value: '8/9/2020, 2:43:09 PM' },
        { key: 'amount', value: '0.223' },
        { key: 'address', value: 'CBd27e990fe5167a37bb4a4ebd10233ea71ec83603' },
        {
          key: 'txId',
          value: ' a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86',
        },
      ],
      [
        { key: 'time', value: '8/9/2020, 2:43:09 PM' },
        { key: 'amount', value: '0.223' },
        { key: 'address', value: 'CBd27e990fe5167a37bb4a4ebd10233ea71ec83603' },
        {
          key: 'txId',
          value: ' a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86',
        },
      ],
    ],
    footer: null,
  };
  const [tableData, setTableData] = useState(data || mockTableData);

  return (
    <TableStyled cellpadding="10">
      <thead>
        <TableRowStyled>
          {tableData.head.map((tableItem) => {
            return (
              <TableHeadStyled key={tableItem.key}>
                {tableItem.value}
              </TableHeadStyled>
            );
          })}
        </TableRowStyled>
      </thead>

      <tbody>
        {tableData.body.map((tableRow) => {
          return (
            <TableRowStyled>
              {tableRow.map((tableCell) => {
                return (
                  <TableCellStyled
                    key={tableCell.key}
                    hightLight={hightLightColIds && hightLightColIds.includes(tableCell.key)}
                  >
                    {tableCell.value}
                  </TableCellStyled>
                );
              })}
            </TableRowStyled>
          );
        })}
      </tbody>
      {footer && (
        <TableFooterStyled>
          <td colSpan="6" style={{ width: '100%' }}>
            {footer}
          </td>
        </TableFooterStyled>
      )}
    </TableStyled>
  );
});

export default BaseTable;
