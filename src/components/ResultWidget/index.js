import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import FeedbackMark from '../FeedbackMark';
import BackLinkArrow from '../BackLinkArrow';
import Link from '../Link';

export const TextSpan = styled.span`
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.contrastText};
`;

function ResultWidget({ name, answers }) {
  const router = useRouter();
  const { id } = router.query;
  let projectName, githubUser;
  // link para quiz original
  if(id){
    [projectName, githubUser] = id.split('__');
    githubUser = githubUser === 'undefined' ? '' : `.${githubUser}`;
  }

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h2>Resultado</h2>
      </Widget.Header>
      <Widget.Content>
        <h3>
          {`${name}, você acertou ${answers.filter((a) => a).length} de ${answers.length}`}
        </h3>

        {
          id && 
          <StyledLink 
            href={`https://${projectName}${githubUser}.vercel.app/`}
            target="_blank"
          >
            Veja o quiz original &#8599;
          </StyledLink>
        }
        

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

        <StyledLink href="/">
          Voltar para o início
        </StyledLink>
      </Widget.Content>
    </Widget>
  );
}

ResultWidget.propTypes = {
  name: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default ResultWidget;
