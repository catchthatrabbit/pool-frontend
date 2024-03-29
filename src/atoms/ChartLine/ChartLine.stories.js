import styled from 'styled-components'
import ChartLine from './ChartLine'

export default {
  title: 'ChartLine',
  component: ChartLine,
  argTypes: {
    data: {
      type: { name: 'object', required: true },
      defaultValue: [
        { name: '09:00', uv: 4000, pv: 2400, amt: 3400 },
        { name: '12:00', uv: 3000, pv: 1398, amt: 2210 },
        { name: '15:00', uv: 2000, pv: 9800, amt: 2290 },
        { name: '18:00', uv: 2780, pv: 3908, amt: 2000 },
        { name: '21:00', uv: 1890, pv: 4800, amt: 2181 },
        { name: '3.nov', uv: 2390, pv: 3800, amt: 2500 },
        { name: '03:00', uv: 3490, pv: 4300, amt: 2100 },
        { name: '08:00', uv: 3490, pv: 4300, amt: 2100 },
        { name: '13:00', uv: 3490, pv: 4300, amt: 2100 },
      ],
    },
  },
}
const Container = styled.div`
  width: 1640px;
  height: 224px;
`

export const ChartLineBasic = (args) => (
  <Container>
    <ChartLine {...args} />
  </Container>
)
