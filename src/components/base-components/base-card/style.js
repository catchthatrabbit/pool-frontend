import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${({ theme, type }) =>
    type === 'dark' ? theme.colors.darkthree : theme.colors.white};
  width: 328px;
  border-radius: ${({ theme }) => theme.dimensions.md};
  padding-top: ${({ theme }) => theme.dimensions.lg};
  padding-bottom: ${({ theme }) => theme.dimensions.lg};
  padding-right: ${({ theme }) => theme.dimensions.xl};
  padding-left: ${({ theme }) => theme.dimensions.xl};
  display: flex;
  align-items:center;
  justify-content: center;
  transitions: all 0.3s;
  cursor: pointer;
  ${({ align }) => align && `text-align: ${align}`}
  @media screen and ${({ theme }) =>
    theme.mediaQueriesMaxWidth.tablet} {
    width: 100%;
  }
  &:hover {
    background-color: ${({ theme, type }) =>
      type === 'dark'
        ? theme.colors.darknavyblue
        : theme.colors.white};
    transitions: all 0.3s;
  }
`;

export default StyledCard;
