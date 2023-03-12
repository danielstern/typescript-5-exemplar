export enum Locale {
  USD,
  CAD
}
export const CalculateTicketPrice = (
  locale = Locale.USD,
  isPremiumMember = false,
  base = 100,
  quantityPurchased = 1
) => {
  if (locale !== Locale.USD) base *= 1.15
  if (isPremiumMember) base *= 0.75
  if (quantityPurchased > 1) base *= 0.9
  if (quantityPurchased >= 5) base *= 0.75
  return base
}