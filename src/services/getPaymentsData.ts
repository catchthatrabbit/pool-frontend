import { AGGREGATE_API_ENDPOINTS } from 'config/api-endpoints.config'
import {
  aggregateNumbers,
  fetchAllSettled,
  mergeArraysAndObjects,
  reduceList,
} from 'helpers'
import { getNumberText } from 'helpers/text'
import { toStringDateTime } from 'helpers/toStringDateTime'
import { toXCBPrice } from 'helpers/toXCBPrice'

import type { Column } from '@components/Table/Table'
import type { InfoBoxItem } from 'helpers/text'

const hydratePaymentsInfoBox = (data): InfoBoxItem[] => {
  return [
    { title: 'Sent payments', value: getNumberText(data.paymentsTotal) },
    //{ title: 'XCB Price', value: getEuroText(200) }, // TODO: activate after listing
  ]
}

const hydratePaymentTableData = (payments) => {
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

const hydratePaymentTableColumns = (): Column[] => {
  return [
    {
      name: 'Time',
      id: 'time',
      type: 'time',
    },
    {
      name: 'Amount',
      id: 'amount',
      type: 'xcb',
    },
    {
      name: 'Address',
      id: 'address',
      type: 'address',
    },
    {
      name: 'Tx id',
      id: 'tx id',
      type: 'tx',
    },
  ]
}

/**
 * It fetches the data from the API, and then hydrates the data into the correct format
 * @returns an object with two keys:
 * - paymentsInfoBox: a hydrated version for the payments InfoBox component
 * - payments: a hydrated version for the payment Table component
 */
export const getPaymentsData = async () => {
  const allPayments = await fetchAllSettled(
    AGGREGATE_API_ENDPOINTS.map((endpoint) => endpoint + 'payments'),
  )

  const aggregator = aggregateNumbers(['paymentsAmount', 'paymentsTotal'])
  const info = reduceList(allPayments, aggregator)
  const { payments } = reduceList<any>(allPayments, mergeArraysAndObjects)

  return {
    paymentsInfoBox: hydratePaymentsInfoBox(info),
    paymentTable: {
      data: hydratePaymentTableData(payments),
      columns: hydratePaymentTableColumns(),
    },
  }
}
