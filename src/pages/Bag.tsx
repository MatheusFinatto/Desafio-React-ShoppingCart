import ContentSection from "../styles/ContentSectionStyle";
import Products from "../components/Products/components/Products";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Price from "../components/Prices/components/Prices";
import LoadingBox from "../components/Loading/components/Loading";
import MainButton from "../components/Buttons/components/MainButton";

const Bag: React.FC = () => {
  const { isLoading } = useContext(ProductContext);

  if (isLoading) return <LoadingBox />;

  return (
    <>
      <ContentSection>
        <Products />
      </ContentSection>
      <Price />
      <MainButton to={"/pagamento"}>Seguir para o pagamento</MainButton>
    </>
  );
};

export default Bag;
