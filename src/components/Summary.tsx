import { Discount, Line, StyledSummary } from "../styles/SummaryStyles";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { LoadingSpinner } from "../helpers/Loading";

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
      <Line>
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
      </Line>
      <Line>
        <span>Frete:</span>
        <span>
          {shippingTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </Line>
      <Line>
        <span>Desconto:</span>
        <Discount>
          {discount.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Discount>
      </Line>
      <Line>
        <span>Subtotal</span>
        <span>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </Line>
    </StyledSummary>
  );
};

export default Summary;
