import ContentSection from "../styles/Content/ContentSectionStyle";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Summary from "../components/Summary";

import LoadingBox from "../helpers/Loading";
import { useForm, SubmitHandler } from "react-hook-form";
import Form from "../components/Form";
import { ICartaoCredito } from "../interfaces/CartaoCredito";
import MainButton from "../components/Buttons/MainButton";
import ContentBox from "../styles/Products/ContentBox";

const Payment: React.FC = () => {
  const { isLoading } = useContext(ProductContext);
  LoadingBox(isLoading);

  const { register, handleSubmit } = useForm<ICartaoCredito>();
  const onSubmit: SubmitHandler<ICartaoCredito> = (data) => console.log(data);

  return (
    <>
      <ContentSection>
        <ContentBox>
          <Form
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
          />
        </ContentBox>
      </ContentSection>
      <Summary />
      <MainButton onClick={handleSubmit(onSubmit)} to={"/confirmacao"}>
        Finalizar pedido
      </MainButton>
    </>
  );
};

export default Payment;
