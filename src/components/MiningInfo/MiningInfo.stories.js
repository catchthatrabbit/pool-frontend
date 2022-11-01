
import styled from 'styled-components'
import MiningInfo from './MiningInfo'

export default {
  title: 'MiningInfo',
  component: MiningInfo,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Connect Asia Pool',
    },
    data: {
      type: { name: 'object', required: true },
      defaultValue: [
        { key: '1', title: 'server', value: 'eu.ctrpool.io' },
        { key: '2', title: 'port', value: '8008' },
        { key: '3', title: 'Worker online', value: '10000', color: 'apple' },
        { key: '4', title: 'Worker offline', value: '210', color: 'red' },
        { key: '5', title: 'Unpaid Balance', value: '6,820 XCB / 68.20 EUR' },
        { key: '6', title: 'Efficiency', value: '99.2%' },
      ],
    },
  },
}

const Container = styled.div`
  width: 1640px;
  height: 478px;
`
const ContainerSmall = styled.div`
  width: 812px;
  height: 478px;
`

export const MiningInfoLarge = (args) => (
  <Container>
    <MiningInfo {...args} width="large" />
  </Container>
)

export const MiningInfoSmall = (args) => (
  <ContainerSmall>
    <MiningInfo {...args} width="small" />
  </ContainerSmall>
)
