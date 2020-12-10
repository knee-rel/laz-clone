import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewArrival from '../components/NewArrival';
import Carousel from '../components/Carousel'

export default function Home() {
    return(
        <div>
      <Head>
        <title>Saoirse Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Carousel />
        <NewArrival/>
      </main> 
      <div>
        <Footer />
      </div>
    </div>
    )
}