/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
  WrapperStyled,
  PrevBtnStyled,
  NextBtnStyled,
  SepratorStyled,
  PageStyled,
} from './style';
const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';
/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const setRange = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const BasePagination = ({
  onPageChanged,
  totalRecords,
  pageLimit,
  pageNeighbours,
}) => {
  const [activePage, setActivePage] = useState(1);
  const pageNeighbourCount =
    typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;
  const totalPages = Math.ceil(totalRecords / pageLimit);

  fetchPageNumbers = () => {
    const totalPages = totalPages;
    const currentPage = state.currentPage;
    const pageNeighbours = pageNeighbourCount;

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = setRange(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = setRange(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = setRange(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const handleChange = (page) => {
    setActivePage(page);
  };
  useEffect(() => {
    onPageChanged(activePage);
  }, [activePage]);

  return (
    <div>
      <WrapperStyled>
        <PrevBtnStyled>Previous</PrevBtnStyled>
        {totalRecords.map((item, index) => {
          return;
        })}
        <PageStyled onClick={() => handleChange(1)} active={activePage === 1}>
          1
        </PageStyled>
        <PageStyled>...</PageStyled>
        <PageStyled onClick={() => handleChange(2)} active={activePage === 2}>
          2
        </PageStyled>
        <PageStyled onClick={() => handleChange(3)} active={activePage === 3}>
          3
        </PageStyled>
        <PageStyled onClick={() => handleChange(4)} active={activePage === 4}>
          4
        </PageStyled>
        <PageStyled>...</PageStyled>
        <PageStyled onClick={() => handleChange(10)} active={activePage === 10}>
          10
        </PageStyled>
        <SepratorStyled />
        <NextBtnStyled> Next </NextBtnStyled>
      </WrapperStyled>
    </div>
  );
};

export default BasePagination;
