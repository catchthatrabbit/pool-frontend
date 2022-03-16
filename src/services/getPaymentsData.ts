import { getEuroText, getNumberText } from 'helpers/text';
import { toStringDateTime } from 'helpers/toStringDateTime';
import { toXCBPrice } from 'helpers/toXCBPrice';

import type { Column } from '@components/Table/Table'
import type { InfoBoxItem } from 'helpers/text'

const hydratePaymentsInfoBox = (data): InfoBoxItem[] => {
  return [
    { title: 'Sent payments', value: getNumberText(data.paymentsTotal) },
    //{ title: 'XCB Price', value: getEuroText(200) }, // TODO: raisty activate after listing
  ]
}

const hydratePaymentTableData = (payments) => {
  const paymentMapper = (payment) => ({
    'tx id': payment.tx,
    address: payment.address,
    amount: toXCBPrice(payment.amount),
    time: toStringDateTime(payment.timestamp),
  })

  return payments.map(paymentMapper)
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
  const result = await fetch(process.env.API_ENDPOINT + 'payments.json')
  const data = await result.json()

  return {
    paymentsInfoBox: hydratePaymentsInfoBox(data),
    paymentTable: {
      data: hydratePaymentTableData(data.payments),
      columns: hydratePaymentTableColumns(),
    },
  }
}
