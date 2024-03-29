
import Stats from './Stats'
import styled from 'styled-components'

export default {
  title: 'Stats',
  component: Stats,
  argTypes: {
    chartData: {
      type: { name: 'object', required: true },
      defaultValue: [
        { time: '2020-10-19 16:00', value: 87930194 },
        { time: '2020-10-19 17:00', value: 36826423 },
        { time: '2020-10-19 18:00', value: 70677299 },
        { time: '2020-10-19 19:00', value: 59587960 },
        { time: '2020-10-19 20:00', value: 20682192 },
        { time: '2020-10-19 21:00', value: 68986806 },
        { time: '2020-10-19 22:00', value: 19349722 },
        { time: '2020-10-19 23:00', value: 64320841 },
        { time: '2020-10-20 00:00', value: 64926524 },
        { time: '2020-10-20 01:00', value: 55552480 },
        { time: '2020-10-20 02:00', value: 83526370 },
        { time: '2020-10-20 03:00', value: 62585429 },
        { time: '2020-10-20 04:00', value: 73141705 },
        { time: '2020-10-20 05:00', value: 40343376 },
        { time: '2020-10-20 06:00', value: 54294158 },
        { time: '2020-10-20 07:00', value: 62905207 },
        { time: '2020-10-20 08:00', value: 89269059 },
        { time: '2020-10-20 09:00', value: 52357412 },
        { time: '2020-10-20 10:00', value: 40902891 },
        { time: '2020-10-20 11:00', value: 50151824 },
        { time: '2020-10-20 12:00', value: 63713117 },
        { time: '2020-10-20 13:00', value: 87130942 },
        { time: '2020-10-20 14:00', value: 63791200 },
        { time: '2020-10-20 15:00', value: 50542491 },
      ],
    },
    infoBoxData: {
      type: { name: 'object', required: true },
      defaultValue: [
        { title: '24H Hashrate High', value: 192900000, type: 'hashSpeed' },
        { title: '24H Hashrate low', value: 19200, type: 'hashSpeed' },
        { title: 'Round Variance', value: 200, type: 'percentage' },
        { title: 'Blockchain Height', value: 99000000, type: 'number' },
        { title: 'Last XCB Payout', value: 330000, type: 'euro' },
      ],
    },
  },
}

const Container = styled.div`
  width: 1920px;
  height: 1500px;
`

export const StatsBasic = (args) => (
  <Container>
    <Stats {...args} />
  </Container>
)
