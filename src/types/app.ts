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

export type ChartData = ChartItem[];
