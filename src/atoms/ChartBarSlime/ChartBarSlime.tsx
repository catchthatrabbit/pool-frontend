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
import checkData from 'helpers/chartDataTransform'

interface IProps {
  data: []
}

const ChartBarSlime: FC<IProps> = ({ data }) => {
  const chartData = checkData(data, 140)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={1600}
        height={214}
        data={chartData}
        barGap={1}
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 25,
        }}
        barCategoryGap={1}
      >
        <CartesianGrid vertical={false} stroke={colorVariables.spindle} />
        <XAxis
          dataKey="label"
          stroke={colorVariables.white}
          tick={{ fontSize: '9px', fontWeight: '600px' }}
          padding={{ left: 38, right: 38 }}
          tickCount={14}
          interval={'preserveStartEnd'}
        />
        <YAxis
          dataKey="data"
          stroke={colorVariables.white}
          tick={{ fontSize: '9px', fontWeight: '600px' }}
          axisLine={false}
          domain={[0, (dataMax) => dataMax + dataMax * 0.25]}
        >
          <Label
            value="Share"
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
        <Bar dataKey="data" fill={colorVariables.sky} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartBarSlime
