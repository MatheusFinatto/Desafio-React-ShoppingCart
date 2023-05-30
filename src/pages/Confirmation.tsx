import ContentSection from "../styles/ContentSectionStyle";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import Products from "../components/Products/components/Products";
import Summary from "../components/Summary/components/Summary";
import LoadingBox from "../components/Loading/components/Loading";
import ReturnButton from "../components/Buttons/components/ReturnButton";

const Confirmation: React.FC = () => {
  const { isLoading } = useContext(ProductContext);

  if (isLoading) return <LoadingBox />;

  return (
    <>
      <ContentSection>
        <Products isConfirmation />
      </ContentSection>
      <Summary />
      <ReturnButton to={"/sacola"}>Voltar ao início do protótipo</ReturnButton>
    </>
  );
};

export default Confirmation;
