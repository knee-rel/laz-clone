import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignUpPage from '../components/SignUpPage';

export default function signup() {
  return (
    <div>
      <Head>
        <title>Saoirse Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <SignUpPage />
      </main> 
      <div>
        <Footer />
      </div>
    </div>
  )
}