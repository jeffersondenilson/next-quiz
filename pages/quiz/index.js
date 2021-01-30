import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '@/components/src/screens/Quiz';
import db from '@/components/db.json';

export default function DefaultQuizPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        questions={db.questions}
        bg={db.bg}
      />
    </ThemeProvider>
  );
}
