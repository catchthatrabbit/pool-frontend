/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider as StyleComponentThemeProvider } from 'styled-components';
import catchThatRabitTheme from './theme';
import GlobalStyle from './theme/general-style';

const ThemeProvider = ({ children }) => (
  <StyleComponentThemeProvider theme={catchThatRabitTheme}>
    <GlobalStyle />
    {children}
  </StyleComponentThemeProvider>
);

export default ThemeProvider;
