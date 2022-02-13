export default function currency(number, type='XCB', location='en-US') {
  return new Intl.NumberFormat(location, { style: 'currency', currency: type }).format(number)
}
