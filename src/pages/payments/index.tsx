import React, { FC } from 'react'
import Table from 'components/Table'
import ContentTitle from 'atoms/ContentTitle'
import { PaymentsInfoBoxData, TableData } from 'mockData/homePageData'
import { PaymentsIcon } from 'atoms/icons'
import styled from 'styled-components'
import Background from 'atoms/Background'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'

const ContainerStyled = styled.div`
  margin: 36px 140px 73px;
  z-index: 1;
`

const PaymentPage: FC = () => (
  <>
    <Background />
    <ContainerStyled>
      <ContentTitle Image={<PaymentsIcon />}>PAYMETNS</ContentTitle>
      <BoxesWrapper data={PaymentsInfoBoxData} />
      <Table data={TableData.data} columns={TableData.columns} />
    </ContainerStyled>
  </>
)

export default PaymentPage
