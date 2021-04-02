import numberToString from './number'

type TypeNumber = 'hashSpeed' | 'hash' | 'percent' | 'number' | 'euro'

export type InfoBoxItem = {
  title: string
  value: number
  type: TypeNumber
}
export type TextType = {
  value: number
  metric: string
  prefix: string
  suffix: string
}

export default function getText(type, value): TextType {
  switch (type) {
    case 'hashSpeed':
    case 'hash':
      let metric = 'GH'
      let unit = 1000

      if (value / unit >= 1000) {
        metric = 'TH'
        unit = 1000000
      }
      return {
        value: value / unit,
        metric: metric,
        prefix: '',
        suffix: '',
      }
    case 'percent':
      return {
        value: value,
        metric: '',
        prefix: '',
        suffix: '%',
      }
    case 'euro':
      return {
        value: numberToString(value),
        metric: '',
        prefix: '€',
        suffix: '',
      }
    default:
      return {
        value: numberToString(value),
        metric: '',
        prefix: '',
        suffix: '',
      }
  }
}
