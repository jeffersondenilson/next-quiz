import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, disabled }) => (disabled ? 'gray' : theme.colors.secondary)};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 1em;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'arrow' : 'pointer')};
  outline: none;
  box-shadow: ${({ disabled }) => (disabled ? '0 0' : '4px 4px 0 1px #ba124a')};
  &:active {
    background-color: #e8175d;
    box-shadow: 2px 2px 0 1px #8b0e38;
    transform: translateY(4px);
  }
`;

export default Button;
