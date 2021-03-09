import React from 'react';
import styled from 'styled-components';
import InfoTable from './InfoTable';

export default {
  title: 'InfoTable',
  component: InfoTable,
  argTypes: {
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
        { key: '6', title: 'Workers Online', value: '10,000', color: 'apple' },
        { key: '7', title: 'Workers Offline', value: '210', color: 'red' },
      ],
    },
  },
};

const Container = styled.div`
  width: 1640px;
  height: 432px;
`;

export const InfoTableBasic = (args) => (
  <Container>
    <InfoTable {...args}/>
  </Container>
);
