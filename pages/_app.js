import { Provider } from 'next-auth/client'
import Nav from '../components/nav'
import '../styles/main.css'
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp