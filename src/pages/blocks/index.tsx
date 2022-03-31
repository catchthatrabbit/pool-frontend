import Background from 'atoms/Background'
import ContentTitle from 'atoms/ContentTitle'
import { BlockerLogoIcon } from 'atoms/icons'
import Text from 'atoms/Text/Text'
import Table from 'components/Table'
import { minWidth } from 'helpers/responsive'
import React, { FC, useState } from 'react'
import { getBlocksTableData } from 'services/getBlocksTableData'
import styled, { css } from 'styled-components'

import type { InferGetServerSidePropsType } from 'next'

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
const ColumnContainer = styled.div`
  margin: 66px 0 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const TabSelector = styled(ColumnContainer)`
  margin-bottom: 10px;
  & > * {
    cursor: pointer;
    margin-right: 61px;

    &:last-child {
      margin-right: 0;
    }
  }
`
const TabContent = styled.div`
  display: none;
  ${(props: { active: boolean }) =>
    props.active &&
    `
    display: block;
  `}
`
const TableContainerStyled = styled.div`
  margin: 17px 0 75px;
`

export const getServerSideProps = async () => ({
  props: await getBlocksTableData(),
})

type TabType = 'blocks' | 'immature' | 'newblocks'

const BlocksPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props,
) => {
  const [changeView, setChangeView] = useState<TabType>('blocks')

  return (
    <>
      <Background />
      <ContainerStyled>
        <ContentTitle Image={<BlockerLogoIcon />}>Pool blocks</ContentTitle>
        <TabSelector>
          <Text
            active={changeView === 'blocks'}
            onClick={() => setChangeView('blocks')}
          >
            Blocks
          </Text>
          <Text
            active={changeView === 'immature'}
            onClick={() => setChangeView('immature')}
          >
            Immature
          </Text>
          <Text
            active={changeView === 'newblocks'}
            onClick={() => setChangeView('newblocks')}
          >
            New blocks
          </Text>
        </TabSelector>
        <TabContent active={changeView === 'blocks'}>
          <TableContainerStyled>
            <Table data={props.blocks.data} columns={props.blocks.columns} />
          </TableContainerStyled>
        </TabContent>
        <TabContent active={changeView === 'immature'}>
          <TableContainerStyled>
            <Table
              data={props.immature.data}
              columns={props.immature.columns}
            />
          </TableContainerStyled>
        </TabContent>
        <TabContent active={changeView === 'newblocks'}>
          <TableContainerStyled>
            <Table
              data={props.newBlocks.data}
              columns={props.newBlocks.columns}
            />
          </TableContainerStyled>
        </TabContent>
      </ContainerStyled>
    </>
  )
}

export default BlocksPage
