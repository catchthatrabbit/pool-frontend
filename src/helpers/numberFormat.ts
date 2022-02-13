export default function numberFormat(number, location='en-US') {
  return new Intl.NumberFormat(location).format(number)
}
