import 'styles/fonts.css'

import MainContent from 'atoms/MainContent/MainContent'
import Footer from 'components/Footer'
import Header from 'components/Header/Header'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import RootProvider from '../providers'

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const isErrorPage = pathname === '/404' || pathname === '/_error'

  return (
    <RootProvider {...pageProps}>
      <Head>
        <title>Catch that Rabbit</title>
      </Head>

      { !isErrorPage && <Header /> }

      <MainContent>
        <Component { ...pageProps } />
      </MainContent>

      { !isErrorPage && <Footer /> }
    </RootProvider>
  )
}

export default MyApp
