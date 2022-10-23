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

import info from '../pool.json'
import official from 'helpers/official'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const isErrorPage = pathname === '/404' || pathname === '/_error'

  return (
    <RootProvider {...pageProps}>
      <Toaster />

      <Head>
        <title>{ (info.name !== "" && info.name !== undefined) ? info.name : "Community pool" }</title>
        <meta name="description" content={ (info.description !== "" && info.description !== undefined) ? info.description : "" } />
        <meta name="keywords" content={ (info.keywords !== "" && info.keywords !== undefined) ? info.keywords : "" } />
        {Object.keys(info.wallet).map((key, id) => {
          return (
            <meta property={"wallet:" + key.toLowerCase()} content={info.wallet[key].toLowerCase()} key={id} />
          )
        })}
        <meta property="og:title" content={ (info.name !== "" && info.name !== undefined) ? info.name : "Community pool" } />
        <meta property="og:description" content={ (info.description !== "" && info.description !== undefined) ? info.description : "" } />
        <meta property="og:image" content={ (info.images.og !== "" && info.images.og !== undefined) ? info.images.og : "" } />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content={ (info.name !== "" && info.name !== undefined) ? info.name : "Community pool" } />
        <meta property="twitter:description" content={ (info.description !== "" && info.description !== undefined) ? info.description : "" } />
        <meta property="twitter:image" content={ (info.images.twitter !== "" && info.images.twitter !== undefined) ? info.images.twitter : "" } />
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
