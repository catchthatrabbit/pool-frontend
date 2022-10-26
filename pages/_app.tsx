import 'styles/fonts.css'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { poolConfig } from 'config'
import RootProvider from '../src/providers'

const MainContent = dynamic(() => import('atoms/MainContent/MainContent'), { ssr: false })
const Toaster = dynamic(() => import('atoms/Toaster'), { ssr: false })
const Header = dynamic(() => import('components/Header/Header'), { ssr: false })
const Head = dynamic(() => import('next/head'), { ssr: false })

import type { AppProps } from 'next/app'

const Footer = dynamic(() => import('components/Footer'), { ssr: false })

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const isErrorPage = pathname === '/404' || pathname === '/_error'

  return (
    <RootProvider {...pageProps}>
      <Toaster />

      <Head>
        <title>{ poolConfig.POOL_OPTIONS.name }</title>
        <meta name="description" content={ poolConfig.POOL_OPTIONS.description } />
        <meta name="keywords" content={ poolConfig.POOL_OPTIONS.keywords } />
        {Object.keys(poolConfig.POOL_OPTIONS.wallet).map((key, id) => {
          return (
            <meta property={"wallet:" + key.toLowerCase()} content={poolConfig.POOL_OPTIONS.wallet[key].toLowerCase()} key={id} />
          )
        })}
        <meta property="og:title" content={ poolConfig.POOL_OPTIONS.name } />
        <meta property="og:description" content={ poolConfig.POOL_OPTIONS.description } />
        <meta property="og:image" content={ poolConfig.POOL_OPTIONS.images.og } />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content={ poolConfig.POOL_OPTIONS.name } />
        <meta property="twitter:description" content={ poolConfig.POOL_OPTIONS.description } />
        <meta property="twitter:image" content={ poolConfig.POOL_OPTIONS.images.twitter } />
        <meta property="twitter:card" content="summary" />
      </Head>

      {!isErrorPage && <Header />}

      <MainContent>
        <Component {...pageProps} />
      </MainContent>

      {!isErrorPage && <Footer />}
    </RootProvider>
  )
}

export default MyApp
