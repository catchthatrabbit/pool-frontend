import { useRouter } from 'next/router'
import Header from 'components/Header/Header'
import Footer from 'components/Footer'

import RootProvider from '../providers'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const isErrorPage = pathname === '/404' || pathname === '/_error'

  return (
    <RootProvider>
      {!isErrorPage && <Header />}
      <main>
        <Component {...pageProps} />
      </main>
      {!isErrorPage && <Footer />}
    </RootProvider>
  )
}

export default MyApp
