import { arrayOf } from 'prop-types';

type ChartItem = {
  time: string,
  value: number
}

export type MiningInfo = {
  title: string,
  description: string,
  info: string[],
  configLink: string,
  minerLink: string,
}

type BoxInfoItem = {
  title: string,
  value: string
}
export type BoxInfo = BoxInfoItem[];

export type ChartData = ChartItem[];
