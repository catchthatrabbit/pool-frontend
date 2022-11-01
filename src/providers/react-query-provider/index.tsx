import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import type { DehydratedState } from 'react-query';

export interface IReactQueryProviderProps {
  dehydratedState?: DehydratedState;
  children: React.ReactNode;
}

const ReactQueryProvider = ({ children, dehydratedState }: IReactQueryProviderProps) => {
  const queryClient = useRef(new QueryClient())

  return (
    <QueryClientProvider client={ queryClient.current }>
      <Hydrate state={ dehydratedState }>
        { children }
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={ false } />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
