import styled, { css } from 'styled-components'
import React, { FC } from 'react'
import applyTransparence from 'helpers/transparentize'
import { colorVariables } from 'styles/variables'
import Text, { TextColor } from 'atoms/Text/Text'
import siFormat from 'helpers/siFormat'
import ago from 'helpers/ago'
import ok from 'helpers/ok'
import currency from 'helpers/currency'
import numberFormat from 'helpers/numberFormat'
import epoch from 'helpers/epoch'

export type InfoTableItem = {
  key: number
  title: string
  value: string
  color: TextColor
  type: 'xcb' | 'number' | 'time' | 'epoch' | 'ago' | 'percentage' | 'hashrate' | 'status' | 'string'
}

export type WidthStyle = 'small' | 'large'

interface IProps {
  data: InfoTableItem[]
  width: WidthStyle
}
interface IPropsWidth {
  width: WidthStyle
}

function formatRewardContent(value) {
  return currency(value)
}

function formatNumberContent(value) {
  return numberFormat(value)
}

function formatEpochContent(value) {
  return epoch(value)
}

function formatTimeContent(value) {
  const d = new Date(value)
  return d.toLocaleString()
}

function formatAgoContent(value) {
  return ago(value)
}

function formatPerctContent(value) {
  return `${value}%`
}

function formatHashContent(value) {
  return `${siFormat(value,2)}h/s`
}

function formatStatusContent(value) {
  return ok(value)
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
      (props.width === 'large' && '16px 0 16px 47px') ||
      (props.width === 'small' && '16px 0 16px 47px')};
    border-right: 1px solid ${({ theme }) => theme.colors.gunPowder};
  }

  td {
    ${cellStyling};
    padding: ${(props: IPropsWidth) =>
      (props.width === 'large' && '16px 0 16px 64px') ||
      (props.width === 'small' && '16px 0 16px 45px')};
  }
`

const InfoTable: FC<IProps> = ({ data, width = 'small' }) => (
  <TableWrapperStyled>
    <tbody>
      {data.map(({ key, title, value, color, type = 'string' }) => (
        <TableRowStyled key={key} width={width}>
          <th>
            <Text>{title}</Text>
          </th>
          <td>
            <Text fontFamily="secondary" fontWeight="normal" color={color}>
              {type === 'xcb' && formatRewardContent(value)}
              {type === 'number' && formatNumberContent(value)}
              {type === 'time' && formatTimeContent(value)}
              {type === 'epoch' && formatEpochContent(value)}
              {type === 'ago' && formatAgoContent(value)}
              {type === 'percentage' && formatPerctContent(value)}
              {type === 'hashrate' && formatHashContent(value)}
              {type === 'status' && formatStatusContent(value)}
              {type === 'string' && value}
            </Text>
          </td>
        </TableRowStyled>
      ))}
    </tbody>
  </TableWrapperStyled>
)

export default InfoTable
