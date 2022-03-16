import React from 'react'
import styled from 'styled-components'
import InfoBox from './InfoBox'

export default {
  title: 'InfoBox',
  component: InfoBox,
  argTypes: {
    title: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
}

const Container = styled.div`
  width: 300px;
  height: 934px;
`

export const InfoBoxGeneral = (args) => (
  <Container>
    <InfoBox {...args} />
  </Container>
)
InfoBoxGeneral.args = {
  title: 'Pools hashrate',
  value: 69900,
}
