import { getNumberText } from 'helpers/text';
import { toStringDateTime } from 'helpers/toStringDateTime';
import { toXCBPrice } from 'helpers/toXCBPrice';

import type { InfoBoxItem } from 'helpers/text';
import type { QueryFunctionContext } from 'react-query';

/**
 * It takes a data object and returns an array of InfoBoxItem objects
 * @param data - the data object that is passed to the component
 * @returns An array of objects with title and value properties.
 */
export const hydratePaymentsInfoBox = (data: any): InfoBoxItem[] => {
  return [
    { title: 'Sent payments', value: getNumberText(data.paymentsTotal) },
    //{ title: 'XCB Price', value: getEuroText(200) }, // TODO: activate after listing
  ]
}

/**
 * It takes an array of payments, sorts them by timestamp, and then maps them to a new array of objects
 * with the block's tx id, address, amount, time
 * @param payments - An array of payment objects.
 * @returns An array of objects.
 */
export const hydratePayments = (payments: any[]) => {
  if (!payments?.length) return []

  const paymentMapper = (payment) => ({
    'tx id': payment.tx,
    address: payment.address,
    amount: toXCBPrice(payment.amount),
    time: toStringDateTime(payment.timestamp),
  })

  return payments
    .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
    .map(paymentMapper)
}

export const getPayments = async (pool: string, page: number) => {
  let result: {
    items: any[]
    pages: number
  }

  try {
    const response = await fetch(`${ pool }/payments?limit=${ 30 }&offset=${ (page - 1) * 30 }`)
    const data = await response.json()
    result = {
      items: hydratePayments(data.payments),
      pages: Math.ceil(data.paymentsTotal / 30),
    }

  } catch (error) {
    console.error(error);
    result = {
      items: [],
      pages: 0,
    }
  }

  return result
}

export const getPaymentsQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string, number ]>) => {
  const [ _, pool, page ] = queryKey
  return getPayments(pool, page)
}


export const getPaymentsInfo = async (pool: string) => {
  let result: InfoBoxItem[]

  try {
    const response = await fetch(`${ pool }/payments?limit=1&offset=0`)
    const data = await response.json()
    result = hydratePaymentsInfoBox(data)

  } catch (error) {
    console.error(error);
    result = []
  }

  return result
}

export const getPaymentsInfoQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string ]>) => {
  const [ _, pool ] = queryKey
  return getPaymentsInfo(pool)
}