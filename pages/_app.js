import Head from 'next/head';
import '../styles/globals.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ananda - Resume &amp; Portofolio</title>
        <meta name="description" content="My resume and portofolio" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
