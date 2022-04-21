import NoData from '@components/NoData';
import Button from 'atoms/Button/Button';
import Text from 'atoms/Text/Text';
import Pagination from 'components/Pagination/Pagination';
import ago from 'helpers/ago';
import currency from 'helpers/currency';
import numberFormat from 'helpers/numberFormat';
import ok from 'helpers/ok';
import { minWidth } from 'helpers/responsive';
import siFormat from 'helpers/siFormat';
import applyTransparence from 'helpers/transparentize';
import useGoToBlock from 'hooks/useGoToBlock';
import useGoToTx from 'hooks/useGoToTx';
import useGoToWallet from 'hooks/useGoToWallet';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { colorVariables } from 'styles/variables';

import type { FC } from 'react'

const WrapperStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${applyTransparence(0.5, colorVariables.gunPowder)};
  border-radius: 10px;
  padding: 24px 0;
  ${minWidth(
    'tablet',
    css`
      padding: 34px 0;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      padding: 54px 0;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      padding: 84px 0;
    `,
  )}
`

const TableWrapperStyled = styled.div`
  overflow-x: auto;
`

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`

const TableRowStyled = styled.tr`
  &:nth-child(even) {
    background-color: ${applyTransparence(0.2, colorVariables.gunPowder)};
  }
  &:not(:only-child):hover {
    background-color: ${applyTransparence(0.5, colorVariables.gunPowder)};
  }
  th,
  td {
    box-sizing: border-box;
    &:first-child {
      padding-left: 10px;
    }
    &:last-child {
      padding-right: 10px;
    }
  }
  th {
    padding: 0 0 8px 8px;
    text-align: left;
  }
  td {
    padding: 26px 16px 21px;
  }
  ${minWidth(
    'laptop',
    css`
      th,
      td {
        &:first-child {
          padding-left: 38px;
        }
        &:last-child {
          padding-right: 38px;
        }
      }
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      th,
      td {
        &:first-child {
          padding-left: 78px;
        }
        &:last-child {
          padding-right: 78px;
        }
      }
    `,
  )}
`

const TextStyled = styled(Text)<{ column: Column }>`
  ${({ column: { type } }) => type === 'address' && `cursor: pointer`}
  ${({ column: { type } }) => type === 'block' && `cursor: pointer`}
  ${({ column: { type } }) => type === 'tx' && `cursor: pointer`}
`
const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`
const PaginationContainerStyled = styled.div`
  margin-top: 36px;
`

export type Column = {
  name: string
  id: string
  type: 'address' | 'block' | 'tx' | 'xcb' | 'number' | 'time' | 'ago' | 'percentage' | 'hashrate' | 'status' | 'string'
}

type DataItem = { [key: string]: string }

interface ITableProps {
  data: DataItem[]
  columns: Column[]
  page: number
  pages: number
  onPageChange: (page: number) => void
  moreLink?: {
    text: string
    href: string
  }
}

function hideMiddleContent(value) {
  if(value?.length > 16) {
    return `${value.slice(0, 10)}…${value.slice(-6)}`
  } else {
    return value
  }
}

function formatRewardContent(value) {
  return currency(value)
}

function formatNumberContent(value) {
  return numberFormat(value)
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
  return `${siFormat(value,2)}h/s`
}

function formatStatusContent(value) {
  return ok(value)
}

const Table: FC<ITableProps> = ({ data, columns, page, pages, onPageChange, moreLink }) => {

  const goToMapper = useRef({
    address: useGoToWallet(),
    block: useGoToBlock(),
    tx: useGoToTx(),
  })

  if (!data?.length) {
    return (
      <WrapperStyled>
        <NoData hint='please Try another pool' />
      </WrapperStyled>
    )
  }

  return (
    <WrapperStyled>
      <TableWrapperStyled>
        <TableStyled>
          <thead>
            <TableRowStyled>
              { columns.map(({ id, name }) => (
                <th key={ id }>
                  <Text size="very-large" fontWeight="bold">
                    { name }
                  </Text>
                </th>
              )) }
            </TableRowStyled>
          </thead>

          <tbody>
            { data.map((item, index) => (
              <TableRow
                key={ index }
                item={ item }
                columns={ columns }
                goToMapper={ goToMapper.current }
              />
            )) }

          </tbody>
        </TableStyled>
      </TableWrapperStyled>

      <FooterStyled>
        { moreLink && <Button href={ moreLink.href }>{ moreLink.text }</Button> }
        { pages && (
          <PaginationContainerStyled>
            <Pagination
              onPageChange={onPageChange}
              pageCount={ pages }
              forcePage={ page - 1 }
            />
          </PaginationContainerStyled>
        ) }
      </FooterStyled>
    </WrapperStyled>
  )
}

const TableRow = ({ item, columns, goToMapper }: { item: any, columns: Column[], goToMapper: any }) => (
  <TableRowStyled>
    { columns.map((column) => {
      const { id, type = 'string' } = column

      return (
        <td key={ id }>
          <TextStyled
            fontFamily="secondary"
            size="medium"
            fontWeight="normal"
            color={ (type === 'address' || type === 'block' || type === 'tx') ? 'apple' : 'white' }
            column={ column }
            onClick={ () => goToMapper[ column.type ]?.(item[ id ]) }
          >
            { type === 'address' && hideMiddleContent(item[ id ]) }
            { type === 'block' && hideMiddleContent(item[ id ]) }
            { type === 'tx' && hideMiddleContent(item[ id ]) }
            { type === 'xcb' && formatRewardContent(item[ id ]) }
            { type === 'number' && formatNumberContent(item[ id ]) }
            { type === 'time' && formatTimeContent(item[ id ]) }
            { type === 'ago' && formatAgoContent(item[ id ]) }
            { type === 'percentage' && formatPercentContent(item[ id ]) }
            { type === 'hashrate' && formatHashContent(item[ id ]) }
            { type === 'status' && formatStatusContent(item[ id ]) }
            { type === 'string' && item[ id ] }
          </TextStyled>
        </td>
      )
    }) }
  </TableRowStyled>
)

export default Table
