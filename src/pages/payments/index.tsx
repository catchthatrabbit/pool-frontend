import React, { FC } from 'react'
import Table from 'components/Table'
import InfoBox from 'atoms/InfoBox'
import ContentTitle from 'atoms/ContentTitle'
import { PaymentsInfoBoxData, TableData } from 'mockData/homePageData'
import { PaymentsIcon } from 'atoms/icons'
import styled from 'styled-components'
import Background from 'atoms/Background'

const StyledBoxesWrapper = styled.ul`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: 18px 0 97px;
  padding: 0;
  list-style-type: none;
  flex-flow: row wrap;
  width: 100%;
  li {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
  li:not(:nth-child(4n)) {
    margin-right: 198px;
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.responsive.mobileDevice.medium}) {
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
    li {
      margin-top: 50px;
    }
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.responsive.mobileDevice.large}) {
    justify-content: space-between;
  }
`
const StyledContainer = styled.div`
  margin: 60px 140px 73px;
`

const PaymentPage: FC = () => (
  <>
    <Background />
    <StyledContainer>
      <ContentTitle Image={<PaymentsIcon />}>PAYMETNS</ContentTitle>
      <StyledBoxesWrapper>
        {PaymentsInfoBoxData.map(({ title, value, type }) => (
          <li key={title}>
            <InfoBox title={title} value={value} type={type} />
          </li>
        ))}
      </StyledBoxesWrapper>
      <Table data={TableData.data} columns={TableData.columns} />
    </StyledContainer>
  </>
)

export default PaymentPage
