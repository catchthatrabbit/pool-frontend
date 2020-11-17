import { arrayOf, shape, string } from 'prop-types';
import {
  TableWrapperStyled,
  TableStyled,
  TableRowStyled,
  TableHeadStyled,
  TableDataStyled,
} from './style';

const CommonInfoTable = ({ data }) => (
  <TableWrapperStyled>
    <TableStyled>
      <tbody>
        {data.map(({ key, title, value }) => (
          <TableRowStyled key={key}>
            <TableHeadStyled>{title}</TableHeadStyled>
            <TableDataStyled>{value}</TableDataStyled>
          </TableRowStyled>
        ))}
      </tbody>
    </TableStyled>
  </TableWrapperStyled>
);

CommonInfoTable.propTypes = {
  data: arrayOf(shape({ key: string, title: string, value: string })),
};

CommonInfoTable.defaultProps = {
  data: [
    { key: '1', title: 'server', value: 'eu.ctrpool.io' },
    { key: '2', title: 'port', value: '4444' },
    { key: '3', title: 'secure (ssl) port', value: '5555' },
    {
      key: '4',
      title: 'Username',
      value: '<your Core Coin Address>.<Worker Name>',
    },
    { key: '5', title: 'Password', value: '<empty>' },
  ],
};

export default CommonInfoTable;
