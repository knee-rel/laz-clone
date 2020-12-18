import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../styles/carousel.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import { render } from 'react-dom'
config.autoAddCss = false
import { DataProvider } from '../store/GlobalState'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <div className="container mx-auto my-10">
        <Component {...pageProps} />
      </div>
    </DataProvider>
  )
}

export default MyApp
