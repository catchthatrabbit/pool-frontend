import numberToString from './number'
import secondsToTime from './seconds'
import siFormat from './siFormat'
import ago from './ago'
import currency from './currency'
import numberFormat from 'helpers/numberFormat'

type TypeNumber = 'hashSpeed' | 'hash' | 'percent' | 'number' | 'euro' | 'xcb' | 'time' | 'ago'

export type InfoBoxItemProps = {
  title: string
  value: TextType
}
export type TextType = {
  text: string
  prefix: string
  suffix: string
}

export const getHashText = (value: string | number, suffix: string = 'h/s'): TextType => ({
  text: numberToString(siFormat(value,2)),
  prefix: '',
  suffix,
})

export const getPercentText = (value: string | number): TextType => ({
  text: numberToString(value),
  prefix: '',
  suffix: '%',
})

export const getEuroText = (value: string | number): TextType => ({
  text: numberToString(currency(value,'EUR')),
  prefix: '',
  suffix: '',
})

export const getXCBText = (value: string | number): TextType => ({
  text: numberToString(currency(value)),
  prefix: '',
  suffix: '',
})

export const getTimeText = (value: string | number): TextType => ({
  text: numberToString(new Date(value).toLocaleString()),
  prefix: '',
  suffix: '',
})

export const getAgoText = (value: string): TextType => ({
  text: numberToString(ago(value, true)),
  prefix: '',
  suffix: '',
})

export const getNumberText = (value: string | number): TextType => ({
  text: numberToString(numberFormat(value)),
  prefix: '',
  suffix: '',
})

export const getDefaultText = (value: string | number): TextType => ({
  text: numberToString(value),
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
