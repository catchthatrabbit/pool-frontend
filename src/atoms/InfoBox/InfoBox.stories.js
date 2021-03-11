import React from 'react';
import styled from 'styled-components';
import InfoBox from './InfoBox';

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
    type: {
      control: {
        type: 'select',
        options: ['hashSpeed', 'hash', 'percent', 'number', 'euro'],
      },
    },
  },
};

const Container = styled.div`
  width: 300px;
  height: 934px;
`;

export const InfoBoxGeneral = (args) => (
  <Container>
    <InfoBox {...args} />
  </Container>
);
InfoBoxGeneral.args = {
  title: 'Pool hashrate',
  value: 69900,
  type: 'hashSpeed',
};
