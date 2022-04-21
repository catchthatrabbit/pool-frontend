import SelectPool from '@components/SelectPool';
import Background from 'atoms/Background';
import ContentTitle from 'atoms/ContentTitle';
import { BlockerLogoIcon } from 'atoms/icons';
import Text from 'atoms/Text/Text';
import ReactQueryTable from 'components/ReactQueryTable';
import { blocksPageConfig, poolEndpointsConfig } from 'config';
import { minWidth } from 'helpers/responsive';
import { useEffect, useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { blocksService } from 'services';
import { resetPoolSelector, usePoolStore } from 'store/pool.store';
import styled, { css } from 'styled-components';

import type { InferGetServerSidePropsType, NextPage } from 'next'

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

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await Promise.allSettled([
    queryClient.prefetchQuery(['maturedBlocks', poolEndpointsConfig.EU_PRIMARY_API, 1], blocksService.getMaturedQueryFn),
    queryClient.prefetchQuery(['immatureBlocks', poolEndpointsConfig.EU_PRIMARY_API, 1], blocksService.getImmatureQueryFn),
    queryClient.prefetchQuery(['candidatesBlocks', poolEndpointsConfig.EU_PRIMARY_API, 1], blocksService.getCandidatesQueryFn),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

type TabType = 'blocks' | 'immature' | 'newblocks'

const BlocksPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  const [ changeView, setChangeView ] = useState<TabType>('blocks')

  const resetPool = usePoolStore(resetPoolSelector)
  useEffect(resetPool, [])

  return (
    <>
      <Background />
      <ContainerStyled>
        <ContentTitle Image={ <BlockerLogoIcon /> }>Pool blocks</ContentTitle>

        <SelectPool />

        <TabSelector>
          <Text
            active={ changeView === 'blocks' }
            onClick={ () => setChangeView('blocks') }
          >
            Blocks
          </Text>
          <Text
            active={ changeView === 'immature' }
            onClick={ () => setChangeView('immature') }
          >
            Immature
          </Text>
          <Text
            active={ changeView === 'newblocks' }
            onClick={ () => setChangeView('newblocks') }
          >
            New blocks
          </Text>
        </TabSelector>
        <TabContent active={ changeView === 'blocks' }>
          <TableContainerStyled>
            <ReactQueryTable
              columns={ blocksPageConfig.BLOCKS_TABLE.columns }
              queryKey={ [ 'maturedBlocks' ] }
              queryFn={ blocksService.getMaturedQueryFn }
            />
          </TableContainerStyled>
        </TabContent>
        <TabContent active={ changeView === 'immature' }>
          <TableContainerStyled>
            <ReactQueryTable
              columns={ blocksPageConfig.BLOCKS_TABLE.columns }
              queryKey={ [ 'immatureBlocks' ] }
              queryFn={ blocksService.getImmatureQueryFn }
            />
          </TableContainerStyled>
        </TabContent>
        <TabContent active={ changeView === 'newblocks' }>
          <TableContainerStyled>
            <ReactQueryTable
              columns={ blocksPageConfig.BLOCKS_TABLE.columns }
              queryKey={ [ 'candidatesBlocks' ] }
              queryFn={ blocksService.getCandidatesQueryFn }
            />
          </TableContainerStyled>
        </TabContent>
      </ContainerStyled>
    </>
  )
}

export default BlocksPage
