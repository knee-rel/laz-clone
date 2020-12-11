import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Checkout from '../components/Checkout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saoirse Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Main />
      </main> 
      <div>
        <Footer />
        <Checkout />
      </div>
    </div>
  )
}
