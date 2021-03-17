import React, { FC } from 'react'
import Table from 'components/Table'
import InfoBox from 'atoms/InfoBox'
import ContentTitle from 'atoms/ContentTitle'
import { PaymentsInfoBoxData, TableData } from 'mockData/homePageData'
import { PaymentsIcon } from 'atoms/icons'
import styled from 'styled-components'
import Background from 'atoms/Background'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'

const StyledContainer = styled.div`
  margin: 60px 140px 73px;
  z-index: 1;
`

const PaymentPage: FC = () => (
  <>
    <Background />
    <StyledContainer>
      <ContentTitle Image={<PaymentsIcon />}>PAYMETNS</ContentTitle>
      <BoxesWrapper data={PaymentsInfoBoxData} />
      <Table data={TableData.data} columns={TableData.columns} />
    </StyledContainer>
  </>
)

export default PaymentPage
