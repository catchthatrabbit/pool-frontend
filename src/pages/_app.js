import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from 'components/Header/Header'
import Footer from 'components/Footer'
import RootProvider from '../providers'
import 'styles/fonts.css'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const isErrorPage = pathname === '/404' || pathname === '/_error'

  return (
    <RootProvider>
      <Head>
        <title>Catch that Rabbit</title>
      </Head>
      {!isErrorPage && <Header />}
      <main>
        <Component {...pageProps} />
      </main>
      {!isErrorPage && <Footer />}
    </RootProvider>
  )
}

export default MyApp
