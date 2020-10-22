import { useEffect, useState } from 'react';
import {
  WrapperStyled,
  PrevBtnStyled,
  NextBtnStyled,
  SepratorStyled,
  PageStyled,
} from './style';

// eslint-disable-next-line react/prop-types
const BasePagination = ({ onChange }) => {
  const [activePage, setActivePage] = useState(1);
  const handleChange = (page) => {
    setActivePage(page);
  };
  useEffect(() => {
    onChange(activePage);
  }, [activePage]);
  return (
    <div>
      <WrapperStyled>
        <PrevBtnStyled>Previous</PrevBtnStyled>
        <PageStyled onClick={() => handleChange(1)} active={activePage === 1}>
          1
        </PageStyled>
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
