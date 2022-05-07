import NotFound from '@components/NotFound/NotFound';
import ReactQueryTable from '@components/ReactQueryTable';
import SelectPool from '@components/SelectPool';
import Background from 'atoms/Background/Background';
import BoxPanel from 'atoms/BoxPanel/BoxPanel';
import ContentTitle from 'atoms/ContentTitle';
import CopyButton from 'atoms/CopyButton';
import { SearchResultsIcon } from 'atoms/icons';
import Text from 'atoms/Text/Text';
import MiningInfo from 'components/MiningInfo/MiningInfo';
import { poolEndpointsConfig, walletPageConfig } from 'config';
import iban from 'helpers/iban';
import { minWidth } from 'helpers/responsive';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { walletsService } from 'services';
import { poolEndpointSelector, resetPoolSelector, usePoolStore } from 'store/pool.store';
import styled, { css } from 'styled-components';

import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
  NextPage,
} from 'next'

function formatAddressContent(address) {
  return iban(address)
}

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
const SearchBarContainerStyled = styled.div`
  margin: 39px auto;
  width: 85%;
  ${minWidth(
    'tablet',
    css`
      margin: 69px auto;
      width: 85%;
    `,
  )}
`
const TableContainerStyled = styled.div`
  margin: 17px 0 75px;
`
const TitleStyled = styled.div`
  margin: 50px 0 68px;
  ${minWidth(
    'desktop',
    css`
      margin: 124px 0 68px;
    `,
  )}
`
const TabContent = styled.div`
  display: none;
  ${(props: { active: boolean }) =>
    props.active &&
    `
    display: block;
  `}
`
const ChartsWrapper = styled.div`
  overflow: scroll;
  overflow-x: auto;
  overflow-y: hidden;
`
const ChartBarContainer = styled.div`
  height: 224px;
  width: 1640px;
`
const ChartLineContainer = styled.div`
  height: 224px;
  width: 1640px;
`

const ColumnContainer = styled.div`
  margin: 66px 0 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const InfoContainer = styled(ColumnContainer)`
  justify-content: center;
  > div:not(:nth-child(1)) {
    margin-top: 5%;
  }
  ${minWidth(
    'tablet',
    css`
      justify-content: center;
      > div:not(:nth-child(1)) {
        margin-top: 5%;
      }
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      justify-content: space-between;
      > div:not(:nth-child(1)) {
        margin-top: 10px;
      }
      > div {
        margin-top: 10px;
      }
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      justify-content: space-between;
      > div {
        margin-top: 0;
      }
    `,
  )}
`
const InfoBoxContainer = styled(InfoContainer)`
  ${minWidth(
    'laptop',
    css`
      div:last-child {
        margin-top: 15px;
      }
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      justify-content: center;
    `,
  )}
   ${minWidth(
    'desktop',
    css`
      justify-content: space-between;
      div {
        margin-top: 0;
      }
      div:last-child {
        margin-top: 0;
      }
    `,
  )}
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
const MiningInfoContainer = styled.div`
  display: flex;
  align-self: center;
  margin: 18px 0 97px;
  padding: 0;
  flex-flow: row wrap;
  width: 100%;
  & > * {
    flex-grow: 1;
    margin-right: 0;

    &:last-child {
      margin-right: 0;
      margin-top: 24px;
    }
  }
  ${minWidth(
    'tablet',
    css`
      display: flex;
      & > * {
        flex-grow: 1;
        margin-right: 0;

        &:last-child {
          margin-right: 0;
          margin-top: 24px;
        }
      }
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      & > * {
        margin-right: 16px;

        &:last-child {
          margin-right: 0;
          margin-top: 0;
        }
      }
    `,
  )}
`
const ButtonStyled = styled.div`
  margin-left: 0;
  margin-top: 25px;
  ${minWidth(
    'tablet',
    css`
      margin-left: 50px;
      margin-top: 0;
    `,
  )}
`
const TitleCharLineContainer = styled.div`
  margin-bottom: 57px;
`
const TitleCharBarContainer = styled.div`
  margin: 87px 0 38px;
`
const AddressContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  ${minWidth(
    'tablet',
    css`
      width: auto;
    `,
  )}
