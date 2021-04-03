import React, { FC } from 'react'
import styled from 'styled-components'
import applyTransparence from 'helpers/transparentize'
import { colorVariables } from 'styles/variables'
import Text from 'atoms/Text/Text'
import Button from 'atoms/Button/Button'
import Pagination from 'components/Pagination/Pagination'
import useGoToWallet from 'hooks/useGoToWallet'

const WrapperStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 84px 0;
  border: 1px solid ${applyTransparence(0.5, colorVariables.gunPowder)};
  border-radius: 10px;
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
      padding-left: 78px;
    }

    &:last-child {
      padding-right: 78px;
    }
  }
  th {
    padding: 0 0 1.6rem 1rem;
    text-align: left;
  }
  td {
    padding: 26px 16px 21px;
  }
`

const TextStyled = styled(Text)<{ column: Column }>`
  ${({ column: { type } }) => type === 'address' && `cursor: pointer`}
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
  type: 'address' | 'string'
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
  return `${value.slice(0, 10)}.........${value.slice(-6)}`
}

const Table: FC<IProps> = ({ data, columns, moreLink }) => {
  const goToWallet = useGoToWallet()

  const handleDataClick = (value: string, column: Column) => {
    if (column.type === 'address') goToWallet(value)
  }

  return (
    <WrapperStyled>
      <TableWrapperStyled>
        <TableStyled>
          <thead>
            <TableRowStyled>
              {columns.map(({ id, name }) => (
                <th key={id}>
                  <Text size="very-large" fontWeight="bold" italic>
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
                        color={type === 'address' ? 'apple' : 'white'}
                        column={column}
                        onClick={() => handleDataClick(dataItem[id], column)}
                      >
                        {type === 'address' && hideMiddleContent(dataItem[id])}
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
