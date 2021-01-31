/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import QuizBackground from '@/src/components/QuizBackground';
import QuizContainer from '@/src/components/QuizContainer';
import QuizLogo from '@/src/components/QuizLogo';
import Footer from '@/src/components/Footer';
import GitHubCorner from '@/src/components/GitHubCorner';
import LoadingWidget from '@/src/components/LoadingWidget';
import QuestionWidget from '@/src/components/QuestionWidget';
import ResultWidget from '@/src/components/ResultWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizScreen({ questions, bg }) {
  const router = useRouter();
  const { name } = router.query;

  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const question = questions[questionIndex];

  const getNextQuestion = (isCorrectAnswer) => {
    setAnswers([
      ...answers,
      isCorrectAnswer,
    ]);

    const nextQuestion = questionIndex + 1;
    if (nextQuestion < questions.length) {
      // próxima pergunta
      setQuestionIndex(nextQuestion);
    } else {
      // todas as perguntas foram respondidas, fim do quiz
      setScreenState(screenStates.RESULT);
    }
  };

  useEffect(() => {
    setScreenState(screenStates.QUIZ);
    // setScreenState(screenStates.RESULT);
  }, []);

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {
          screenState === screenStates.QUIZ
          && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={questions.length}
            getNextQuestion={getNextQuestion}
          />
          )
        }

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {
          screenState === screenStates.RESULT
          && <ResultWidget name={name} answers={answers} />
        }
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jeffersondenilson/next-quiz" />
    </QuizBackground>
  );
}
