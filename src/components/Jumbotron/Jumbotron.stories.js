import React from 'react'
import styled from 'styled-components'
import Jumbotron from './Jumbotron'

export default {
  title: 'Jumbotron',
  component: Jumbotron,
  argTypes: {
    data: {
      type: { name: 'object', required: true },
      defaultValue: [
        { title: 'Pools hashrate', value: 69900, type: 'hashSpeed' },
        { title: 'Network hashrate', value: 192900000, type: 'hashSpeed' },
        { title: 'Network difficulty', value: 6600, type: 'hash' },
        { title: 'Active miners', value: 10000, type: 'number' },
      ],
    },
  },
}

const Container = styled.div`
  width: 1920px;
  height: 934px;
`

export const JumbotronGeneral = (args) => (
  <Container>
    <Jumbotron {...args} />
  </Container>
)
