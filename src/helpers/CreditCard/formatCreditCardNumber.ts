const formatCreditCardNumber = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "").slice(0, 16);
  let formattedValue = "";

  for (let i = 0; i < cleanedValue.length; i += 4) {
    formattedValue += cleanedValue.slice(i, i + 4) + " ";
  }

  return formattedValue.trim();
};

export default formatCreditCardNumber;
