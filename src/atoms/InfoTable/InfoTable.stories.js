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
      ],
    },
  },
};

const Container = styled.div`
  width: 700px;
  height: 1500px;
`;

export const InfoTableBasic = (args) => (
  <Container>
    <InfoTable {...args}/>
  </Container>
);
