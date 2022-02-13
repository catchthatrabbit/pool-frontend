import numberToString from './number'
import secondsToTime from './seconds'
import siFormat from './siFormat'
import ago from './ago'
import currency from './currency'
import numberFormat from 'helpers/numberFormat'

type TypeNumber = 'hashSpeed' | 'hash' | 'percent' | 'number' | 'euro' | 'xcb' | 'time' | 'ago'

export type InfoBoxItem = {
  title: string
  value: number
  type: TypeNumber
}
export type TextType = {
  value: number
  prefix: string
  suffix: string
}

export default function getText(type, value): TextType {
  switch (type) {
    case 'hashSpeed':
    case 'hash':
      return {
        value: numberToString(siFormat(value,2)),
        prefix: '',
        suffix: 'h/s',
      }
    case 'percent':
      return {
        value: value,
        prefix: '',
        suffix: '%',
      }
    case 'euro':
      return {
        value: numberToString(currency(value,'EUR')),
        prefix: '',
        suffix: '',
      }
    case 'xcb':
      return {
        value: numberToString(currency(value)),
        prefix: '',
        suffix: '',
      }
    case 'time':
      const d = new Date(value)
      return {
        value: numberToString(d.toLocaleString()),
        prefix: '',
        suffix: '',
      }
    case 'ago':
      return {
        value: numberToString(ago(value, true)),
        prefix: '',
        suffix: '',
      }
    case 'number':
      return {
        value: numberToString(numberFormat(value)),
        prefix: '',
        suffix: '',
      }
    default:
      return {
        value: numberToString(value),
        prefix: '',
        suffix: '',
      }
  }
}
