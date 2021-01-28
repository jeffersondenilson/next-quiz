import styled from 'styled-components';

const FeedbackMark = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2em;
  color: ${({ theme, isCorrect }) => isCorrect ? theme.colors.success : theme.colors.wrong};
`

export default FeedbackMark;
