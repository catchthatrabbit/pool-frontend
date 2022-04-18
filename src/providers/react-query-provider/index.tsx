import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import type { FC } from 'react';

interface IReactQueryProviderProps {
  dehydratedState?: unknown
}

const ReactQueryProvider: FC<IReactQueryProviderProps> = ({ children, dehydratedState }) => {
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
