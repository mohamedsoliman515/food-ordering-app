export const formatCurrency = (
  number: number,
  locale = "en-US",
  currency = "USD"
) => {
  return new Intl.NumberFormat(locale, {
    // Intl is internationalization API built in nextjs
    style: "currency",
    currency,
  }).format(number);
};
