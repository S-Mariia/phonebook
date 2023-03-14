import styled from 'styled-components';
import { accentColor } from 'shared/colors';

export const Input = styled.input`
  height: 42px;
  min-width: 410px;
  padding: 8px;
  padding-right: 40px;
  border: 4px solid ${accentColor};
  background-color: #d8d9b0;
  font-weight: 600;
  color: #191b0e;

  &::placeholder {
    color: #191b0e;
    font-weight: 400;
    font-size: 15px;
  }

  /* &:focus {
    outline: none;
  } */
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-bottom: 8px;
`;

export const InputContainer = styled.div`
  margin-bottom: 16px;
`;
