import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '@/components/src/screens/Quiz';

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
  console.log(ctx.query);
  const [projectName, githubUser] = ctx.query.id.split('__');

  try {
    const db = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((res) => {
        if(res.ok){
          return res.json();
        }

        throw new Error('Falha em pegar os dados');
      })
      .then((obj) => obj)

      return {
        props: { db }
      };
  } catch(err) {
    throw new Error(err);
  }
}