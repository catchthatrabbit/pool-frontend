import { StatsData, JumbotronData, TableData } from 'mockData/homePageData'

export default async function defaultGetStaticProps() {
  let data
  // const res = await fetch(baseUrl + url)
  // const data = await res.json()
  const statsData = StatsData
  const jumbotronData = JumbotronData
  const tableData = TableData

  return {
    props: {
      statsData,
      jumbotronData,
      tableData,
    },
    revalidate: 1,
  }
}
