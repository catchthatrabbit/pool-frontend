
import styled from 'styled-components'
import MinerCard from './MinerCard'

export default {
  title: 'MinerCard',
  component: MinerCard,
  argTypes: {
    data: {
      type: { name: 'object', required: true },
      defaultValue: {
        title: 'Coreminer',
        description: 'Fast miner with 0% fees',
        info: ['OS: Linux', 'CPUs: AMD, Intel, ARM', 'Fee: 0%'],
        command: '',
        minerLink: '',
      },
    },
  },
}

const Container = styled.div`
  width: 500px;
  height: 1500px;
`

export const MinerCardBasic = (args) => (
  <Container>
    <MinerCard {...args} />
  </Container>
)
