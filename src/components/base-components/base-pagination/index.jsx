/* eslint-disable react/jsx-wrap-multilines */
import { func, number } from 'prop-types';
import ReactPaginate from 'react-paginate';
import GlobalStyle from './style';

// eslint-disable-next-line react/prop-types
const BasePagination = ({ onPageChange, pageCount }) => {
  const handlePageChange = ({ selected: page }) => {
    const currentPage = page + 1;

    onPageChange(currentPage);
  };

  return (
    <>
      <GlobalStyle />
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
    </>
  );
};

BasePagination.propTypes = {
  onPageChange: func,
  pageCount: number,
};

BasePagination.defaultProps = {
  onPageChange: () => {},
  pageCount: 1,
};

export default BasePagination;
