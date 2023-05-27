import ContentSection from "../styles/Content/ContentSectionStyle";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import Products from "../components/Products";
import Summary from "../components/Summary";
import LoadingBox from "../helpers/Loading";
import ReturnButton from "../components/Buttons/ReturnButton";

const Confirmation: React.FC = () => {
  const { isLoading } = useContext(ProductContext);

  LoadingBox(isLoading);

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
