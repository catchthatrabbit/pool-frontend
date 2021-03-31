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

interface IProps {
  data: []
}

const ChartBarSpacing: FC<IProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="70%" height="100%">
      <BarChart
        width={1600}
        height={300}
        data={data}
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
          dataKey="pv"
          stroke={colorVariables.white}
          tick={{ fontSize: '9px', fontWeight: '600px' }}
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
        <Bar dataKey="pv" fill={colorVariables.apple} />
        <Bar dataKey="uv" fill={colorVariables.apple} />
        <Bar dataKey="amt" fill={colorVariables.apple} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartBarSpacing
