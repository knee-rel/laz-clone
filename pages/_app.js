import '../styles/globals.css'
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className='container mx-auto my-10'> 
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
