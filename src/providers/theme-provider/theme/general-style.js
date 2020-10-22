import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    direction: ${({ theme }) => theme.direction.rtl};
    font-family: IranYekan;
}

p {
  margin: 0;
}
* {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
