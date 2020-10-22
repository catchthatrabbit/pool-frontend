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
const BaseTable = ({ data, twoColumn }) => {
  const handlePage = (page) => console.log(page);
  return (
    <TableStyled cellpadding="10" twoColumn>
      {twoColumn ? (
        <>
          <tbody>
            <TableRowStyled twoColumn>
              <TableCellStyled twoColumn>Server</TableCellStyled>
              <TableCellStyled twoColumn>eu.ctrpool.io</TableCellStyled>
            </TableRowStyled>
            <TableRowStyled twoColumn>
              <TableCellStyled twoColumn>Port</TableCellStyled>
              <TableCellStyled twoColumn>4444</TableCellStyled>
            </TableRowStyled>
            <TableRowStyled twoColumn>
              <TableCellStyled twoColumn>Secure(SSL) port</TableCellStyled>
              <TableCellStyled twoColumn>5555</TableCellStyled>
            </TableRowStyled>
            <TableRowStyled twoColumn>
              <TableCellStyled twoColumn>Username</TableCellStyled>
              <TableCellStyled twoColumn>
                {'<your Core Coin Address>.<Worker Name>'}
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled twoColumn>
              <TableCellStyled twoColumn>Password</TableCellStyled>
              <TableCellStyled twoColumn>{'<empty>'}</TableCellStyled>
            </TableRowStyled>
          </tbody>
        </>
      ) : (
        <>
          <thead>
            <TableRowStyled>
              <TableHeadStyled>Time</TableHeadStyled>
              <TableHeadStyled>Amount</TableHeadStyled>
              <TableHeadStyled>Address</TableHeadStyled>
              <TableHeadStyled>Tx ID</TableHeadStyled>
            </TableRowStyled>
          </thead>
          <tbody>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>
              <TableCellStyled active>
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                {' '}
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                {' '}
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                {' '}
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                {' '}
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                {' '}
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                {' '}
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                {' '}
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                {' '}
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
            <TableRowStyled>
              <TableCellStyled>8/9/2020, 2:43:09 PM</TableCellStyled>
              <TableCellStyled>0.223</TableCellStyled>

              <TableCellStyled active>
                {' '}
                CBd27e990fe5167a37bb4a4ebd10233ea71ec83603
              </TableCellStyled>
              <TableCellStyled>
                a6538e82b7e510bb2c9ab58b…aa7fb6283691c6e5842a1a86
              </TableCellStyled>
            </TableRowStyled>
          </tbody>
        </>
      )}
      {!twoColumn && (
        <TableFooterStyled>
          <tr>
            <td colSpan="5">
              {' '}
              <BasePagination onChange={(page) => handlePage(page)} />
            </td>
          </tr>
        </TableFooterStyled>
      )}
    </TableStyled>
  );
};

export default BaseTable;
