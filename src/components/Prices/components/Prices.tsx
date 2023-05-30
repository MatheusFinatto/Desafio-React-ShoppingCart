import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";

import Discount from "../styles/Discount";
import StyledPrice from "../styles/StyledPrices";
import PriceLine from "../styles/PricesLine";

const Price: React.FC = () => {
  const { data } = useContext(ProductContext);
  const { items, total, shippingTotal, discount, subTotal } = data;

  return (
    <StyledPrice>
      <PriceLine>
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
      </PriceLine>
      <PriceLine>
        <span>Frete:</span>
        <span>
          {shippingTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </PriceLine>
      <PriceLine>
        <span>Desconto:</span>
        <Discount>
          {discount.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Discount>
      </PriceLine>
      <PriceLine>
        <span>Subtotal</span>
        <span>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </PriceLine>
    </StyledPrice>
  );
};

export default Price;
