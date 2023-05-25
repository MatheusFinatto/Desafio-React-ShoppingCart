import styled from "styled-components";
import { ICart } from "../interfaces/Item";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  justify-content: space-between;
  width: 90%;
  height: 22px;
  font-weight: 400;
  line-height: 16px;

  &:last-of-type {
    font-weight: 700;
  }
  &:last-of-type span {
    font-size: 16px;
  }
`;

const StyledSummary = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  padding: 0px;
  gap: 8px;
`;

const Discount = styled.span`
  font-weight: 700;
  color: #9222dc;
`;

type SummaryProps = {
  data: ICart;
  loading: boolean;
};

const Summary: React.FC<SummaryProps> = ({ data, loading }: SummaryProps) => {
  const { items, total, shippingTotal, discount, subTotal } = data;

  if (loading) {
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
        <span>Frete</span>
        <span>
          {shippingTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </Line>
      <Line>
        <span>Desconto</span>
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
      <Button>Seguir para o pagamento</Button>
    </StyledSummary>
  );
};

export default Summary;
