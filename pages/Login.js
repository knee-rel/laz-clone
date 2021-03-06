import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loginpage from '../components/Loginpage';

export default function login() {
  return (
    <div>
      <Head>
        <title>Saoirse Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Loginpage />
      </main> 
      <div>
        <Footer />
      </div>
    </div>
  )
}