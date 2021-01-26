import { createGlobalStyle, ThemeProvider } from 'styled-components'
// import Head from 'next/head'
import db from '../db.json'
import { NextSeo } from 'next-seo'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          url: db.url,
          site_name: db.title,
          title: db.title,
          description: db.description,
          images: [
            {
              url: db.bg,
              width: 416,
              height: 416,
              alt: 'Magical Hats',
            },
          ],
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/*<Head>
          <title>{db.title}</title>
          <meta property="og:title" content={db.title} key="title" />
          <meta property="og:description" content={db.description} key="description" />
          <meta property="og:image" content={db.bg} />
          <meta key="og:type" name="og:type" content="website" />
          <meta key="og:url" name="og:url" 
            content="https://next-quiz.jeffersondenilson.vercel.app/" />
        </Head>*/}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
