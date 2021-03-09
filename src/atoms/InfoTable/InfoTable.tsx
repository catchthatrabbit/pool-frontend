import styled, { css } from 'styled-components';
import React, { FC } from 'react';
import applyTransparence from 'helpers/transparentize';
import { colorVariables } from 'styles/variables';
import Text from 'atoms/Text/Text';

export type InfoTableItem = {
  key: number,
  title: string,
  value: string,
  color: 'white' | 'apple' | 'red',
}

interface IProps {
  data: InfoTableItem[];
  width: 'small' | 'large';
}

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

const TableRowStyled = styled.tr < IProps > `
  &:nth-child(even) {
    background-color: ${applyTransparence(0.2, colorVariables.gunPowder)}
  }
  th {
    ${cellStyling};
    padding: ${(props) =>
    props.width === 'large' && '1rem 134px 1rem 47px' ||
    props.width === 'small' && '1rem 239px 1rem 47px'
    };
    min-width: 10vw;
    border-right: 1px solid ${({ theme }) => theme.colors.gunPowder};  
  }
  
  td {
    ${cellStyling};
    padding: ${(props) =>
    props.width === 'large' && '1rem 764px 1rem 65px' ||
    props.width === 'small' && '1rem 251px 1rem 45px'
    };
    min-width: 40vw;
    padding-left: min(max(4vw, 0.5rem), 4rem);
  }
`;

const InfoTable: FC<IProps> = ({ data, width }) => (
  <TableWrapperStyled>
    <tbody>
      {data.map(({ key, title, value, color }) => (
        <TableRowStyled key={key} width={width}>
          <th><Text italic>{title}</Text></th>
          <td><Text fontFamily='secondary' color={color}>{value}</Text></td>
        </TableRowStyled>
      ))}
    </tbody>
  </TableWrapperStyled>
);

export default InfoTable;
