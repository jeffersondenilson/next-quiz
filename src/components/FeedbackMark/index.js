import styled from 'styled-components';

const FeedbackMark = styled.span`
  font-size: 1.1em;
  color: ${({ theme, isCorrect }) => isCorrect ? theme.colors.success : theme.colors.wrong};
`

export default FeedbackMark;
