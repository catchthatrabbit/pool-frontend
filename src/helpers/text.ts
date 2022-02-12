import numberToString from './number'
import secondsToTime from './seconds'
import siFormat from './siFormat'

type TypeNumber = 'hashSpeed' | 'hash' | 'percent' | 'number' | 'euro' | 'xcb' | 'time'

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
        suffix: '',
      }
    case 'percent':
      return {
        value: value,
        prefix: '',
        suffix: '%',
      }
    case 'euro':
      return {
        value: numberToString(value),
        prefix: '€',
        suffix: '',
      }
    case 'xcb':
      return {
        value: numberToString(value),
        prefix: '₡',
        suffix: ' XCB',
      }
    case 'time':
      return {
        value: numberToString(secondsToTime(value)),
        prefix: '',
        suffix: ' ago',
      }
    default:
      return {
        value: numberToString(value),
        prefix: '',
        suffix: '',
      }
  }
}
