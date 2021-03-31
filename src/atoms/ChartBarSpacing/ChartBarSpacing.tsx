import React, { FC } from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import { colorVariables, fonts } from 'styles/variables'
import transformData from '../../helpers/chartDataTransform'

interface IProps {
  data: []
}

const ChartBarSpacing: FC<IProps> = ({ data }) => {
  const chartData = transformData(data)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={1600}
        height={300}
        data={chartData}
        barSize={5}
        barGap={25}
        barCategoryGap={50}
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 25,
        }}
      >
        <CartesianGrid vertical={false} stroke={colorVariables.spindle} />
        <XAxis
          dataKey="name"
          stroke={colorVariables.white}
          tick={{ fontSize: '9px', fontWeight: '600px' }}
        >
          <Label
            value="Date"
            offset={0}
            position="bottom"
            stroke={colorVariables.apple}
            fill={colorVariables.apple}
            style={{
              fontSize: '14px',
              fontFamily: fonts.primary,
            }}
          />
        </XAxis>
        <YAxis
          dataKey="data"
          stroke={colorVariables.white}
          tick={{ fontSize: '9px', fontWeight: '600px' }}
          axisLine={false}
        >
          <Label
            value="Core Coin"
            offset={0}
            position="left"
            angle={-90}
            stroke={colorVariables.apple}
            fill={colorVariables.apple}
            style={{
              fontSize: '14px',
              fontFamily: fonts.primary,
            }}
          />
        </YAxis>
        <Bar dataKey="prev" fill={colorVariables.apple} />
        <Bar dataKey="data" fill={colorVariables.apple} />
        <Bar dataKey="next" fill={colorVariables.apple} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartBarSpacing
