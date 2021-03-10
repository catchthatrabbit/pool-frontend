import React from 'react';
import styled from 'styled-components';
import Jumbotron from './Jumbotron';

export default {
  title: 'Jumbotron',
  component: Jumbotron,
};

const Container = styled.div`
  width: 1920px;
  height: 934px;
`;

export const JumbotronGeneral = () => (
  <Container>
    <Jumbotron />
  </Container>
);
