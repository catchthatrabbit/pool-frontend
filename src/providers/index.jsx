import React from 'react'
import ThemeProvider from './theme-provider'
import ResponsiveProvider from './responsive-provider'
import { ScrollProvider } from './scroll-provider'

const RootProvider = ({ children }) => (
  <ScrollProvider>
    <ThemeProvider>
      <ResponsiveProvider>{children}</ResponsiveProvider>
    </ThemeProvider>
  </ScrollProvider>
)

export default RootProvider
