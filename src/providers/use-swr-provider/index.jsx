import { SWRConfig } from 'swr';
import fetcher from '../../services/http-client';

// eslint-disable-next-line react/prop-types
const UseSwrConfigProvider = ({ children }) => (
  <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher,
    }}
  >
    {children}
  </SWRConfig>
);

export default UseSwrConfigProvider;
