import React from 'react'
import styled from 'styled-components'
import InfoStatsBox from './InfoStatsBox'

export default {
  title: 'InfoStatsBox',
  component: InfoStatsBox,
  argTypes: {
    title: {
      control: 'text',
    },
    suffix: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    value: {
      control: 'number',
    },
  },
}

const Container = styled.div`
  width: 812px;
  height: 186px;
`

export const InfoStatsBoxGeneral = (args) => (
  <Container>
    <InfoStatsBox {...args} />
  </Container>
)
InfoStatsBoxGeneral.args = {
  title: 'Estimated Daily Profit',
  suffix: 'XCB',
  subtitle: '12.50 EUR',
  value: 150,
}
export const InfoStatsBoxSecond = (args) => (
  <Container>
    <InfoStatsBox {...args} />
  </Container>
)
InfoStatsBoxSecond.args = {
  title: 'Worker Online / Offline',
  suffix: '/ 250 000',
  subtitle: '',
  value: 100000,
}
