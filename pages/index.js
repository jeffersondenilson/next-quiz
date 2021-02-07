import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Form from '../src/components/Form';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const hasName = name.trim().length > 0;

  const submit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <Form onSubmit={submit}>
              <Input
                name="nomeDoUsuario"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Seu nome para jogar"
              />
              <Button type="submit" disabled={!hasName}>
                JOGAR QUIZ YUGIOH!
              </Button>
            </Form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>
              Jogue outros quizes
              {!hasName && ', digite seu nome para jogar'}
            </p>

            <ul style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {db.external.map((quiz) => {
                const [projectName, githubUser] = quiz.url
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={quiz.url}>
                    <Widget.Topic
                      as={Link}
                      style={{ marginRight: '5px' }}
                      href={hasName ? `/quiz/${projectName}__${githubUser}?name=${name}` : '/'}
                    >
                      {`${githubUser}/${quiz.name}`}
                    </Widget.Topic>
                  </li>
                );
              })}
              {/* não tem api ou é melhor redirecionar para o original */}
              <li>
                <Widget.Topic
                  as={Link}
                  style={{ marginRight: '5px' }}
                  href="https://aluraquiz-simpsons.vercel.app"
                  target="_blank"
                >
                  Alura Quiz - Os Simpsons &#8599;
                </Widget.Topic>
              </li>
              <li>
                <Widget.Topic
                  as={Link}
                  style={{ marginRight: '5px' }}
                  href="https://quiz-pokemon.vercel.app"
                  target="_blank"
                >
                  Pokémon Quiz &#8599;
                </Widget.Topic>
              </li>
              <li>
                <Widget.Topic
                  as={Link}
                  style={{ marginRight: '5px' }}
                  href="https://1sec-quiz.victoroda.vercel.app"
                  target="_blank"
                >
                  Quiz do 1 segundo GAMES &#8599;
                </Widget.Topic>
              </li>
            </ul>

            <Link
              href="https://aluraquiz-base.alura-challenges.vercel.app/contribuidores"
              target="_blank"
              style={{ color: 'white', fontSize: '1.1em' }}
            >
              Ver todos &#8599;
            </Link>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jeffersondenilson/next-quiz" />
    </QuizBackground>
  );
}
