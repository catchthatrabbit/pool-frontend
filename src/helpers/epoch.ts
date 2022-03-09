import { INTERVALS, MILLISECOND } from 'constants/time'

/**
 * Given a date, return a string that describes how long ago that date was
 * @param date - The date to be converted to an interval.
 * @param [short=false] - If true, the unit will be shortened to the abbreviation.
 * @returns a string that contains the number of seconds that have passed since the date passed in.
 */
export default function epoch(date, short = false) {
  console.log(Date.parse(date))
  const seconds = Math.floor((Date.parse(date) - Date.now()) / MILLISECOND)

  for (const interval of INTERVALS) {
    if ((seconds / interval.unitInSeconds) > 1) {
      return `in ${Math.floor(seconds / interval.unitInSeconds)} ${interval.getUnit(short)}`
    }
  }
}
