import { SWRConfig } from 'swr'
import fetcher from 'services/http-client'

const UseSwrConfigProvider = ({ children }) => (
  <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher,
    }}
  >
    {children}
  </SWRConfig>
)

export default UseSwrConfigProvider
