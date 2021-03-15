import { useRouter } from 'next/router'
import Header from 'components/Header/Header'
import Footer from 'components/Footer'

import styled from 'styled-components';
import RootProvider from '../providers';

const StyledMain = styled.main`
  margin-right: 0;
  margin-left: 0;
`;
function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const isErrorPage = pathname === '/404' || pathname === '/_error'

  return (
    <RootProvider>
      {!isErrorPage && <Header />}
      <StyledMain>
        <Component {...pageProps} />
      </StyledMain>
      {!isErrorPage && <Footer />}
    </RootProvider>
  )
}

export default MyApp
