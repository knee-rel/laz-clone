import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Dresses from '../components/Dresses';

export default function Home() {
    return(
        <div>
      <Head>
        <title>Saoirse Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Dresses />
      </main> 
      <div>
        <Footer />
      </div>
    </div>
    )
}