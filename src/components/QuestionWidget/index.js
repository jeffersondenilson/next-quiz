import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import AlternativesForm from '../AlternativesForm';
import Button from '../Button';
import FeedbackMark from '../FeedbackMark';
import BackLinkArrow from '../BackLinkArrow';

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  getNextQuestion,
}) {
  const questionId = `question__${questionIndex}`;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const isCorrect = selectedAnswer === question.answer;
  const answerStatus = isCorrect ? 'SUCCESS' : 'ERROR';

  const checkAnswer = (e) => {
    e.preventDefault();
    if (isAnswered) {
      // próxima pergunta
      getNextQuestion(isCorrect);
    } else {
      // confirmar resposta
      setIsAnswered(true);
    }
  };

  // resets
  useEffect(() => {
    setIsAnswered(false);
    setSelectedAnswer(null);
  }, [questionIndex]);

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      {
        question.image
        && (
        <img
          alt="imagemDaQuestão"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src={question.image}
        />
        )
      }

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description || ''}</p>

        <AlternativesForm onSubmit={checkAnswer}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const checked = selectedAnswer === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-checked={checked}
                data-status={isAnswered && answerStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  checked={checked}
                  // se já foi respondida, "travar para edição"
                  onChange={() => !isAnswered && setSelectedAnswer(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {isAnswered && isCorrect
            && <FeedbackMark isCorrect={isCorrect}>&#10004;</FeedbackMark>}
          {isAnswered && !isCorrect
            && <FeedbackMark isCorrect={isCorrect}>&#10006;</FeedbackMark>}

          <Button
            disabled={selectedAnswer === null}
            type="submit"
          >
            {isAnswered ? 'PRÓXIMA' : 'CONFIRMAR'}
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

QuestionWidget.propTypes = {
  question: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    answer: PropTypes.number.isRequired,
    alternatives: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  questionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
};

export default QuestionWidget;
