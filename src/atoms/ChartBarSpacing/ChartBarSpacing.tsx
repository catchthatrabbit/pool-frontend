import React, { FC } from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { colorVariables, fonts } from 'styles/variables'
import checkData from 'helpers/chartDataTransform'

interface IProps {
  data: []
}

const ChartBarSpacing: FC<IProps> = ({ data }) => {
  const chartData = checkData(data, 57)
  console.log(chartData)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={chartData}
        barSize={5}
        barCategoryGap={25}
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 25,
        }}
      >
        <CartesianGrid vertical={false} stroke={colorVariables.spindle} />
        <XAxis
          dataKey="label"
          stroke={colorVariables.white}
          tick={{ fontSize: '9px', fontWeight: '600' }}
          padding={{ left: 38, right: 27 }}
          interval={'preserveStart'}
        />
        <YAxis
          stroke={colorVariables.white}
          tick={{ fontSize: '10px', fontWeight: '600' }}
          axisLine={false}
          tickCount={5}
          minTickGap={1}
          domain={['auto', (dataMax) => dataMax + dataMax * 0.25]}
          type="number"
        >
          <Label
            value="Core Coin"
            offset={0}
            dx={-30}
            position="center"
            angle={-90}
            stroke={colorVariables.apple}
            fill={colorVariables.apple}
            style={{
              fontSize: '14px',
              fontFamily: fonts.primary,
            }}
          />
        </YAxis>
        <Tooltip
          contentStyle={{
            borderColor: colorVariables.gunPowder,
            backgroundColor: colorVariables.woodsmoke,
          }}
          cursor={{
            stroke: colorVariables.gunPowder,
            fill: colorVariables.gunPowder,
          }}
        />
        <Bar dataKey="data" fill={colorVariables.apple} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartBarSpacing
