import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
