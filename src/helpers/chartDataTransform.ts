type chartDataType = {
  name: string
  prev: number
  data: number
  next: number
}
const monthShortNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

function transformDate(date) {
  const time = new Date(date)
  const day = time.getDate()
  const month = time.getMonth()
  return day + '.' + monthShortNames[month]
}

export default function transformData(data) {
  let dataConverted: chartDataType[] = []
  for (let i = 0; i < data.length; i += 3) {
    if (data.length - i > 3) {
      dataConverted.push({
        name: transformDate(data[i + 1].name),
        prev: data[i].data,
        data: data[i + 1].data,
        next: data[i + 2].data,
      })
    } else if (data.length - i === 2) {
      dataConverted.push({
        name: transformDate(data[i + 1].name),
        prev: data[i].data,
        data: data[i + 1].data,
        next: 0,
      })
    } else if (data.length - i === 1) {
      dataConverted.push({
        name: transformDate(data[i].name),
        prev: data[i].data,
        data: 0,
        next: 0,
      })
    }
  }
  return dataConverted
}
