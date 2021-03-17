import React, { FC } from 'react'
import ContentTitle from 'atoms/ContentTitle'
import InfoBox from 'atoms/InfoBox'
import Table from 'components/Table'
import styled from 'styled-components'
import Background from 'atoms/Background'

import { PaymentsInfoBoxData, TableData } from 'mockData/homePageData'
import { MinersIcon } from 'atoms/icons'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'

const StyledContainer = styled.div`
  margin: 60px 140px 73px;
  z-index: 1;
`

const MinersPage: FC = () => (
  <>
    <Background />
    <StyledContainer>
      <ContentTitle Image={<MinersIcon />}>MINERS</ContentTitle>
      <BoxesWrapper data={PaymentsInfoBoxData} />
      <Table data={TableData.data} columns={TableData.columns} />
    </StyledContainer>
  </>
)

export default MinersPage
