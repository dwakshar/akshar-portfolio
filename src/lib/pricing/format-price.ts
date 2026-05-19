export function formatPrice(
  amount: number,
  locale: string,
  currency: string,
  symbol: string
): string {
  if (currency === "INR") {
    const formatted = new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(amount);
    return `${symbol}${formatted}`;
  }

  const formatted = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(amount);
  return `${symbol}${formatted}`;
}
