import React from 'react'
import styled from 'styled-components'
import InfoCard from './InfoCard'

export default {
  title: 'InfoCard',
  component: InfoCard,
  argTypes: {
    title: {
      control: 'text',
    },
    data: {
      type: { name: 'object', required: true },
      defaultValue: [
        { title: 'Effective', value: 5570, type: 'hashSpeed' },
        { title: 'Average', value: 5510, type: 'hashSpeed' },
        { title: 'Reported', value: 5920, type: 'hash' },
      ],
    },
  },
}

const Container = styled.div`
  width: 812px;
  height: 186px;
`

export const InfoCardGeneral = (args) => (
  <Container>
    <InfoCard {...args} />
  </Container>
)
InfoCardGeneral.args = {
  title: 'Hashrate',
}
