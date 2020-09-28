import { useRouter } from 'next/router';
import Header from '../components/Header';
import '../styles/globals.scss';

/* eslint-disable */
function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isErrorPage = pathname === '/404' || pathname === '/_error';

  return (
    <>
      {!isErrorPage && <Header />}
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