`

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const address = context.params?.address as string
  const queryClient = new QueryClient()

  await Promise.allSettled([
    queryClient.prefetchQuery([ 'walletInfo', address, poolEndpointsConfig.EU_PRIMARY_API ], walletsService.getWalletInfoQueryFn),
    queryClient.prefetchQuery([ 'workers', address, poolEndpointsConfig.EU_PRIMARY_API, 1 ], walletsService.getWorkersQueryFn),
    queryClient.prefetchQuery([ 'payouts', address, poolEndpointsConfig.EU_PRIMARY_API, 1 ], walletsService.getPayoutsQueryFn),
  ])

  const dehydratedState = dehydrate(queryClient)

  return {
    props: {
      address,
      dehydratedState,
      // notFound: dehydratedState.queries.some(q => (q.state.data as any)?.status === 404),
    },
  }
}

type TabType = 'workers' | 'payouts'

const Wallet: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const [ changeView, setChangeView ] = useState<TabType>('workers')
  const router = useRouter()

  const resetPool = usePoolStore(resetPoolSelector)
  useEffect(resetPool, [])

  // if (props.notFound) {
  //   return <NotFound />
  // }

  return (
    <>
      <Background />
      <ContainerStyled>
        <ContentTitle Image={ <SearchResultsIcon /> }>
          Wallet overview
        </ContentTitle>

        <SelectPool />
        <ColumnContainer>
          <AddressContainer>
            <Text size="very-large" color="apple">
              { formatAddressContent(props.address) }
            </Text>
          </AddressContainer>
          <ButtonStyled>
            <CopyButton value={ props.address } />
          </ButtonStyled>
        </ColumnContainer>

        <WalletMiningInfoBoxes address={ router.query.address as string } />

        <TabSelector>
          <Text
            active={ changeView === 'workers' }
            onClick={ () => setChangeView('workers') }
          >
            Workers
          </Text>
          <Text
            active={ changeView === 'payouts' }
            onClick={ () => setChangeView('payouts') }
          >
            Payouts
          </Text>
        </TabSelector>
        <TabContent active={ changeView === 'workers' }>
          <TableContainerStyled>
            <ReactQueryTable
              columns={ walletPageConfig.WORKERS_TABLE.columns }
              queryKey={ [ 'workers', router.query.address as string ] }
              queryFn={ walletsService.getWorkersQueryFn }
            />
          </TableContainerStyled>
        </TabContent>
        <TabContent active={ changeView === 'payouts' }>
          <TableContainerStyled>
            <ReactQueryTable
              columns={ walletPageConfig.PAYOUTS_TABLE.columns }
              queryKey={ [ 'payouts', router.query.address as string ] }
              queryFn={ walletsService.getPayoutsQueryFn }
            />
          </TableContainerStyled>
        </TabContent>

        <BoxPanel title="Connections" desc="Data sources &amp; direct links.">
          Direct link to stats:{ ' ' }
          <a href={ 'https://' + props.address + '.ctr.watch' } target="_blank">
            { props.address }.ctr.watch
          </a>
          <br />
          API access:{ ' ' }
          <a
            href={ 'https://catchthatrabbit.com/api/accounts/' + props.address }
            target="_blank"
          >
            catchthatrabbit.com/api/accounts/{ props.address }
          </a>
        </BoxPanel>
      </ContainerStyled>
    </>
  )
}

const WalletMiningInfoBoxes = (props: { address: string }) => {
  const poolEndpoint = usePoolStore(poolEndpointSelector)
  const { data: boxes } = useQuery([ 'walletInfo', props.address, poolEndpoint ], walletsService.getWalletInfoQueryFn)

  return (
    <MiningInfoContainer>
      { boxes?.map(({ title, data }) => (
        <MiningInfo
          key={ title }
          data={ data as any }
          title={ title }
          width="small"
          color="white"
        />
      )) }
    </MiningInfoContainer>
  )
}

export default Wallet
