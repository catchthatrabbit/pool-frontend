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
  white-space: nowrap;
`;

const TableRowStyled = styled.tr`
  &:nth-child(even) {
    background-color: ${applyTransparence(0.2, colorVariables.gunPowder)}
  }
  th {
    ${cellStyling};
    padding: 1rem 15vw 1rem 2.9rem;
    min-width: 10vw;
    border-right: 1px solid ${({ theme }) => theme.colors.gunPowder};  
  }
  
  td {
    ${cellStyling};
    padding: 1rem 35vw 1rem 4rem;
    min-width: 40vw;
    padding-left: min(max(4vw, 0.5rem), 4rem);
  }
`;

export type InfoTableItem = {
  key: number,
  title: string,
  value: string,
  color: 'white' | 'apple' | 'red',
}

interface IProps {
  data: InfoTableItem[];
}

const InfoTable: FC<IProps> = ({ data }) => (
  <TableWrapperStyled>
    <tbody>
      {data.map(({ key, title, value, color }) => (
        <TableRowStyled key={key}>
          <th><Text italic>{title}</Text></th>
          <td><Text fontFamily='secondary' color={color}>{value}</Text></td>
        </TableRowStyled>
      ))}
    </tbody>
  </TableWrapperStyled>
);

export default InfoTable;
