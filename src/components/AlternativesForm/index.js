import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-checked="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 10px;
    width: 100%;
  }
`;

export default AlternativesForm;
