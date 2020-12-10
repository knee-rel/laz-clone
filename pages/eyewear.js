import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Eyewear from '../components/Eyewear';

export default function Home() {
    return(
        <div>
      <Head>
        <title>Saoirse Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Eyewear />
      </main> 
      <div>
        <Footer />
      </div>
    </div>
    )
}