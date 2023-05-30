import ContentSection from "../styles/ContentSectionStyle";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import Products from "../components/Products/components/Products";
import Price from "../components/Prices/components/Prices";
import LoadingBox from "../components/Loading/components/Loading";
import ReturnButton from "../components/Buttons/components/ReturnButton";
import Summary from "../components/Summary/components/Summary";
import { PaymentContext } from "../contexts/PaymentContext";

const Confirmation: React.FC = () => {
  const { isLoading } = useContext(ProductContext);
  const { paymentData } = useContext(PaymentContext);

  if (isLoading) return <LoadingBox />;

  return (
    <>
      <ContentSection>
        <Summary data={paymentData} />
        <Products isConfirmation />
      </ContentSection>
      <Price />
      <ReturnButton to={"/sacola"}>Voltar ao início do protótipo</ReturnButton>
    </>
  );
};

export default Confirmation;
