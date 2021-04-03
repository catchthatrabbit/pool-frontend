import {
  StatsData,
  JumbotronData,
  TableData,
  MiningInfoData,
  InfoCardData,
  ChartLineData,
  ChartBarSlimeData,
  InfoStatsBoxData,
} from 'mockData/homePageData'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
  address: string
}
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
export async function getStaticPropsAddress(context) {
  const { address } = context.params as IParams
  // const props = fetch(`/api/${address}`)
  return {
    props: {
      address,
      MiningInfoData,
      InfoCardData,
      ChartLineData,
      ChartBarSlimeData,
      InfoStatsBoxData,
      TableData,
    },
  }
}
export async function defaultGetStaticPaths() {
  const paths = TableData.data.map(({ miner }) => {
    return {
      params: { address: miner.slice(2, miner.length) },
    }
  })
  return { paths, fallback: true }
}
