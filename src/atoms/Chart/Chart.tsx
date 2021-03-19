import React, { FC } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'
import { colorVariables } from 'styles/variables'

type ChartType = 'line' | 'bar-spaced' | 'bar-slime'

interface IProps {
  data: []
  type: ChartType
}

const Chart: FC<IProps> = ({ data, type = 'line' }) => {
  return (
    <LineChart width={1600} height={300} data={data}>
      <Line
        type="monotone"
        dataKey="uv"
        stroke={colorVariables.apple}
        dot={false}
      />
      <CartesianGrid vertical={false} stroke={colorVariables.spindle} />
      <XAxis
        dataKey="name"
        stroke={colorVariables.white}
        tick={{ fontSize: '9px', fontWeight: '600px' }}
      />
      <YAxis
        dataKey="pv"
        stroke={colorVariables.white}
        tick={{ fontSize: '9px', fontWeight: '600px' }}
      />
    </LineChart>
  )
}

export default Chart
