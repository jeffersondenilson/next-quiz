import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import AlternativesForm from '../AlternativesForm';
import Button from '../Button';
import FeedbackMark from '../FeedbackMark';

function QuestionWidget({ 
  question,
  questionIndex,
  totalQuestions,
  // selectedAnswer,
  // changeAnswer,
  submitAnswer,
  getNextQuestion
}){
  const questionId = `question__${questionIndex}`;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const isCorrect = selectedAnswer === question.answer;
  const answerStatus = isCorrect ? 'SUCCESS' : 'ERROR';

  const checkAnswer = (e) => {
    e.preventDefault();
    // submitAnswer(selectedAnswer);
    // setSelectedAnswer(null);
    if(isAnswered){
      // próxima pergunta
      getNextQuestion(isCorrect);
    }else{
      // confirmar resposta
      setIsAnswered(true);
    }
  }

  // resets
  useEffect(() => {
    setIsAnswered(false);
    setSelectedAnswer(null);
  }, [questionIndex]);

  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      {
        question.image 
        && 
        <img
          alt="imagemDaQuestão"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src={question.image}
        />
      }

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description || ''}</p>

        <AlternativesForm onSubmit={checkAnswer}>
          {question.alternatives.map((alternative, alternativeIndex)=>{
            const alternativeId = `alternative__${alternativeIndex}`;
            const checked = selectedAnswer === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                // checked={checked}
                // feedbackColor={isAnswered && checked && { isCorrect } }
                data-checked={checked}
                data-status={isAnswered && answerStatus}
              >
                <input 
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  // checked={checked}
                  onChange={()=>setSelectedAnswer(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button 
            disabled={selectedAnswer === null}
            type="submit"
            // style={{ marginTop: '10px' }}
          >
            {/*feedback aqui*/}
            {isAnswered && isCorrect 
              && <FeedbackMark isCorrect={isCorrect}>&#10004;</FeedbackMark>}
            {isAnswered && !isCorrect 
              && <FeedbackMark isCorrect={isCorrect}>&#10006;</FeedbackMark>}
            {isAnswered ? 'PRÓXIMA' : 'CONFIRMAR'}
            {/*'CONFIRMAR'*/}
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}


QuestionWidget.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  // selectedAnswer: PropTypes.number,
  // changeAnswer: PropTypes.func.isRequired,
  submitAnswer: PropTypes.func.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
}

export default QuestionWidget;