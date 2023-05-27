import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ICartaoCredito } from "../interfaces/CartaoCredito";
import handleCreditCardNumberChange from "../helpers/CreditCard/handleCreditCardNumberChange";
import DividedInputsContainer from "../styles/FormStyles/DividedFormInputContainer";
import FormTitle from "../styles/FormStyles/FormTitle";
import StyledForm from "../styles/FormStyles/StyledForm";
import FormLabel from "../styles/FormStyles/FormLabel";
import FormInput from "../styles/FormStyles/FormInput";
import FormInputContainer from "../styles/FormStyles/FormInputContainer";

type FormProps = {
  onSubmit: SubmitHandler<ICartaoCredito>;
  register: UseFormRegister<ICartaoCredito>;
  handleSubmit: UseFormHandleSubmit<ICartaoCredito>;
};

const Form = ({ onSubmit, register, handleSubmit }: FormProps) => {
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Cartão de crédito</FormTitle>

      <FormInputContainer>
        <FormLabel htmlFor="cardNumber">Número</FormLabel>
        <FormInput
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
      </FormInputContainer>

      <FormInputContainer>
        <FormLabel htmlFor="cardName">Nome do titular no cartão</FormLabel>
        <FormInput
          {...register("cardName")}
          placeholder="Nome impresso no cartão"
        />
      </FormInputContainer>

      <DividedInputsContainer>
        <FormInputContainer>
          <FormLabel htmlFor="expirationDate">Data de validade</FormLabel>
          <FormInput {...register("expirationDate")} placeholder="MM/AA" />
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel htmlFor="cvv">Código CVV:</FormLabel>
          <FormInput {...register("cvv")} placeholder="000" />
        </FormInputContainer>
      </DividedInputsContainer>
    </StyledForm>
  );
};

export default Form;
