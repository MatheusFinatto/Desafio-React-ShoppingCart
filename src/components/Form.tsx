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
import handleCreditCardNumberChange from "../helpers/CreditCard/handleCreditCardNumberChange";

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
        <Label htmlFor="cardNumber">Número</Label>
        <Input
          {...register("cardNumber", {
            pattern: /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/,
          })}
          placeholder="0000 0000 0000 0000"
          maxLength={19}
          type="text"
          name="cardNumber"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleCreditCardNumberChange(e, register)
          }
        />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="cardName">Nome do titular no cartão</Label>
        <Input
          {...register("cardName")}
          placeholder="Nome impresso no cartão"
        />
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
