import { arrayOf, shape, string } from 'prop-types';
import styled, { css } from 'styled-components';
import React, { FC } from 'react';
import applyTransparence from 'helpers/transparentize';
import { colorVariables } from 'styles/variables';
import Text from 'atoms/Text/Text';

const TableWrapperStyled = styled.table`
  box-sizing: border-box;
  width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
  text-align: left;
`;

const cellStyling = css`
  box-sizing: border-box;
  padding: 1rem 0.5rem;
  white-space: nowrap;
`;

const TableRowStyled = styled.tr`
  &:nth-child(even) {
    background-color: ${applyTransparence(0.2, colorVariables.gunPowder)}
  }
  th {
    ${cellStyling};
    min-width: 10vw;
    border-right: 1px solid ${({ theme }) => theme.colors.gunPowder};  
  }
  
  td {
    ${cellStyling};
    min-width: 40vw;
    padding-left: min(max(3.75vw, 0.5rem), 3rem);
  }
`;

export type InfoTableItem = {
  key: number,
  title: string,
  value: string,
}

interface IProps {
  data: InfoTableItem[];
}

const InfoTable: FC<IProps> = ({ data }) => (
  <TableWrapperStyled>
    <tbody>
      {data.map(({ key, title, value }) => (
        <TableRowStyled key={key}>
          <th><Text size='very-large' italic>{title}</Text></th>
          <td><Text fontFamily='secondary'>{value}</Text></td>
        </TableRowStyled>
      ))}
    </tbody>
  </TableWrapperStyled>
);

export default InfoTable;
