/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import QuizScreen from '@/src/components/screens/Quiz';

export default function DynamicQuizPage({ db }) {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        questions={db.questions}
        bg={db.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(ctx) {
  // eslint-disable-next-line prefer-const
  let [projectName, githubUser] = ctx.query.id.split('__');
  // para link sem nome de usuario
  githubUser = githubUser === 'undefined' ? '' : `.${githubUser}`;

  try {
    const db = await fetch(`https://${projectName}${githubUser}.vercel.app/api/db`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Falha em pegar os dados');
      })
      .then((obj) => obj);

    return {
      props: { db },
    };
  } catch (err) {
    throw new Error(err);
  }
}
