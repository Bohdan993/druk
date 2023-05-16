import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { wrapper } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}


export default wrapper.withRedux(App);
