import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import applyTransparence from 'helpers/transparentize'
import { colorVariables } from 'styles/variables'
import Text from 'atoms/Text/Text'
import Button from 'atoms/Button/Button'
import Pagination from 'components/Pagination/Pagination'
import useGoToBlock from 'hooks/useGoToBlock'
import useGoToTx from 'hooks/useGoToTx'
import useGoToWallet from 'hooks/useGoToWallet'
import { minWidth } from 'helpers/responsive'
import siFormat from 'helpers/siFormat'

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

type Column = {
  name: string
  id: string
  type: 'address' | 'block' | 'tx' | 'xcb' | 'time' | 'percentage' | 'hashrate' | 'string'
}

type DataItem = { [key: string]: string }

interface IProps {
  data: DataItem[]
  columns: Column[]
  moreLink: {
    text: string
    href: string
  }
}

function hideMiddleContent(value) {
  if(value.length > 16) {
    return `${value.slice(0, 10)}…${value.slice(-6)}`
  } else {
    return value
  }
}

function formatRewardContent(value) {
  return `₡${value} XCB`
}

function formatTimeContent(value) {
  const d = new Date(value)
  return d.toLocaleString()
}

function formatPerctContent(value) {
  return `${value}%`
}

function formatHashContent(value) {
  return siFormat(value,2)
}

const Table: FC<IProps> = ({ data, columns, moreLink }) => {
  const goToWallet = useGoToWallet()
  const goToBlock = useGoToBlock()
  const goToTx = useGoToTx()

  const handleDataClick = (value: string, column: Column) => {
    if (column.type === 'address') {
      goToWallet(value)
    } else if(column.type === 'block') {
      goToBlock(value)
    } else if(column.type === 'tx') {
      goToTx(value)
    }
  }

  return (
    <WrapperStyled>
      <TableWrapperStyled>
        <TableStyled>
          <thead>
            <TableRowStyled>
              {columns.map(({ id, name }) => (
                <th key={id}>
                  <Text size="very-large" fontWeight="bold">
                    {name}
                  </Text>
                </th>
              ))}
            </TableRowStyled>
          </thead>
          <tbody>
            {data.map((dataItem, index) => (
              <TableRowStyled key={index}>
                {columns.map((column) => {
                  const { id, type = 'string' } = column

                  return (
                    <td key={id}>
                      <TextStyled
                        fontFamily="secondary"
                        size="medium"
                        fontWeight="bold"
                        color={(type === 'address' || type === 'block' || type === 'tx') ? 'apple' : 'white'}
                        column={column}
                        onClick={() => handleDataClick(dataItem[id], column)}
                      >
                        {type === 'address' && hideMiddleContent(dataItem[id])}
                        {type === 'block' && hideMiddleContent(dataItem[id])}
                        {type === 'tx' && hideMiddleContent(dataItem[id])}
                        {type === 'xcb' && formatRewardContent(dataItem[id])}
                        {type === 'time' && formatTimeContent(dataItem[id])}
                        {type === 'percentage' && formatPerctContent(dataItem[id])}
                        {type === 'hashrate' && formatHashContent(dataItem[id])}
                        {type === 'string' && dataItem[id]}
                      </TextStyled>
                    </td>
                  )
                })}
              </TableRowStyled>
            ))}
          </tbody>
        </TableStyled>
      </TableWrapperStyled>
      <FooterStyled>
        {moreLink && <Button href={moreLink.href}>{moreLink.text}</Button>}
        {!moreLink && (
          <PaginationContainerStyled>
            <Pagination onPageChange={() => null} pageCount={4} />
          </PaginationContainerStyled>
        )}
      </FooterStyled>
    </WrapperStyled>
  )
}

export default Table
