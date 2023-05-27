import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Summary from "../components/Summary/components/Summary";
import LoadingBox from "../components/Loading";
import { useForm, SubmitHandler } from "react-hook-form";
import Form from "../components/Form/components/Form";
import { ICartaoCredito } from "../interfaces/CartaoCredito";
import MainButton from "../components/Buttons/components/MainButton";
import ContentSection from "../styles/ContentSectionStyle";

const Payment: React.FC = () => {
  const { isLoading } = useContext(ProductContext);
  LoadingBox(isLoading);

  const { register, handleSubmit } = useForm<ICartaoCredito>();
  const onSubmit: SubmitHandler<ICartaoCredito> = (data) => console.log(data);

  return (
    <>
      <ContentSection>
        <Form
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
        />
      </ContentSection>
      <Summary />
      <MainButton onClick={handleSubmit(onSubmit)} to={"/confirmacao"}>
        Finalizar pedido
      </MainButton>
    </>
  );
};

export default Payment;
