import { paymentsPageConfig, tablesConfig } from 'config';
import { unitsConstant } from 'constant';
import { getNumberText } from 'helpers/text';
import { toStringDateTime } from 'helpers/toStringDateTime';

import type {  InfoBoxItemProps } from 'helpers/text';
import type { QueryFunctionContext } from 'react-query';

/**
 * It takes a data object and returns an array of  InfoBoxItemProps objects
 * @param data - the data object that is passed to the component
 * @returns An array of objects with title and value properties.
 */
export const hydratePaymentsInfoBox = (data: any):  InfoBoxItemProps[] => {
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
    amount: (payment.amount / unitsConstant.NUCLE),
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
    status: number
  } = {
    items: [],
    pages: 0,
    status: 500,
  }

  try {
    const response = await fetch(`${ pool }/payments?limit=${ paymentsPageConfig.PAYMENTS_TABLE.rowCount }&offset=${ (page - 1) * paymentsPageConfig.PAYMENTS_TABLE.rowCount }`)
    result.status = response.status
    const data = await response.json()

    result.items = hydratePayments(data.payments),
    result.pages = Math.ceil(data.paymentsTotal / paymentsPageConfig.PAYMENTS_TABLE.rowCount)
    result.pages = result.pages < tablesConfig.MAX_PAGES ? result.pages : tablesConfig.MAX_PAGES

  } catch (error) {
    console.error(error)
  }

  return result
}

export const getPaymentsQueryFn = ({ queryKey }: QueryFunctionContext<[ string, string, number ]>) => {
  const [ _, pool, page ] = queryKey
  return getPayments(pool, page)
}


export const getPaymentsInfo = async (pool: string) => {
  let result:  InfoBoxItemProps[]

  try {
    const response = await fetch(`${ pool }/payments_stats`)
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