import Text, { TextColor } from 'atoms/Text/Text';
import ago from 'helpers/ago';
import currency from 'helpers/currency';
import epoch from 'helpers/epoch';
import numberFormat from 'helpers/numberFormat';
import ok from 'helpers/ok';
import { minWidth } from 'helpers/responsive';
import siFormat from 'helpers/siFormat';
import applyTransparence from 'helpers/transparentize';
import styled, { css } from 'styled-components';
import { colorVariables } from 'styles/variables';

export type InfoTableItem = {
  key: number
  title: string
  value: string
  color: TextColor
  type:
    | 'xcb'
    | 'number'
    | 'time'
    | 'epoch'
    | 'ago'
    | 'percentage'
    | 'hashrate'
    | 'status'
    | 'string'
}

export type WidthStyle = 'small' | 'large'

interface IMapButtonProps {
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

function formatPercentContent(value) {
  return `${value}%`
}

function formatHashContent(value) {
  return `${siFormat(value, 2)}h/s`
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
      (props.width === 'large' && '8px 5px 8px 27px') ||
      (props.width === 'small' && '16px 0 16px 47px')};
    ${(props: IPropsWidth) =>
      minWidth(
        'tablet',
        `
        padding: ${
          (props.width === 'large' && '16px 0 16px 47px') ||
          (props.width === 'small' && '16px 0 16px 47px')
        };
      `,
      )};
    border-right: 1px solid ${({ theme }) => theme.colors.gunPowder};
  }

  td {
    ${cellStyling};
    padding: ${(props: IPropsWidth) =>
      (props.width === 'large' && '8px 0 8px 22px') ||
      (props.width === 'small' && '16px 0 16px 45px')};
    ${(props: IPropsWidth) =>
      minWidth(
        'tablet',
        `
        padding: ${
          (props.width === 'large' && '16px 0 16px 64px') ||
          (props.width === 'small' && '16px 0 16px 45px')
        };
      `,
      )};
  }
`

const InfoTable = ({ data, width = 'small' }: IMapButtonProps) => (
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
              {type === 'percentage' && formatPercentContent(value)}
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
