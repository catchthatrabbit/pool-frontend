import React, { FC } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { colorVariables, fonts } from 'styles/variables'

interface IProps {
  data: []
}

const ChartLine: FC<IProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 25,
        }}
      >
        <Line
          type="monotone"
          dataKey="uv"
          stroke={colorVariables.apple}
          dot={false}
          strokeWidth={2}
        />
        <CartesianGrid vertical={false} stroke={colorVariables.spindle} />
        <XAxis
          dataKey="name"
          stroke={colorVariables.white}
          tick={{ fontSize: '9px', fontWeight: '600' }}
          padding={{ left: 38, right: 38 }}
        />
        <YAxis
          dataKey="pv"
          stroke={colorVariables.white}
          tick={{ fontSize: '9px', fontWeight: '600' }}
          axisLine={false}
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
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine
