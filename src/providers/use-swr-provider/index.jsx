import { SWRConfig } from 'swr';

const UseSwrConfigProvider = ({ children }) => (
  <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher: (...args) => fetch(...args).then((res) => res.json()),
    }}
  >
    {children}
  </SWRConfig>
);

export default UseSwrConfigProvider;
