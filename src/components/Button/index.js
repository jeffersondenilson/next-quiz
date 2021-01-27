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
  box-shadow: 4px 4px 0 1px #888;
  &:hover{
    opacity: 0.9;
  }
  &:active {
    // background-color: #e8175d;
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.7;
    box-shadow: 2px 2px 0 1px #666;
    transform: translateY(4px);
  }
`;

export default Button;

/*
box-shadow: ${({ disabled }) => (disabled ? '0 0' : '4px 4px 0 1px #ba124a')};
box-shadow: 2px 2px 0 1px #8b0e38;
*/
