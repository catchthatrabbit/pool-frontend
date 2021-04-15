import React, { FC, useContext } from 'react'
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
import ResponsiveContext from 'providers/responsive-provider/context'

interface IProps {
  data: []
}

const ChartLine: FC<IProps> = ({ data }) => {
  const displayType = useContext(ResponsiveContext)
  const fontSize =
    displayType === 'mobileL' || displayType === 'tablet' ? '14px' : '27px'
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
          tickCount={5}
          minTickGap={1}
          domain={['auto', (dataMax) => dataMax + dataMax * 0.25]}
          type="number"
        >
          <Label
            value="Share"
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
            fontSize: fontSize,
          }}
          cursor={{
            stroke: colorVariables.gunPowder,
            fill: colorVariables.gunPowder,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine
