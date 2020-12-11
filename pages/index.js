import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';
import AddToCart from '../components/AddToCart'
import Subscribe from '../components/Subscribe'

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
        <Subscribe />
      </main> 
      <div>
        <Footer />
      </div>
    </div>
  )
}
