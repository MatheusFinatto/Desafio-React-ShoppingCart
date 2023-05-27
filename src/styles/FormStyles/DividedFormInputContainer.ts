import { styled } from "styled-components";
import FormInputContainer from "./FormInputContainer";
import FormInput from "./FormInput";

const DividedInputsContainer = styled.div`
  display: flex;
  gap: 14px;

  > ${FormInputContainer} {
    > ${FormInput} {
      width: calc(100% - 30px);
    }
  }
`;

export default DividedInputsContainer;
