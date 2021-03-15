import React, { FC } from 'react'
import styled from 'styled-components'
import applyTransparence from 'helpers/transparentize'
import { colorVariables } from 'styles/variables'
import Text from 'atoms/Text/Text'
import Button from 'atoms/Button/Button'
import Pagination from 'components/Pagination/Pagination'

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
    min-width: 80vw;

    @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileS} {
      min-width: 40vw;
    }
    @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
      min-width: 0;
    }

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

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;
const StyledPaginationContainer = styled.div`
  margin-top: 36px;
`;

type Column = {
  name: string,
  id: string,
  color: 'white' | 'apple',
  hideMiddle: boolean
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
  return `${value.slice(0, 10)}.........${value.slice(-6)}`;
}

const Table: FC<IProps> = ({ data, columns, moreLink }) => {
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
              {columns.map(({ id, color = 'white', hideMiddle = false }) => (
                <td key={id}>
                  <Text
                    fontFamily="secondary"
                    size="medium"
                    fontWeight="bold"
                    color={color}
                  >
                    {hideMiddle && hideMiddleContent(dataItem[id])}
                    {!hideMiddle && dataItem[id]}
                  </Text>
                </td>
              ))}
            </TableRowStyled>
          ))}
          </tbody>
        </TableStyled>
      </TableWrapperStyled>
      <FooterStyled>
        {
          moreLink && (
              <Button href={moreLink.href}>
                {moreLink.text}
              </Button>
          )
        }
        {
          !moreLink && (
          <StyledPaginationContainer>
            <Pagination onPageChange={() => null} pageCount={4} />
          </StyledPaginationContainer>
          )
        }
      </FooterStyled>
    </WrapperStyled>
  )
}

export default Table
