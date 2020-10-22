import ThemeProvider from './theme-provider';
import ResponsiveProvider from './responsive-provider';

// eslint-disable-next-line react/prop-types
const RootProvider = ({ children }) => (
  <ThemeProvider>
    <ResponsiveProvider />
    {children}
  </ThemeProvider>
);

export default RootProvider;
