import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

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
  const [isCorrect, setIsCorrect] = useState();

  const checkAnswer = (e) => {
    e.preventDefault();
    submitAnswer(selectedAnswer);
    setSelectedAnswer(null);
    // if(isAnswered){
    //   // próxima pergunta
    //   // resets
    //   getNextQuestion(isCorrect);
    // }else{
    //   // confirmar resposta
    //   setIsCorrect(selectedAnswer === question.answer);
    //   setIsAnswered(true);
    // }
  }

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

        <Form onSubmit={checkAnswer}>
          {question.alternatives.map((alternative, alternativeIndex)=>{
            const alternativeId = `alternative__${alternativeIndex}`;
            const checked = selectedAnswer === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                checked={checked}
                // isCorrect={isAnswered && checked ? isCorrect : }
              >
                <input 
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  checked={selectedAnswer === alternativeIndex}
                  onChange={()=>setSelectedAnswer(alternativeIndex)}
                  // onChange={()=>changeAnswer(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button 
            disabled={selectedAnswer === null}
            type="submit"
            style={{ marginTop: '10px' }}
          >
            {/*isAnswered ? 'PRÓXIMA' : 'CONFIRMAR'*/}
            {'CONFIRMAR'}
          </Button>
        </Form>
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