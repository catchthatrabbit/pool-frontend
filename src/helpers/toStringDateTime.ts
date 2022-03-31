import { MILLISECOND } from 'constants/time'

const TIME_OPTIONS = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
} as const

export const toStringDateTime = (timeStamp: number, options: Intl.DateTimeFormatOptions = TIME_OPTIONS) => {
  return (!timeStamp) ? '' : new Date(timeStamp * MILLISECOND).toLocaleString('en', options)
}
