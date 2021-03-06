import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    pageCount: 5,
    onPageChange: (page) => null
  },
};

const Container = styled.div`
  width: 500px;
  height: 1500px;
`;

export const PaginationBasic = (args) => (
  <Container>
    <Pagination {...args}/>
  </Container>
);
