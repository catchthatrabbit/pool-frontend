import React, { FC } from 'react'
import ContentTitle from 'atoms/ContentTitle'
import Table from 'components/Table'
import styled from 'styled-components'
import Background from 'atoms/Background'

import { PaymentsInfoBoxData, TableData } from 'mockData/homePageData'
import { MinersIcon } from 'atoms/icons'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'

const ContainerStyled = styled.div`
  margin: 36px 140px 73px;
  z-index: 1;
`
const BoxesWrapperStyled = styled.div`
  margin: 41px 0 97px;
`

const MinersPage: FC = () => (
  <>
    <Background />
    <ContainerStyled>
      <ContentTitle Image={<MinersIcon />}>MINERS</ContentTitle>
      <BoxesWrapperStyled>
        <BoxesWrapper data={PaymentsInfoBoxData} />
      </BoxesWrapperStyled>
      <Table data={TableData.data} columns={TableData.columns} />
    </ContainerStyled>
  </>
)

export default MinersPage
