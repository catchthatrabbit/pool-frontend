export type ChartItem = {
  time: string
  value: number
  hour: string
}

export type MiningInfo = {
  title: string
  description: string
  info: string[]
  command: string
  minerLink: string
}

export type ChartData = ChartItem[]
