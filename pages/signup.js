import Head from 'next/head'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignUpPage from '../components/SignUpPage';

const signup = () => {
  return (
    <div>
      <Head>
        <title>Saoirse Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className= 'my-10'>
        <SignUpPage />
      </main> 
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default signup