import checkData from 'helpers/chartDataTransform';
import ResponsiveContext from 'providers/responsive-provider/context';
import { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { colorVariables, fonts } from 'styles/variables';

interface IChartBarSlimeProps {
  data: []
  children: React.ReactNode;
}

const ChartBarSlime = ({ data }: IChartBarSlimeProps) => {
  const chartData = checkData(data, 250)
  const displayType = useContext(ResponsiveContext)
  const fontSize =
    displayType === 'mobileL' || displayType === 'tablet' ? '14px' : '27px'

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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
          tick={{ fontSize: '9px', fontWeight: '600' }}
          padding={{ left: 38, right: 38 }}
          tickCount={14}
          interval={'preserveStartEnd'}
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
        <Bar dataKey="data" fill={colorVariables.sky} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartBarSlime
