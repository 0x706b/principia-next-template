import type { NextPage } from 'next'

import {} from '@principia/base/fluent'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>principia-next-template</title>
        <meta name="description" content="principia.ts template for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Hello, world!</p>
    </div>
  )
}

export default Home
