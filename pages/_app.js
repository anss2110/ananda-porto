import Head from 'next/head';
import '../styles/globals.scss';
import '../styles/pages/home.scss';
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
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abyssinica+SIL&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
