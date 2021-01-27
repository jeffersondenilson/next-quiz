import React from 'react';
import Widget from '../Widget';
import Form from '../Form';

export default function QuestionWidget({ 
  question,
  questionIndex,
  totalQuestions,
  onSubmit
}){
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="imagemDaQuestão"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
      </Widget.Content>
    </Widget>
  );
}
