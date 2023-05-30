import { UseFormRegister } from "react-hook-form";
import formatCreditCardNumber from "./formatCreditCardNumber";
import { ICreditCard } from "../../interfaces/ICreditCard";

const handleCreditCardNumberChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  register: UseFormRegister<ICreditCard>
) => {
  const formattedValue = formatCreditCardNumber(e.target.value);
  e.target.value = formattedValue;
  register("cardNumber").onChange(e);
};

export default handleCreditCardNumberChange;
