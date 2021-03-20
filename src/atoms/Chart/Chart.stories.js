import React from 'react'
import styled from 'styled-components'
import Chart from './Chart'

export default {
  title: 'Chart',
  component: Chart,
  argTypes: {
    data: {
      type: { name: 'object', required: true },
      defaultValue: [
        { name: '09:00', uv: 4000, pv: 2400, amt: 2400 },
        { name: '12:00', uv: 3000, pv: 1398, amt: 2210 },
        { name: '15:00', uv: 2000, pv: 9800, amt: 2290 },
        { name: '18:00', uv: 2780, pv: 3908, amt: 2000 },
        { name: '21:00', uv: 1890, pv: 4800, amt: 2181 },
        { name: '3.nov', uv: 2390, pv: 3800, amt: 2500 },
        { name: '03:00', uv: 3490, pv: 4300, amt: 2100 },
      ],
    },
    type: {
      control: {
        type: 'select',
        options: ['line', 'bar-spaced', 'bar-slime'],
      },
    },
  },
}
const Container = styled.div`
  width: 1640px;
  height: 445px;
`

export const ChartBasic = (args) => (
  <Container>
    <Chart {...args} />
  </Container>
)
