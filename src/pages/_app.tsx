import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Project Boilerplate</title>
        {/* Place favicon here */}
        {/* <link rel="shortcut icon" href="" /> */}
        {/* <link rel="apple-touch-icon" href="" /> */}
        <meta
          name="description"
          content="A simple project starter boilerplate"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
