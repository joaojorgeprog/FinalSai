import { Provider } from 'next-auth/client'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
export default MyApp