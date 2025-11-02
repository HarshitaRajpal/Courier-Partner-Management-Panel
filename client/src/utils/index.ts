export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);

  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function formatCurrency(
  amount: number,
  locale = "en-IN",
  currency = "INR"
): string {
  if (isNaN(amount)) return "₹0.00";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
