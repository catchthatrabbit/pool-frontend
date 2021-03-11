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

export type TypeNumber = 'hashSpeed' | 'hash' | 'percent' | 'number' | 'euro';

type BoxInfoItem = {
  title: string,
  value: number,
  type: TypeNumber,
}
export type BoxInfo = BoxInfoItem[];

export type ChartData = ChartItem[];
