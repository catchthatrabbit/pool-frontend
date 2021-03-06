import { useRouter } from 'next/router';
import CommonHeader from '../components/common/common-header';
import Footer from '../components/Footer';

import RootProvider from '../providers';

/* eslint-disable */
function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isErrorPage = pathname === '/404' || pathname === '/_error';

  return (
    <RootProvider>
      {!isErrorPage && <CommonHeader />}
      <main>
        <Component {...pageProps} />
      </main>
      {!isErrorPage && <Footer />}
    </RootProvider>
  );
}

export default MyApp;
