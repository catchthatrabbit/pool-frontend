import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import Table from 'components/Table'
import ContentTitle from 'atoms/ContentTitle'
import { MinersIcon, SearchResultsIcon, PaymentsIcon } from 'atoms/icons'
import { GetStaticPaths, GetStaticProps } from 'next'
import { defaultGetStaticPaths } from 'helpers/getData'
import MiningInfo from 'components/MiningInfo/MiningInfo'
import Text from 'atoms/Text/Text'
import Background from 'atoms/Background/Background'
import {
  ChartBarSlimeData,
  ChartLineData,
  ChartSpacedData,
  InfoCardData,
  InfoStatsBoxData,
  MinerInfoData,
  WorkersTableData,
  PayoutsTableData,
} from 'mockData/homePageData'
import CopyButton from 'atoms/CopyButton'
import { useRouter } from 'next/router'
import Loading from '@components/Loading/Loading'
import { minWidth } from 'helpers/responsive'
import NotFound from 'components/NotFound/NotFound'
import iban from 'helpers/iban'
import BoxPanel from 'atoms/BoxPanel/BoxPanel'

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
  ${(props: { active: boolean }) =>
    props.active &&
    `
    display: none;
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
  margin: 66px 0 81px;
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
  margin-bottom: 90px;
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
  ${minWidth(
    'tablet',
    css`
      width: auto;
    `,
  )}
`

export const getStaticPaths: GetStaticPaths = defaultGetStaticPaths

export const getStaticProps: GetStaticProps = async ({ params }) => {
  /*const props = fetch(`/api/${address}`)
  const errorCode = props.ok ? false : props.statusCode

  console.log(params)

  if(errorCode) {
    return {
      props: { errorCode }
    }
  }*/

  return {
    props: {
      address: params?.address,
      workersTableData: WorkersTableData as any,
      payoutsTableData: PayoutsTableData as any,
      minerInfoData: MinerInfoData as any,
      infoCardData: InfoCardData as any,
      chartLineData: ChartLineData as any,
      chartSpacedData: ChartSpacedData as any,
      chartBarSlimeData: ChartBarSlimeData as any,
      infoStatsBoxData: InfoStatsBoxData as any,
    },
    revalidate: 1,
  }
}

type TabType = 'workers' | 'payout'

const Wallet: FC<any> = (props) => {
  const [changeView, setChangeView] = useState<TabType>('workers')
  const router = useRouter()

  if (router.isFallback) {
    return <Loading />
  }
  if (props.errorCode) {
    return <NotFound />
  }
  return (
    <>
      <Background />
      <ContainerStyled>
        <ContentTitle Image={<SearchResultsIcon />}>Wallet overview</ContentTitle>
        <ColumnContainer>
          <AddressContainer>
            <Text size="very-large" color="apple">
              {formatAddressContent(props.address)}
            </Text>
          </AddressContainer>
          <ButtonStyled>
            <CopyButton value={props.address} />
          </ButtonStyled>
        </ColumnContainer>
        <MiningInfoContainer>
          {MinerInfoData.map(({ title, data }) => (
            <MiningInfo
              data={data as any}
              title={title}
              width="small"
              color="white"
            />
          ))}
        </MiningInfoContainer>
        <TabSelector>
          <Text
            active={changeView === 'workers'}
            onClick={() => setChangeView('workers')}
          >
            Workers
          </Text>
          <Text
            active={changeView === 'payout'}
            onClick={() => setChangeView('payout')}
          >
            Payouts
          </Text>
        </TabSelector>
        <TabContent active={changeView !== 'workers'}>
          <TitleStyled>
            <ContentTitle Image={<MinersIcon />}>Workers</ContentTitle>
          </TitleStyled>
          <TableContainerStyled>
            <Table
              data={props.workersTableData.data}
              columns={props.workersTableData.columns}
            />
          </TableContainerStyled>
        </TabContent>
        <TabContent active={changeView !== 'payout'}>
          <TitleStyled>
            <ContentTitle Image={<PaymentsIcon />}>Payouts list</ContentTitle>
          </TitleStyled>
          <TableContainerStyled>
            <Table
              data={props.payoutsTableData.data}
              columns={props.payoutsTableData.columns}
            />
          </TableContainerStyled>
        </TabContent>
        <BoxPanel title="Bulk statistics" desc="Your JSON API statistics.">
          https://{window.location.hostname}/api/accounts/{props.address}
        </BoxPanel>
      </ContainerStyled>
    </>
  )
}
export default Wallet
