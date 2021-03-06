import React from 'react';
import styled from 'styled-components';
import MinerCard from './MinerCard';


export default {
  title: 'MinerCard',
  component: MinerCard,
  argTypes: {
    data: {
      type: { name: 'object', required: true },
      defaultValue: {
          title: 'Title',
          description: 'Description',
          info: ['Some info', 'Some info', 'Some info'],
          configLink: 'https://mega.nz/folder/O4YA2JgD#n2b4iSHQDruEsYUvTQP5_w',
          minerLink: 'https://mega.nz/folder/O4YA2JgD#n2b4iSHQDruEsYUvTQP5_w',
        },
    }
  },
};

const Container = styled.div`
  width: 500px;
  height: 1500px;
`;



export const MinerCardBasic = (args) => (
  <Container>
    <MinerCard {...args}/>
  </Container>
);
