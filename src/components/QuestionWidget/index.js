import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

function QuestionWidget({ 
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  changeAnswer,
  submitAnswer
}){
  const questionId = `question__${questionIndex}`;

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

        <Form 
          onSubmit={(e) => {
            e.preventDefault();
            submitAnswer();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex)=>{
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
              >
                <input 
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  checked={selectedAnswer === alternativeIndex}
                  onChange={()=>changeAnswer(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" style={{ marginTop: '10px' }}>
            CONFIRMAR
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
  selectedAnswer: PropTypes.number,
  changeAnswer: PropTypes.func.isRequired,
  submitAnswer: PropTypes.func.isRequired,
}

export default QuestionWidget;