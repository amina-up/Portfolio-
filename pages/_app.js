import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import Script from '../components/scripts';

function MyApp({ Component, pageProps }) {
  return (
    <Script>
      <Component {...pageProps} />
    </Script>
    
  );
}

export default MyApp
