import React from 'react'
import ThemeProvider from './theme-provider'
import ResponsiveProvider from './responsive-provider'

const RootProvider = ({ children }) => (
  <ThemeProvider>
    <ResponsiveProvider>{children}</ResponsiveProvider>
  </ThemeProvider>
)

export default RootProvider
