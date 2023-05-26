import { UseFormRegister } from "react-hook-form";
import formatCreditCardNumber from "./formatCreditCardNumber";
import { ICartaoCredito } from "../../interfaces/CartaoCredito";

const handleCreditCardNumberChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  register: UseFormRegister<ICartaoCredito>
) => {
  const formattedValue = formatCreditCardNumber(e.target.value);
  e.target.value = formattedValue;
  register("cardNumber").onChange(e);
};

export default handleCreditCardNumberChange;
