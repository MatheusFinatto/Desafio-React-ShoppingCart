import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ICartaoCredito } from "../interfaces/CartaoCredito";
import {
  StyledForm,
  FormTitle,
  InputContainer,
  Label,
  Input,
  DividedInputsContainer,
} from "../styles/FormStyles/FormStyles";

type FormProps = {
  onSubmit: SubmitHandler<ICartaoCredito>;
  register: UseFormRegister<ICartaoCredito>;
  handleSubmit: UseFormHandleSubmit<ICartaoCredito>;
};

const Form = ({ onSubmit, register, handleSubmit }: FormProps) => {
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Cartão de crédito</FormTitle>

      <InputContainer>
        <Label htmlFor="firstName">Número</Label>
        <Input {...register("number")} placeholder="0000 0000 0000 0000" />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="name">Nome do titular no cartão</Label>
        <Input {...register("name")} placeholder="Nome impresso no cartão" />
      </InputContainer>

      <DividedInputsContainer>
        <InputContainer>
          <Label htmlFor="expirationDate">Data de validade</Label>
          <Input {...register("expirationDate")} placeholder="MM/AA" />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="cvv">Código CVV:</Label>
          <Input {...register("cvv")} placeholder="000" />
        </InputContainer>
      </DividedInputsContainer>
    </StyledForm>
  );
};

export default Form;
