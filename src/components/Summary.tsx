import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { LoadingSpinner } from "../helpers/Loading";
import StyledSummary from "../styles/Summary/StyledSummary";
import SummaryLine from "../styles/Summary/SummaryLine";
import Discount from "../styles/Summary/Discount";

const Summary: React.FC = () => {
  const { data, isLoading } = useContext(ProductContext);
  const { items, total, shippingTotal, discount, subTotal } = data;

  if (isLoading) {
    return (
      <StyledSummary
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingSpinner />
      </StyledSummary>
    );
  }

  return (
    <StyledSummary>
      <SummaryLine>
        <span>
          Produtos: ({data.items.length}
          {items.length === 1 ? " item" : " itens"})
        </span>
        <span>
          {subTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </SummaryLine>
      <SummaryLine>
        <span>Frete:</span>
        <span>
          {shippingTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </SummaryLine>
      <SummaryLine>
        <span>Desconto:</span>
        <Discount>
          {discount.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Discount>
      </SummaryLine>
      <SummaryLine>
        <span>Subtotal</span>
        <span>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </SummaryLine>
    </StyledSummary>
  );
};

export default Summary;
