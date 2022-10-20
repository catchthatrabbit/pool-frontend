import 'styles/fonts.css'
import dynamic from 'next/dynamic'

const MainContent = dynamic(() => import('atoms/MainContent/MainContent'), { ssr: false })
const Toaster = dynamic(() => import('atoms/Toaster'), { ssr: false })
const Header = dynamic(() => import('components/Header/Header'), { ssr: false })
const Head = dynamic(() => import('next/head'), { ssr: false })
import { useRouter } from 'next/router'
import React from 'react'

import RootProvider from '../src/providers'

import type { AppProps } from 'next/app'

const Footer = dynamic(() => import('components/Footer'), { ssr: false })

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const isErrorPage = pathname === '/404' || pathname === '/_error'

  return (
    <RootProvider {...pageProps}>
      <Toaster />

      <Head>
        <title>Catch that Rabbit</title>
        <meta name="description" content="Catch that Rabbit — ₡ORE mining pool" />
        <meta name="keywords" content="catch,that,rabbit,mining,pool,core,ore,₡ORE,blockchain,xcb,xce,xab,network,open-source,open,source,mainnet,devin" />
        <meta property="wallet:xcb" content="cb7936b9b7980a0544a6da7ae1cea8424bac9046d997" />
        <meta property="og:title" content="Catch that Rabbit" />
        <meta property="og:description" content="Catch that Rabbit — ₡ORE mining pool" />
        <meta property="og:image" content="/images/ctr-og.jpg" />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content="Catch that Rabbit" />
        <meta property="twitter:description" content="Catch that Rabbit — ₡ORE mining pool" />
        <meta property="twitter:image" content="/images/ctr-tw.jpg" />
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
