import React from 'react'
import styled from 'styled-components'
import Pagination from './Pagination'

export default {
  title: 'PaginationBasic',
  component: Pagination,
  argTypes: {
    pageCount: {
      type: { name: 'number', required: true },
      defaultValue: 5
    },
    onPageChange: (page) => null,
  },
}

const Container = styled.div`
  width: 650px;
  height: 1500px;
`

export const PaginationBasic = (args) => (
  <Container>
    <Pagination {...args} />
  </Container>
)
