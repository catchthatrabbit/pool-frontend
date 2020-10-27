/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import ReactPaginate from 'react-paginate';
import GlobalStyle, {
  WrapperStyled,
  SepratorStyled,
  PrevNextBtnStyled,
} from './style';

// eslint-disable-next-line react/prop-types
const BasePagination = ({ onPageChange, pageCount }) => {
  const handlePageChange = (data) => {
    const { selected } = data;
    onPageChange(selected);
  };

  return (
    <>
      <GlobalStyle />
      <WrapperStyled>
        <ReactPaginate
          previousLabel={<PrevNextBtnStyled>Previous</PrevNextBtnStyled>}
          nextLabel={
            <WrapperStyled>
              <SepratorStyled /> <PrevNextBtnStyled>Next</PrevNextBtnStyled>
            </WrapperStyled>
          }
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </WrapperStyled>
    </>
  );
};

export default BasePagination;
