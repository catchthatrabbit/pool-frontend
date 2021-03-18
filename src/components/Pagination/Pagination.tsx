import ReactPaginate from 'react-paginate'
import React, { FC } from 'react'
import styled from 'styled-components'
import { colorVariables, fonts } from 'styles/variables'
import applyTransparence from 'helpers/transparentize'

const PaginationContainer = styled.div`
  ul.pagination {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    color: ${colorVariables.kimberly};
    li {
      margin: 0 20px;
      &.active {
        a {
          padding: 10px 12px;
          color: ${colorVariables.white};
          background-color: ${applyTransparence(
            0.25,
            colorVariables.gunPowder,
          )};
          border: 1px solid ${colorVariables.gunPowder};
          border-radius: 10px;
        }
      }
      &.break-me {
        pointer-events: none;
        a {
          padding: 0;
        }
      }
      &.previous {
        margin: 0 50px;
      }
      &.next {
        margin-left: 37px;
        padding: 14px 50px;
        line-height: 19px;
        border-left: 1px solid ${colorVariables.gunPowder};
      }
      &.previous.disabled,
      &.next.disabled {
        display: none;
      }
      a {
        font-family: ${fonts.primary};
        font-size: 14px;
        cursor: pointer;
        user-select: none;
        &:hover {
          color: ${colorVariables.white};
          transition: color 0.3s;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
`

interface IProps {
  onPageChange: (page: number) => void
  pageCount: number
}

const Pagination: FC<IProps> = ({ onPageChange, pageCount }) => {
  const handlePageChange = ({ selected: page }) => {
    const currentPage = page + 1

    onPageChange(currentPage)
  }

  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </PaginationContainer>
  )
}

export default Pagination
