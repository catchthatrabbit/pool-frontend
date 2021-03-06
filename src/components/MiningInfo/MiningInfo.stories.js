import React from 'react';
import styled from 'styled-components';
import MiningInfo from './MiningInfo';

export default {
  title: 'MiningInfo',
  component: MiningInfo,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Connect Asia Pool'
    },
    data: {
      type: { name: 'object', required: true },
      defaultValue: [
        { key: '1', title: 'server', value: 'eu.ctrpool.io' },
        { key: '2', title: 'port', value: '4444' },
        { key: '3', title: 'secure (ssl) port', value: '5555' },
        {
          key: '4',
          title: 'Username',
          value: '<your Core Coin Address>.<Worker Name>',
        },
        { key: '5', title: 'Password', value: '<empty>' },
      ],
    }
  },
};

const Container = styled.div`
  width: 812px;
  height: 1500px;
`;

export const MiningInfoBasic = (args) => (
  <Container>
    <MiningInfo {...args}/>
  </Container>
);
