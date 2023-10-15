import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  border: 3px solid green;
  padding: 24px;
  border-radius: 5px;
`;
export const Input = styled(Field)`
  padding: 14px;
  margin-bottom: 12px;
  border: 3px solid green;
  border-radius: 4px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: dark-green;
  font-size: 20px;
`;
export const Button = styled.button`
  width: 200px;
  padding: 14px;
  border-radius: 4px;
  border: 3px solid dark-green;
  font-size: 20px;
  cursor: pointer;
  background-color: green;
  color: #fff; 
  transition: background-color 0.3s ease-in-out;
  &:hover,
  &:focus {
    background-color: dark-green;
    transform: scale(1.05);
  }
}
`;
export const ErrMessage = styled(ErrorMessage)`
  color: red;
  font-size: 20px;
`;
export const Title = styled.h2`
  color: green;
  font-size: 40px;
  margin-bottom: 10px;
`;
