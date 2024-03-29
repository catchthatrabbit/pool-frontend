import styled from 'styled-components'
import InfoTable from './InfoTable'

export default {
  title: 'InfoTable',
  component: InfoTable,
  argTypes: {
    data: {
      type: { name: 'object', required: true },
      defaultValue: [
        { key: '1', title: 'server', value: 'eu.ctrpool.io' },
        { key: '2', title: 'port', value: '8008' },
        {
          key: '3',
          title: 'Username',
          value: '<your Core Coin Address>.<Worker Name>',
        },
        { key: '4', title: 'Password', value: '<empty>' },
        { key: '5', title: 'Workers Online', value: '10,000', color: 'apple' },
        { key: '6', title: 'Workers Offline', value: '210', color: 'red' },
      ],
    },
  },
}

const Container = styled.div`
  width: 1640px;
  height: 432px;
`
const ContainerSmall = styled.div`
  width: 812px;
  height: 1500px;
`

export const InfoTableLarge = (args) => (
  <Container>
    <InfoTable {...args} width="large" />
  </Container>
)
export const InfoTableSmall = (args) => (
  <ContainerSmall>
    <InfoTable {...args} width="small" />
  </ContainerSmall>
)
