import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
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
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jeffersondenilson/next-quiz" />
    </QuizBackground>
  );
}
