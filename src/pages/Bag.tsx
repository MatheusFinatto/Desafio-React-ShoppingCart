import ContentSection from "../styles/ContentSectionStyle";
import Products from "../components/Products/components/Products";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Price from "../components/Prices/components/Prices";
import LoadingBox from "../components/Loading/components/Loading";
import Button from "../components/Buttons/components/Button";

const Bag: React.FC = () => {
  const { isLoading } = useContext(ProductContext);

  if (isLoading) return <LoadingBox />;

  return (
    <>
      <ContentSection>
        <Products />
      </ContentSection>
      <Price />
      <Button to={"/pagamento"} inputColor="#9222dc">
        Seguir para o pagamento
      </Button>
    </>
  );
};

export default Bag;
