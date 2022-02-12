import React, { FC } from 'react'

import ContentTitle from 'atoms/ContentTitle'
import Table from 'components/Table'
import { BlockerLogoIcon } from 'atoms/icons'
import { TableData, BlocksInfoBoxData } from 'mockData/homePageData'
import styled, { css } from 'styled-components'
import Background from 'atoms/Background'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'
import { minWidth } from 'helpers/responsive'

const ContainerStyled = styled.div`
  z-index: 1;
  margin: 36px 20px 73px;
  ${minWidth(
    'tablet',
    css`
      margin: 36px 50px 73px;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      margin: 36px 100px 73px;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      margin: 36px 140px 73px;
    `,
  )}
`
const BoxesWrapperStyled = styled.div`
  margin: 41px 0 41px;
  ${minWidth(
    'laptop',
    css`
      margin: 41px 10px 41px;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      margin: 41px 0 90px;
    `,
  )}
`

const BlocksPage: FC = () => (
    <>
    <Background />
    <ContainerStyled>
      <ContentTitle Image={<BlockerLogoIcon />}>POOL BLOCKS</ContentTitle>
      <BoxesWrapperStyled>
        <BoxesWrapper data={BlocksInfoBoxData} />
      </BoxesWrapperStyled>
      <Table data={TableData.data} columns={TableData.columns} />
    </ContainerStyled>
  </>
)

export default BlocksPage
