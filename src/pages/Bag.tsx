import ContentSection from "../styles/ContentSectionStyle";
import Products from "../components/Products";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Summary from "../components/Summary";
import { MainButton } from "../components/Buttons";
import LoadingBox from "../helpers/Loading";

const Bag: React.FC = () => {
  const { isLoading } = useContext(ProductContext);

  LoadingBox(isLoading);

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
