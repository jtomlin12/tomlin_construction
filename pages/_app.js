import Navigation from './../components/navigation'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </>
  )
}