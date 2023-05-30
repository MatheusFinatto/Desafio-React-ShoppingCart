import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Price from "../components/Prices/components/Prices";
import LoadingBox from "../components/Loading/components/Loading";
import { useForm, SubmitHandler } from "react-hook-form";
import Form from "../components/Form/components/Form";
import { ICreditCard } from "../interfaces/ICreditCard";
import MainButton from "../components/Buttons/components/MainButton";
import ContentSection from "../styles/ContentSectionStyle";
import { PaymentContext } from "../contexts/PaymentContext";
import { useNavigate } from "react-router-dom";

const Payment: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreditCard>();

  const { isLoading } = useContext(ProductContext);
  const { updatePaymentData } = useContext(PaymentContext);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ICreditCard> = (data) => {
    const paymentData = {
      cardNumber: data.cardNumber,
      cardName: data.cardName,
      expirationDate: data.expirationDate,
      cvv: data.cvv,
    };
    updatePaymentData(paymentData);
    navigate("/confirmacao");
  };

  if (isLoading) return <LoadingBox />;
  return (
    <>
      <ContentSection>
        <Form
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </ContentSection>
      <Price />
      <MainButton onClick={handleSubmit(onSubmit)} to={"/confirmacao"}>
        Finalizar pedido
      </MainButton>
    </>
  );
};

export default Payment;
