import { StatsData, JumbotronData, TableData } from 'mockData/homePageData'
import path from 'path'
import { promises as fs } from 'fs'

async function getFile() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = await fs.readdir(postsDirectory)

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename)
    return await fs.readFile(filePath, 'utf8')
  })
}

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
