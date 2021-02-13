import { Provider } from 'next-auth/client'
import '../styles/globals.css'
import Navbar from "../components/NavBar/Navbar"
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp