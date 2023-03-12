import { CalculateTicketPrice, Locale } from './index'

console.table({
  "base" : CalculateTicketPrice(),
  "group discount": CalculateTicketPrice(
    Locale.USD,
    false,
    100,
    5
  )
})