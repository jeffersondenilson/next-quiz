import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import QuizBackground from '@/components/QuizBackground';
import QuizContainer from '@/components/QuizContainer';
import QuizLogo from '@/components/QuizLogo';
import Footer from '@/components/Footer';
import GitHubCorner from '@/components/GitHubCorner';
import LoadingWidget from '@/components/LoadingWidget';
import QuestionWidget from '@/components/QuestionWidget';
import ResultWidget from '@/components/ResultWidget';

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
