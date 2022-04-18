import ReactQueryProvider from './react-query-provider';
import ResponsiveProvider from './responsive-provider';
import { ScrollProvider } from './scroll-provider';
import ThemeProvider from './theme-provider';

const RootProvider = ({ children, dehydratedState }) => (
  <ScrollProvider>
    <ThemeProvider>
      <ResponsiveProvider>
        <ReactQueryProvider dehydratedState={dehydratedState}>
          { children }
        </ReactQueryProvider>
      </ResponsiveProvider>
    </ThemeProvider>
  </ScrollProvider>
)

export default RootProvider
