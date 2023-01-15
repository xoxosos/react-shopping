/*
 * @Author: LinRenJie
 * @Date: 2023-01-14 20:28:37
 * @LastEditTime: 2023-01-15 12:26:00
 * @Description: 
 * @FilePath: /react/src/utilities/fomatCurrency.ts
 * @Email: xoxosos666@gmail.com
 */
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency'
})
export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}