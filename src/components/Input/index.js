import styled from 'styled-components';

const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  margin-bottom: 15px;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  font-size: 1.1em;
`;

export default Input;
