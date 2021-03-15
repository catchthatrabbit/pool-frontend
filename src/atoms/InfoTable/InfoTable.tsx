import styled, { css } from 'styled-components'
import React, { FC } from 'react'
import applyTransparence from 'helpers/transparentize'
import { colorVariables } from 'styles/variables'
import Text, { TextColor } from 'atoms/Text/Text'

export type InfoTableItem = {
  key: number
  title: string
  value: string
  color: TextColor
}

export type WidthStyle = 'small' | 'large'

interface IProps {
  data: InfoTableItem[]
  width: WidthStyle
}
interface IPropsWidth {
  width: WidthStyle
}

const TableWrapperStyled = styled.table`
  box-sizing: border-box;
  width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
  text-align: left;
`

const cellStyling = css`
  box-sizing: border-box;
  white-space: nowrap;
`

const TableRowStyled = styled.tr<IPropsWidth>`
  &:nth-child(even) {
    background-color: ${applyTransparence(0.2, colorVariables.gunPowder)};
  }
  th {
    ${cellStyling};
    padding: ${(props: IPropsWidth) =>
      (props.width === 'large' && '16px 239px 16px 47px') ||
      (props.width === 'small' && '16px 43px 16px 47px')};
    border-right: 1px solid ${({ theme }) => theme.colors.gunPowder};
  }

  td {
    ${cellStyling};
    padding: ${(props: IPropsWidth) =>
      (props.width === 'large' && '16px 697px 16px 64px') ||
      (props.width === 'small' && '16px 251px 16px 45px')};
  }
`

const InfoTable: FC<IProps> = ({ data, width = 'small' }) => (
  <TableWrapperStyled>
    <tbody>
      {data.map(({ key, title, value, color }) => (
        <TableRowStyled key={key} width={width}>
          <th>
            <Text italic>{title}</Text>
          </th>
          <td>
            <Text fontFamily="secondary" color={color}>
              {value}
            </Text>
          </td>
        </TableRowStyled>
      ))}
    </tbody>
  </TableWrapperStyled>
)

export default InfoTable
