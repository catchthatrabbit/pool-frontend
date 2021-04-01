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
import checkData from '../../helpers/chartDataTransform'

interface IProps {
  data: []
}

const ChartBarSpacing: FC<IProps> = ({ data }) => {
  const chartData = checkData(data, 40)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={1600}
        height={214}
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
          tick={{ fontSize: '9px', fontWeight: '600px' }}
          padding={{ left: 38, right: 38 }}
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
        <Bar dataKey="data" fill={colorVariables.apple} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartBarSpacing
