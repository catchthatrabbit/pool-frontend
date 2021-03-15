import React from 'react'
import styled from 'styled-components'
import Table from './Table'

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    data: {
      type: { name: 'object', required: true },
      defaultValue: [
        {
          height: '10619917',
          type: 'Block',
          'mined on': '8 Aug 2020, 17:08',
          miner: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          reward: '2.89 XCB',
          'round time': '41.38 Seconds',
        },
        {
          height: '10619917',
          type: 'Block',
          'mined on': '8 Aug 2020, 17:08',
          miner: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          reward: '2.89 XCB',
          'round time': '41.38 Seconds',
        },
        {
          height: '10619917',
          type: 'Block',
          'mined on': '8 Aug 2020, 17:08',
          miner: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          reward: '2.89 XCB',
          'round time': '41.38 Seconds',
        },
        {
          height: '10619917',
          type: 'Block',
          'mined on': '8 Aug 2020, 17:08',
          miner: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          reward: '2.89 XCB',
          'round time': '41.38 Seconds',
        },
        {
          height: '10619917',
          type: 'Block',
          'mined on': '8 Aug 2020, 17:08',
          miner: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          reward: '2.89 XCB',
          'round time': '41.38 Seconds',
        },
        {
          height: '10619917',
          type: 'Block',
          'mined on': '8 Aug 2020, 17:08',
          miner: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          reward: '2.89 XCB',
          'round time': '41.38 Seconds',
        },
        {
          height: '10619917',
          type: 'Block',
          'mined on': '8 Aug 2020, 17:08',
          miner: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          reward: '2.89 XCB',
          'round time': '41.38 Seconds',
        },
        {
          height: '10619917',
          type: 'Block',
          'mined on': '8 Aug 2020, 17:08',
          miner: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          reward: '2.89 XCB',
          'round time': '41.38 Seconds',
        },
        {
          height: '10619917',
          type: 'Block',
          'mined on': '8 Aug 2020, 17:08',
          miner: '0xDD5F68E68198520e60FaD24CBf1aDd2C6fcA7538',
          reward: '2.89 XCB',
          'round time': '41.38 Seconds',
        },
      ],
    },
    columns: {
      type: { name: 'object', required: true },
      defaultValue: [
        {
          name: 'height',
          id: 'height',
        },
        {
          name: 'type',
          id: 'type',
        },
        {
          name: 'mined on',
          id: 'mined on',
        },
        {
          name: 'miner',
          id: 'miner',
        },
        {
          name: 'reward',
          id: 'reward',
        },
        {
          name: 'round time',
          id: 'round time',
        },
      ],
    },
  },
}

const Container = styled.div`
  width: 1640px;
  height: 1500px;
`

export const TableBasic = (args) => (
  <Container>
    <Table {...args} />
  </Container>
)
