import ReactQueryProvider from './react-query-provider';
import ResponsiveProvider from './responsive-provider';
import { ScrollProvider } from './scroll-provider';
import ThemeProvider from './theme-provider';

import type { IReactQueryProviderProps } from './react-query-provider/index';

interface IRootProviderProps extends IReactQueryProviderProps {}

const RootProvider = ({ children, dehydratedState }: IRootProviderProps) => (
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
