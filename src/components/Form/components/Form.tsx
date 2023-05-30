import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ICreditCard } from "../../../interfaces/CreditCard";
import handleCreditCardNumberChange from "../../../helpers/CreditCard/handleCreditCardNumberChange";
import DividedInputsContainer from "../styles/DividedFormInputContainer";
import FormInput from "../styles/FormInput";
import FormInputContainer from "../styles/FormInputContainer";
import FormLabel from "../styles/FormLabel";
import FormTitle from "../styles/FormTitle";
import StyledForm from "../styles/StyledForm";
import ContentBox from "../../Products/styles/ContentBox";

type FormProps = {
  onSubmit: SubmitHandler<ICreditCard>;
  register: UseFormRegister<ICreditCard>;
  handleSubmit: UseFormHandleSubmit<ICreditCard>;
};

const Form = ({ onSubmit, register, handleSubmit }: FormProps) => {
  return (
    <ContentBox>
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
    </ContentBox>
  );
};

export default Form;
