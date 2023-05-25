import ContentSection from "../styles/ContentSectionStyle";

import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import Products from "../components/Products";
import Summary from "../components/Summary";
import { ReturnButton } from "../components/Buttons";
import LoadingBox from "../helpers/Loading";

const Confirmation: React.FC = () => {
  const { isLoading } = useContext(ProductContext);

  LoadingBox(isLoading);

  return (
    <>
      <ContentSection>
        <Products />
      </ContentSection>
      <Summary />
      <ReturnButton to={"/sacola"}>Voltar ao início do protótipo</ReturnButton>
    </>
  );
};

export default Confirmation;
