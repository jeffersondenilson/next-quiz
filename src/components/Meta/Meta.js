import Head from 'next/head'
import db from '../db.json'
/*
    export const MY_SEO = {
        title: 'MyTitle',
        description: 'My description',
        openGraph: {
            type: 'website',
            url: 'My URL'
            title: 'MyTitle',
            description: 'My description',
            image: '...jpg',
        }
    };
*/
function Meta(){
  return (
    <Head>
      {/*<meta name="og:title" property="og:title" content={db.title} key="title" />
      <meta name="og:description" property="og:description" content="Quiz de Yu-Gi-Oh!"/>
      <meta property="og:url" content="https://next-quiz.jeffersondenilson.vercel.app/" />  
    <meta property="og:image" content={db.bg} />*/}  
      {/*<title>Quiz de Yu-Gi-Oh!</title>
      <meta property="og:title" content="Quiz de Yu-Gi-Oh!" key="title" />
      <meta property="og:description" content="Quiz de Yu-Gi-Oh!" key="description" />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://next-quiz.jeffersondenilson.vercel.app/"/>
    <meta property="og:image" content="https://i.pinimg.com/originals/0b/20/a8/0b20a88f016d7be23012cd29d27072f1.jpg"/>*/}
    <title key="title">{db.title}</title>

    <meta
    key="description"
    name="description"
    content={db.description}
    />
    <meta
    key="og:type"
    name="og:type"
    content="website"
    />
    <meta
    key="og:title"
    name="og:title"
    content={db.title}
    />
    <meta
    key="og:description"
    name="og:description"
    content={db.description}
    />
    <meta
    key="og:url"
    name="og:url"
    content="https://next-quiz.jeffersondenilson.vercel.app/"
    />
    <meta
    key="og:image"
    name="og:image"
    content="https://i.pinimg.com/originals/0b/20/a8/0b20a88f016d7be23012cd29d27072f1.jpg"
    />          
    </Head>
  )
}