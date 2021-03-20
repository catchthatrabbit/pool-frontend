import React, { FC } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import { colorVariables } from 'styles/variables'
import Text from '../Text/Text'

type ChartType = 'line' | 'bar-spaced' | 'bar-slime'

interface IProps {
  data: []
  type: ChartType
}

const Chart: FC<IProps> = ({ data, type = 'bar-spaced' }) => {
  if (type === 'line') {
    return (
      <ResponsiveContainer width="70%" height="100%">
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
          >
            <Label
              value="Date"
              offset={0}
              position="bottom"
              stroke={colorVariables.apple}
            />
          </XAxis>
          <YAxis
            dataKey="pv"
            stroke={colorVariables.white}
            tick={{ fontSize: '9px', fontWeight: '600px' }}
          >
            <Label
              value="Share"
              offset={0}
              position="left"
              stroke={colorVariables.apple}
            />
          </YAxis>
        </LineChart>
      </ResponsiveContainer>
    )
  } else if (type === 'bar-spaced') {
    return (
      <ResponsiveContainer width="70%" height="100%">
        <BarChart
          width={1600}
          height={300}
          data={data}
          barGap="2"
          barSize="5px"
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
            />
          </XAxis>
          <YAxis
            dataKey="pv"
            stroke={colorVariables.white}
            tick={{ fontSize: '9px', fontWeight: '600px' }}
          >
            <Label
              value="Share"
              offset={0}
              position="left"
              angle={-90}
              stroke={colorVariables.apple}
            />
          </YAxis>
          <Bar dataKey="pv" fill={colorVariables.apple} />
        </BarChart>
      </ResponsiveContainer>
    )
  } else {
    return (
      <ResponsiveContainer width="70%" height="100%">
        <BarChart
          width={1600}
          height={300}
          data={data}
          barGap="1"
          barSize="5px"
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
            />
          </XAxis>
          <YAxis
            dataKey="pv"
            stroke={colorVariables.white}
            tick={{ fontSize: '9px', fontWeight: '600px' }}
          >
            <Label
              value="Share"
              offset={0}
              position="left"
              stroke={colorVariables.apple}
            />
          </YAxis>
          <Bar dataKey="pv" fill={colorVariables.sky} />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export default Chart
