import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

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

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function Home() {
  const [name, setName] = useState('');
  // eslint-disable-next-line no-console
  const submit = () => console.log('form submited');

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
            <form onSubmit={submit}>
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Seu nome aqui..."
              />
              <Button type="submit">
                JOGAR
                {' '}
                {name}
              </Button>
            </form>
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
