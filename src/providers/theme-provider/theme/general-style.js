import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  padding: 0;
  margin: 0;
  font: ${({ theme }) => theme.typography.defaultFont}
  background: $woodsmoke;
  color: $white;
}

p {
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}

* {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
