export default function moneyFormatter(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
