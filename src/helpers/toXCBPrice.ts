export const toXCBPrice = (value: number) => {
  return (value / 10 ** value?.toString().length) * 10
}
