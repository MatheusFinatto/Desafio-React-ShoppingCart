import { ICreditCard } from "../../../interfaces/ICreditCard";
import ContentBox from "../../Products/styles/ContentBox";

type SummaryProps = {
  data: ICreditCard;
};

const hideCardNumber = (cardNumber: string) => {
  return "****.".repeat(3) + cardNumber.slice(-4);
};

const Summary = ({ data }: SummaryProps) => {
  const { cardName, cardNumber, expirationDate, cvv } = data;

  if (!cardName || !cardNumber || !expirationDate || !cvv) {
    return (
      <ContentBox>
        <div style={{ textAlign: "center", margin: "16px 20px 24px 20px" }}>
          <h2>Compra efetuada com sucesso</h2>
          <p>****.****.****.4545</p>
          <p>Bruce Wayne</p>
          <p>02/2027</p>
        </div>
      </ContentBox>
    );
  }

  return (
    <ContentBox>
      <div style={{ textAlign: "center", margin: "16px 20px 24px 20px" }}>
        <h2>Compra efetuada com sucesso</h2>
        <p>{hideCardNumber(cardNumber)}</p>
        <p>{cardName}</p>
        <p>{expirationDate}</p>
      </div>
    </ContentBox>
  );
};

export default Summary;
