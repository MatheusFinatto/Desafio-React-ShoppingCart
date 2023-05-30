import { createContext, useState } from "react";

const initialPaymentState = {
  cardNumber: "",
  cardName: "",
  expirationDate: "",
  cvv: "",
};

type PaymentContextType = {
  paymentData: typeof initialPaymentState;
  updatePaymentData: (data: typeof initialPaymentState) => void;
};

export const PaymentContext = createContext<PaymentContextType>({
  paymentData: initialPaymentState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updatePaymentData: () => {},
});

type Props = {
  children: React.ReactNode;
};

const PaymentContextProvider: React.FC<Props> = ({ children }) => {
  const [paymentData, setPaymentData] = useState(initialPaymentState);

  const updatePaymentData = (data: typeof initialPaymentState) => {
    setPaymentData(data);
  };

  return (
    <PaymentContext.Provider value={{ paymentData, updatePaymentData }}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContextProvider;
