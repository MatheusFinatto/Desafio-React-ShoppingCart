import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";

import Discount from "../styles/Discount";
import StyledSummary from "../styles/StyledSummary";
import SummaryLine from "../styles/SummaryLine";
import LoadingIconSVG from "../../Loading/styles/LoadingIconSVG";

const Summary: React.FC = () => {
  const { data } = useContext(ProductContext);
  const { items, total, shippingTotal, discount, subTotal } = data;

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
