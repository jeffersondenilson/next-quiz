import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import FeedbackMark from '../FeedbackMark';

export const TextSpan = styled.span`
  font-weight: bold;
`;

function ResultWidget({ name, answers }) {
  return (
    <Widget>
      <Widget.Header>
        <h2>Resultado</h2>
      </Widget.Header>
      <Widget.Content>
        <h3>
          {`${name}, você acertou ${answers.filter((a) => a).length} de ${answers.length}`}
        </h3>

        <p>Suas respostas:</p>

        {answers.map((answer, index) => {
          const answerIndex = `answer__${index}`;

          return (
            <FeedbackMark key={`answer__${answerIndex}`} isCorrect={answer}>
              <TextSpan>
                #
                {index + 1}
              </TextSpan>
              {' '}
              {answer ? '\u2714' : '\u2716'}
            </FeedbackMark>
          );
        })}
      </Widget.Content>
    </Widget>
  );
}

ResultWidget.propTypes = {
  name: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default ResultWidget;
