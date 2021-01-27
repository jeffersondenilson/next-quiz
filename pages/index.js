import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { useRouter } from 'next/router';

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
  color: ${({ theme }) => theme.colors.contrastText};
  margin-bottom: 15px;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  font-size: 1.1em;
`;

export const Button = styled.button`
  background-color: ${({ theme, disabled }) => disabled ? 'gray' : theme.colors.secondary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  cursor: ${({ disabled }) => disabled ? 'arrow' : 'pointer'};
  outline: none;
  box-shadow: ${({ disabled }) => disabled ? '0 0' : '4px 4px 0 1px #ba124a'};
  &:active {
    background-color: #e8175d;
    box-shadow: 2px 2px 0 1px #8b0e38;
    transform: translateY(4px);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const submit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`)
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
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Seu nome aqui..."
              />
              <Button type="submit" disabled={name.trim().length === 0}>
                JOGAR
              </Button>
            </Form>
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
