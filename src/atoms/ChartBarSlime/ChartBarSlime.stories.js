import styled from 'styled-components'
import ChartBarSlime from './ChartBarSlime'

export default {
  title: 'ChartBarSlime',
  component: ChartBarSlime,
  argTypes: {
    data: {
      type: { label: 'object', required: true },
      defaultValue: [
        { label: '2020-11-11', data: 4000 },
        { label: '2020-11-12', data: 3000 },
        { label: '2020-11-13', data: 2000 },
        { label: '2020-11-14', data: 2780 },
        { label: '2020-11-15', data: 1890 },
        { label: '2020-11-16', data: 2390 },
        { label: '2020-11-17', data: 3490 },
        { label: '2020-11-18', data: 3490 },
        { label: '2020-11-19', data: 3490 },
        { label: '2020-11-20', data: 4000 },
        { label: '2020-11-21', data: 3000 },
        { label: '2020-11-22', data: 2000 },
        { label: '2020-11-23', data: 2780 },
        { label: '2020-11-24', data: 1890 },
        { label: '2020-11-25', data: 2390 },
        { label: '2020-11-26', data: 3490 },
        { label: '2020-11-27', data: 3490 },
        { label: '2020-11-28', data: 3490 },
        { label: '2020-11-29', data: 3490 },
        { label: '2020-11-30', data: 3490 },
        { label: '2020-12-1', data: 4000 },
        { label: '2020-12-2', data: 3000 },
        { label: '2020-12-3', data: 2000 },
        { label: '2020-12-4', data: 2780 },
        { label: '2020-12-5', data: 1890 },
        { label: '2020-12-6', data: 2390 },
        { label: '2020-12-7', data: 3490 },
        { label: '2020-12-8', data: 3490 },
        { label: '2020-12-9', data: 3490 },
        { label: '2020-12-10', data: 4000 },
        { label: '2020-12-11', data: 3000 },
        { label: '2020-12-12', data: 2000 },
        { label: '2020-12-13', data: 2780 },
        { label: '2020-12-14', data: 1890 },
        { label: '2020-12-15', data: 2390 },
        { label: '2020-12-16', data: 3490 },
        { label: '2020-12-17', data: 3490 },
        { label: '2020-12-18', data: 3490 },
        { label: '2020-12-19', data: 3490 },
        { label: '2020-12-20', data: 3490 },
        { label: '2020-11-11', data: 4000 },
        { label: '2020-11-12', data: 3000 },
        { label: '2020-11-13', data: 2000 },
        { label: '2020-11-14', data: 2780 },
        { label: '2020-11-15', data: 1890 },
        { label: '2020-11-16', data: 2390 },
        { label: '2020-11-17', data: 3490 },
        { label: '2020-11-18', data: 3490 },
        { label: '2020-11-19', data: 3490 },
        { label: '2020-11-20', data: 4000 },
        { label: '2020-11-21', data: 3000 },
        { label: '2020-11-22', data: 2000 },
        { label: '2020-11-23', data: 2780 },
        { label: '2020-11-24', data: 1890 },
        { label: '2020-11-25', data: 2390 },
        { label: '2020-11-26', data: 3490 },
        { label: '2020-11-27', data: 3490 },
        { label: '2020-11-28', data: 3490 },
        { label: '2020-11-29', data: 3490 },
        { label: '2020-11-30', data: 3490 },
        { label: '2020-12-1', data: 4000 },
        { label: '2020-12-2', data: 3000 },
        { label: '2020-12-3', data: 2000 },
        { label: '2020-12-4', data: 2780 },
        { label: '2020-12-5', data: 1890 },
        { label: '2020-12-6', data: 2390 },
        { label: '2020-12-7', data: 3490 },
        { label: '2020-12-8', data: 3490 },
        { label: '2020-12-9', data: 3490 },
        { label: '2020-12-10', data: 4000 },
        { label: '2020-12-11', data: 3000 },
        { label: '2020-12-12', data: 2000 },
        { label: '2020-12-13', data: 2780 },
        { label: '2020-12-14', data: 1890 },
        { label: '2020-12-15', data: 2390 },
        { label: '2020-12-16', data: 3490 },
        { label: '2020-12-17', data: 3490 },
        { label: '2020-12-18', data: 3490 },
        { label: '2020-12-19', data: 3490 },
        { label: '2020-12-20', data: 3490 },
        { label: '2020-11-11', data: 4000 },
        { label: '2020-11-12', data: 3000 },
        { label: '2020-11-13', data: 2000 },
        { label: '2020-11-14', data: 2780 },
        { label: '2020-11-15', data: 1890 },
        { label: '2020-11-16', data: 2390 },
        { label: '2020-11-17', data: 3490 },
        { label: '2020-11-18', data: 3490 },
        { label: '2020-11-19', data: 3490 },
        { label: '2020-11-20', data: 4000 },
        { label: '2020-11-21', data: 3000 },
        { label: '2020-11-22', data: 2000 },
        { label: '2020-11-23', data: 2780 },
        { label: '2020-11-24', data: 1890 },
        { label: '2020-11-25', data: 2390 },
        { label: '2020-11-26', data: 3490 },
        { label: '2020-11-27', data: 3490 },
        { label: '2020-11-28', data: 3490 },
        { label: '2020-11-29', data: 3490 },
        { label: '2020-11-30', data: 3490 },
        { label: '2020-12-1', data: 4000 },
        { label: '2020-12-2', data: 3000 },
        { label: '2020-12-3', data: 2000 },
        { label: '2020-12-4', data: 2780 },
        { label: '2020-12-5', data: 1890 },
        { label: '2020-12-6', data: 2390 },
        { label: '2020-12-7', data: 3490 },
        { label: '2020-12-8', data: 3490 },
        { label: '2020-12-9', data: 3490 },
        { label: '2020-12-10', data: 4000 },
        { label: '2020-12-11', data: 3000 },
        { label: '2020-12-12', data: 2000 },
        { label: '2020-12-13', data: 2780 },
        { label: '2020-12-14', data: 1890 },
        { label: '2020-12-15', data: 2390 },
        { label: '2020-12-16', data: 3490 },
        { label: '2020-12-17', data: 3490 },
        { label: '2020-12-18', data: 3490 },
      ],
    },
  },
}
const Container = styled.div`
  width: 1640px;
  height: 224px;
`

export const ChartBarSlimeBasic = (args) => (
  <Container>
    <ChartBarSlime {...args} />
  </Container>
)
