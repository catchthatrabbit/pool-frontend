import { MILLISECOND } from 'constants/time'

const TIME_OPTIONS = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
} as const

export const toStringDateTime = (d) => {
  return new Date(d * MILLISECOND).toLocaleString('en', TIME_OPTIONS)
}
