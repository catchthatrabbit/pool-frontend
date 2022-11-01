import { ThemeProvider as StyleComponentThemeProvider } from 'styled-components';

import catchThatRabbitTheme from './theme';
import GlobalStyle from './theme/general-style';

const ThemeProvider = ({ children }) => (
  <StyleComponentThemeProvider theme={catchThatRabbitTheme}>
    <GlobalStyle />
    {children}
  </StyleComponentThemeProvider>
)

export default ThemeProvider
