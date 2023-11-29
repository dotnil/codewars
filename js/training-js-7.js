/* Training JS #7: if..else and ternary operator

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
number of hotdogs | price per unit (cents)
n < 5               100
n >= 5 and n < 10   95
n >= 10             95
*/

export const saleHotdogs = num => {
  if (num < 5) return num * 100
  if (num >= 5 && num < 10) return num * 95

  return num * 90
}
