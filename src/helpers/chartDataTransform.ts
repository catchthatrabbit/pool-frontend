type chartDataType = {
  label: string
  data: number
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
  if (day < 10) {
    return '0' + day + '.' + monthShortNames[month]
  } else {
    return day + '.' + monthShortNames[month]
  }
}

function refillData(data, maxData) {
  let lastDate = new Date(data[data.length - 1].label)
  const length = data.length
  for (let i = 0; i < maxData - length; i++) {
    lastDate.setDate(lastDate.getDate() + 1)
    data.push({
      label: transformDate(lastDate),
      data: 0,
    })
  }
  return data
}
function transformDataDate(data) {
  let dataConverted: chartDataType[] = []
  for (let i = 0; i < data.length; i++) {
    dataConverted.push({
      label: transformDate(data[i].label),
      data: data[i].data,
    })
  }
  return dataConverted
}
export default function checkData(data, maxData) {
  const transformData = transformDataDate(data)
  if (transformData.length < maxData) {
    return refillData(transformData, maxData)
  } else if (transformData.length > maxData) {
    return transformData.splice(0, maxData)
  } else {
    return transformData
  }
}
