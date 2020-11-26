import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.typography.primary};
  background: ${({ theme }) => theme.colors.woodsmoke};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
}

a {
  color: inherit;
  text-decoration: none;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto 0;
  width: 90%;
  max-width: 1640px;
  @media screen and (min-width: ${({ theme }) =>
    theme.responsive.tablet.medium}) {
    margin-top: 120px;
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
    margin-top: 140px;
  }
}
`;

export default GlobalStyle;
