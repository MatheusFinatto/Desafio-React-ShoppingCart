import { styled } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const FormTitle = styled.h2`
  font-family: Arial;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
  margin: 16px 0;
`;

export const Label = styled.label`
  color: #515151;
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 42px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0 14px;
  &::placeholder {
    color: #ccc;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const DividedInputsContainer = styled.div`
  display: flex;
  gap: 14px;

  > ${InputContainer} {
    > ${Input} {
      width: calc(100% - 30px);
    }
  }
`;
