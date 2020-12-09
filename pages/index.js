import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saoirse Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1>Put Products Here</h1>
      </main> 
      <div>
        <Footer />
        </div>
    </div>
  )
}
