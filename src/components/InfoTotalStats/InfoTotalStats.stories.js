import React from 'react'
import styled from 'styled-components'
import InfoTotalStats from './InfoTotalStats'

export default {
  title: 'InfoTotalStats',
  component: InfoTotalStats,
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
    <InfoTotalStats {...args} />
  </Container>
)
InfoStatsBoxGeneral.args = {
  title: 'Total Paid',
  suffix: 'XCB',
  subtitle: '10 000 000 EUR',
  value: '10 000',
}
