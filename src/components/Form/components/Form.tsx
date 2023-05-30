import React, { useState } from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ICreditCard } from "../../../interfaces/ICreditCard";
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
  errors: FieldErrors<ICreditCard>;
};

const validateFullName = (value: string) => {
  if (value.includes(" ")) {
    return true; //
  } else {
    return "O nome deve conter nome e sobrenome";
  }
};

const REGEX_CARTAO = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;

const Form = ({ onSubmit, register, handleSubmit, errors }: FormProps) => {
  const [expirationDate, setExpirationDate] = useState("");

  const handleExpirationDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = e.target.value;

    // Remove todos os caracteres não numéricos do valor
    value = value.replace(/\D/g, "");

    // Adiciona a barra após os primeiros 2 dígitos
    if (value.length > 2) {
      value = value.replace(/^(\d{2})/, "$1/");
    }

    // Limita a quantidade de caracteres em 5
    value = value.substring(0, 7);

    setExpirationDate(value);
  };

  return (
    <ContentBox>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Cartão de crédito</FormTitle>

        <FormInputContainer>
          <FormLabel htmlFor="cardNumber">Número</FormLabel>
          <FormInput
            {...register("cardNumber", {
              maxLength: 19,
              pattern: {
                value: REGEX_CARTAO,
                message: "Insira um número de cartão válido",
              },
              required: "Insira um número de cartão válido",
            })}
            placeholder="0000 0000 0000 0000"
            type="text"
            name="cardNumber"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleCreditCardNumberChange(e, register)
            }
            autoComplete="off"
            style={errors.cardNumber ? { border: "1px solid red" } : {}}
          />
          {errors.cardNumber && (
            <span style={{ color: "red", fontSize: 12 }}>
              {errors.cardNumber.message}
            </span>
          )}
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel htmlFor="cardName">Nome do titular no cartão</FormLabel>
          <FormInput
            {...register("cardName", {
              required: "Insira um nome válido",
              validate: validateFullName,
            })}
            placeholder="Nome impresso no cartão"
            type="text"
            style={errors.cardName ? { border: "1px solid red" } : {}}
            autoComplete="off"
          />
          {errors.cardName && (
            <span style={{ color: "red", fontSize: 12 }}>
              {errors.cardName.message}
            </span>
          )}
        </FormInputContainer>

        <DividedInputsContainer>
          <FormInputContainer>
            <FormLabel htmlFor="expirationDate">Data de validade</FormLabel>
            <FormInput
              {...register("expirationDate", {
                maxLength: 7,
                required: "Insira uma data válida",
              })}
              placeholder="MM/AA"
              value={expirationDate}
              onChange={handleExpirationDateChange}
              style={errors.expirationDate ? { border: "1px solid red" } : {}}
              autoComplete="off"
            />
            {errors.expirationDate && (
              <span style={{ color: "red", fontSize: 12 }}>
                {errors.expirationDate.message}
              </span>
            )}
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel htmlFor="cvv">Código CVV:</FormLabel>
            <FormInput
              {...register("cvv", {
                required: "Insira um cvv válido",
                maxLength: {
                  value: 3,
                  message: "CVVs não podem ter mais de 3 dígitos",
                },
              })}
              placeholder="000"
              style={errors.cvv ? { border: "1px solid red" } : {}}
              autoComplete="on"
            />
            {errors.cvv && (
              <span style={{ color: "red", fontSize: 12 }}>
                {errors.cvv.message}
              </span>
            )}
          </FormInputContainer>
        </DividedInputsContainer>
      </StyledForm>
    </ContentBox>
  );
};

export default Form;
