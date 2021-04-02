import { StatsData, JumbotronData, TableData } from 'mockData/homePageData'

export default async function getData(url) {
  let data
  // const res = await fetch(baseUrl + url)
  // const data = await res.json()

  if (url === '/stats') {
    data = StatsData
  } else if (url === '/jumbotron') {
    data = JumbotronData
  } else if (url === '/table') {
    data = TableData
  }
  return data
}
