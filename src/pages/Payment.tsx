import ContentSection from "../styles/ContentSectionStyle";
import { ContentBox } from "../styles/ProductsStyles";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Summary from "../components/Summary";
import { MainButton } from "../components/Buttons";
import LoadingBox from "../helpers/Loading";

const Payment: React.FC = () => {
  const { isLoading } = useContext(ProductContext);

  LoadingBox(isLoading);

  return (
    <>
      <ContentSection>
        <ContentBox></ContentBox>
      </ContentSection>
      <Summary />
      <MainButton to={"/confirmacao"}>Finalizar pedido</MainButton>
    </>
  );
};

export default Payment;
