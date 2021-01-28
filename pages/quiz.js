import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Form from '../src/components/Form';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import LoadingWidget from '../src/components/LoadingWidget';
import QuestionWidget from '../src/components/QuestionWidget';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const router = useRouter();
  const { name } = router.query;

  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [questionIndex, setQuestionIndex] = useState(0);
  // const [selectedAnswer, setSelectedAnswer] = useState(null);
  const question = db.questions[questionIndex];
  const correctAnswers = 0;

  const submitAnswer = (selectedAnswer) => {
    const nextQuestion = questionIndex + 1;
    if(nextQuestion < db.questions.length){
      // próxima pergunta
      setQuestionIndex(nextQuestion);
    }else{
      // todas as perguntas foram respondidas, fim do quiz
      setScreenState(screenStates.RESULT);
    }
  }

  const getNextQuestion = (isCorrectAnswer) => {
    if(isCorrectAnswer){
      correctAnswers++;
    }

    const nextQuestion = questionIndex + 1;
    if(nextQuestion < db.questions.length){
      // próxima pergunta
      setQuestionIndex(nextQuestion);
    }else{
      // todas as perguntas foram respondidas, fim do quiz
      setScreenState(screenStates.RESULT);
    }
  }

  useEffect(() => {
    // fetch aqui
    // setTimeout(() => setScreenState(screenStates.QUIZ), 1000);
    setScreenState(screenStates.QUIZ);
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {
          screenState === screenStates.QUIZ 
          && 
          <QuestionWidget 
            question={question}
            questionIndex={questionIndex}
            totalQuestions={db.questions.length}
            // selectedAnswer={selectedAnswer}
            // changeAnswer={setSelectedAnswer}
            submitAnswer={submitAnswer}
            getNextQuestion={getNextQuestion}
          />
        }

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {
          screenState === screenStates.RESULT 
          && 
          <h3>
            {/*`Você acertou ${correctAnswers} de ${db.questions.length}`*/}
            {'Fim do quiz'}
          </h3>
        }
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jeffersondenilson/next-quiz" />
    </QuizBackground>
  );
}
