import ContentSection from "../styles/ContentSectionStyle";
import Products from "../components/Products/components/Products";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Summary from "../components/Summary/components/Summary";
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
      <Summary />
      <MainButton to={"/pagamento"}>Seguir para o pagamento</MainButton>
    </>
  );
};

export default Bag;
