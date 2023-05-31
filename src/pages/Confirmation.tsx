import ContentSection from "../styles/ContentSectionStyle";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import Products from "../components/Products/components/Products";
import Price from "../components/Prices/components/Prices";
import LoadingBox from "../components/Loading/components/Loading";
import Summary from "../components/Summary/components/Summary";
import { PaymentContext } from "../contexts/PaymentContext";
import Button from "../components/Buttons/components/Button";

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
      <Button to={"/sacola"} inputColor="#000">
        Voltar ao início do protótipo
      </Button>
    </>
  );
};

export default Confirmation;
