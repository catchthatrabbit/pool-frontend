export default function iban(address) {
  const iban = address.match(/.{1,4}/g)
  return iban.join(' ')
}
