import ReactPaginate from 'react-paginate';
import PaginationContainer from './PaginationContainer';
import React, { FC } from 'react';

interface IProps {
  onPageChange: (page: number) => void,
  pageCount: number,
}

const Pagination: FC<IProps> = ({ onPageChange, pageCount }) => {
  const handlePageChange = ({ selected: page }) => {
    const currentPage = page + 1;

    onPageChange(currentPage);
  };

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
  );
};

export default Pagination;
