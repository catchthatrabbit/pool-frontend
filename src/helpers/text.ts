import numberToString from './number'
import secondsToTime from './seconds'
import siFormat from './siFormat'
import ago from './ago'
import currency from './currency'
import numberFormat from 'helpers/numberFormat'

type TypeNumber =
  | 'hashSpeed'
  | 'hash'
  | 'percent'
  | 'number'
  | 'euro'
  | 'xcb'
  | 'time'
  | 'ago'

export type InfoBoxItem = {
  title: string
  value: number
  type: TypeNumber
}
export type TextType = {
  value: string
  prefix: string
  suffix: string
}

const getHashText = (value: string | number): TextType => ({
  value: numberToString(siFormat(value, 2)),
  prefix: '',
  suffix: 'h/s',
})

const getPercentText = (value: string | number): TextType => ({
  value: numberToString(value),
  prefix: '',
  suffix: '%',
})

const getEuroText = (value: string | number): TextType => ({
  value: numberToString(currency(value, 'EUR')),
  prefix: '',
  suffix: '',
})

const getXCBText = (value: string | number): TextType => ({
  value: numberToString(currency(value)),
  prefix: '',
  suffix: '',
})

const getTimeText = (value: string | number): TextType => ({
  value: numberToString(new Date(value).toLocaleString()),
  prefix: '',
  suffix: '',
})

const getAgoText = (value: string): TextType => ({
  value: numberToString(ago(value, true)),
  prefix: '',
  suffix: '',
})

const getNumberText = (value: string | number): TextType => ({
  value: numberToString(numberFormat(value)),
  prefix: '',
  suffix: '',
})

const getDefaultText = (value: string | number): TextType => ({
  value: numberToString(value),
  prefix: '',
  suffix: '',
})

const textTypeMapper = {
  hashSpeed: getHashText,
  hash: getHashText,
  percent: getPercentText,
  euro: getEuroText,
  xcb: getXCBText,
  time: getTimeText,
  ago: getAgoText,
  number: getNumberText,
  default: getDefaultText,
}

export default function getText(type: TypeNumber, value): TextType {
  return textTypeMapper[type ?? 'default'](value)
}
