import { styled } from "styled-components";

const FormInput = styled.input`
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

export default FormInput;
