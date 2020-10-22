import {
  WrapperStyled,
  PrevBtnStyled,
  NextBtnStyled,
  SepratorStyled,
  PageStyled,
} from './style';

const BasePagination = () => (
  <div>
    <WrapperStyled>
      <PrevBtnStyled>Previous</PrevBtnStyled>
      <PageStyled>1</PageStyled>
      <PageStyled>2</PageStyled>
      <PageStyled active>3</PageStyled>
      <PageStyled>4</PageStyled>
      <PageStyled>...</PageStyled>
      <PageStyled>10</PageStyled>
      <SepratorStyled />
      <NextBtnStyled> Next </NextBtnStyled>
    </WrapperStyled>
  </div>
);

export default BasePagination;
