import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saoirse Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Cart />
      </main> 
      <div>
        <Footer />
      </div>
    </div>
  )
}
