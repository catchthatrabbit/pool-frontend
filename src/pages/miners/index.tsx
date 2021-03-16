import React, { FC } from 'react'
import CommonContentTitle from 'atoms/ContentTitle'
import CommonInfoBox from 'atoms/InfoBox'
import BaseTable from 'components/Table'
import styled from 'styled-components'
import Background from 'atoms/Background'

import { PaymentsInfoBox, TableData } from '../../mockData/homePageData'
import { MinersIcon } from 'atoms/icons'

const BoxesWrapperStyled = styled.ul`
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

const MinersPage: FC = () => (
  <>
    <Background />
    <StyledContainer>
      <CommonContentTitle Image={<MinersIcon />}>MINERS</CommonContentTitle>
      <BoxesWrapperStyled>
        {PaymentsInfoBox.map(({ title, value, type }) => (
          <li key={title}>
            <CommonInfoBox title={title} value={value} type={type} />
          </li>
        ))}
      </BoxesWrapperStyled>
      <BaseTable data={TableData.data} columns={TableData.columns} />
    </StyledContainer>
  </>
)

export default MinersPage
