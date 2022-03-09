export const MILLISECOND = 1_000 as const
export const SECOND = 1 as const
export const MINUTE_IN_SECONDS = 60 as const
export const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS
export const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS
export const MONTH_IN_SECONDS = 30 * DAY_IN_SECONDS
export const YEAR_IN_SECONDS = 12 * MONTH_IN_SECONDS

export const INTERVALS = [
  { unitInSeconds: YEAR_IN_SECONDS, getUnit: (short: boolean) => short ? 'y' : 'years' },
  { unitInSeconds: MONTH_IN_SECONDS, getUnit: (short: boolean) => short ? 'mth' : 'months' },
  { unitInSeconds: DAY_IN_SECONDS, getUnit: (short: boolean) => short ? 'd' : 'days' },
  { unitInSeconds: HOUR_IN_SECONDS, getUnit: (short: boolean) => short ? 'h' : 'hours' },
  { unitInSeconds: MINUTE_IN_SECONDS, getUnit: (short: boolean) => short ? 'min' : 'minutes' },
  { unitInSeconds: SECOND, getUnit: (short: boolean) =>  short ? 's' : 'seconds' },
] as const