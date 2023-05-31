import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";

import Discount from "../styles/Discount";
import StyledPrice from "../styles/StyledPrices";
import PriceLine from "../styles/PricesLine";
import moneyFormatter from "../../../helpers/moneyFormatter";

const Price: React.FC = () => {
  const { data } = useContext(ProductContext);
  const { items, total, shippingTotal, discount, subTotal } = data;

  return (
    <StyledPrice>
      <PriceLine>
        <span>
          Produtos: ({items.length}
          {items.length === 1 ? " item" : " itens"})
        </span>
        <span>{moneyFormatter(subTotal)}</span>
      </PriceLine>
      <PriceLine>
        <span>Frete:</span>
        <span>{moneyFormatter(shippingTotal)}</span>
      </PriceLine>
      <PriceLine>
        <span>Desconto:</span>
        <Discount>{moneyFormatter(discount)}</Discount>
      </PriceLine>
      <PriceLine>
        <span>Subtotal</span>
        <span>{moneyFormatter(total)}</span>
      </PriceLine>
    </StyledPrice>
  );
};

export default Price;
