import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
    flex-direction: row;
  }
`;
const TitleStyled = styled.h2`
  font-size: min(max(1.25vw, 18px), 24px);
  font-weight: 400;
  white-space: nowrap;
`;
const ImageStyled = styled.img`
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
    margin-right: 1rem;
  }
`;

export { WrapperStyled, TitleStyled, ImageStyled };
