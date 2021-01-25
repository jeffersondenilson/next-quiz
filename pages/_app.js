import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import db from '../db.json'

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
      {/*<Head>
        <meta name="og:title" property="og:title" content={db.title} key="title" />
        <meta name="og:description" property="og:description" content="Quiz de Yu-Gi-Oh!"/>
        <meta property="og:url" content="https://next-quiz.jeffersondenilson.vercel.app/" />  
        <meta property="og:image" content={db.bg} />
      </Head>*/}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
