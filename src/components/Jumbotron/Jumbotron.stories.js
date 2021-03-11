import React from 'react';
import styled from 'styled-components';
import Jumbotron from './Jumbotron';

export default {
  title: 'Jumbotron',
  component: Jumbotron,
  argTypes: {
    data: {
      type: { name: 'object', required: true },
      defaultValue: [
        { title: 'Pool hashrate', value: '69.9 GH/S' },
        { title: 'Network hashrate', value: '192.9 TH/S' },
        { title: 'Network difficulty', value: '6.6 GH' },
        { title: 'Active miners', value: '10,000' },
      ],
    },
  },
};

const Container = styled.div`
  width: 1920px;
  height: 934px;
`;

export const JumbotronGeneral = (args) => (
  <Container>
    <Jumbotron {...args} />
  </Container>
);
