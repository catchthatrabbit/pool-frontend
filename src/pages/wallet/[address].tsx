import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import SearchBar from 'atoms/SearchBar'
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
  InfoStatsBoxLargeData,
  MiningInfoData,
  TableData,
} from 'mockData/homePageData'
import InfoCard from 'components/InfoCard'
import ChartLine from 'atoms/ChartLine'
import ChartBarSlime from 'atoms/ChartBarSlime'
import InfoStatsBox from 'components/InfoStatsBox'
import ChartBarSpacing from 'atoms/ChartBarSpacing'
import { InfoBoxItem } from 'helpers/text'
import CopyButton from 'atoms/CopyButton'
import useGoToWallet from 'hooks/useGoToWallet'
import { useRouter } from 'next/router'
import Loading from '@components/Loading/Loading'
import { minWidth } from 'helpers/responsive'

const ContainerStyled = styled.div`
  z-index: 1;
  margin: 36px 10px 73px;
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
  height: 443px;
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
      > div:not(:nth-child(1)) {
        margin-top: 0;
      }
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

export const getStaticPaths: GetStaticPaths = defaultGetStaticPaths

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const props = fetch(`/api/${address}`)

  console.log(params)

  return {
    props: {
      address: params?.address,
      tableData: TableData as any,
      miningInfoData: MiningInfoData as any,
      infoCardData: InfoCardData as any,
      chartLineData: ChartLineData as any,
      chartSpacedData: ChartSpacedData as any,
      chartBarSlimeData: ChartBarSlimeData as any,
      infoStatsBoxData: InfoStatsBoxData as any,
    },
    revalidate: 1,
  }
}

type TabType = 'statistics' | 'payout'

const Wallet: FC<any> = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const [changeView, setChangeView] = useState<TabType>('statistics')
  const router = useRouter()

  const goToWallet = useGoToWallet()

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  const handleSearch = () => {
    goToWallet(searchValue)
  }

  if (router.isFallback) {
    return <Loading />
  }
  return (
    <>
      <Background />
      <ContainerStyled>
        <ContentTitle Image={<SearchResultsIcon />}>Search result</ContentTitle>
        <ColumnContainer>
          <Text size="very-large" color="apple" italic>
            {props.address}
          </Text>
          <ButtonStyled>
            <CopyButton value={props.address} />
          </ButtonStyled>
        </ColumnContainer>
        <MiningInfoContainer>
          {MiningInfoData.map(({ title, data }) => (
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
            active={changeView === 'statistics'}
            italic
            onClick={() => setChangeView('statistics')}
          >
            Statistics
          </Text>
          <Text
            active={changeView === 'payout'}
            italic
            onClick={() => setChangeView('payout')}
          >
            Payout
          </Text>
        </TabSelector>
        <TabContent active={changeView === 'statistics'}>
          <InfoBoxContainer>
            {InfoCardData.map(({ title, data }) => (
              <InfoCard title={title} data={data as InfoBoxItem[]} />
            ))}
          </InfoBoxContainer>
          <TitleCharLineContainer>
            <ContentTitle>Hash rate</ContentTitle>
          </TitleCharLineContainer>
          <ChartsWrapper>
            <ChartLineContainer>
              <ChartLine data={ChartLineData as []} />
            </ChartLineContainer>
          </ChartsWrapper>
          <TitleCharBarContainer>
            <ContentTitle>Shares</ContentTitle>
          </TitleCharBarContainer>
          <ChartsWrapper>
            <ChartBarContainer>
              <ChartBarSlime data={ChartBarSlimeData as []} />
            </ChartBarContainer>
          </ChartsWrapper>
          <TitleStyled>
            <ContentTitle Image={<MinersIcon />}>Workers</ContentTitle>
          </TitleStyled>
          <SearchBarContainerStyled>
            <SearchBar
              value={searchValue}
              onChange={handleSearchValueChange}
              onSearch={handleSearch}
            />
          </SearchBarContainerStyled>
          <TableContainerStyled>
            <Table
              data={props.tableData.data}
              columns={props.tableData.columns}
            />
          </TableContainerStyled>
        </TabContent>
        <TabContent active={changeView === 'payout'}>
          <InfoContainer>
            {InfoStatsBoxData.map(({ title, subtitle, suffix, value }) => (
              <InfoStatsBox
                title={title}
                subtitle={subtitle}
                value={value}
                suffix={suffix}
                size="small"
              />
            ))}
          </InfoContainer>
          <ContentTitle>Payments</ContentTitle>
          <ChartsWrapper>
            <ChartBarContainer>
              <ChartBarSpacing data={ChartSpacedData as []} />
            </ChartBarContainer>
          </ChartsWrapper>
          <InfoContainer>
            {InfoStatsBoxLargeData.map(({ title, subtitle, suffix, value }) => (
              <InfoStatsBox
                title={title}
                subtitle={subtitle}
                suffix={suffix}
                value={value}
                size="large"
              />
            ))}
          </InfoContainer>
          <TitleStyled>
            <ContentTitle Image={<PaymentsIcon />}>Payment List</ContentTitle>
          </TitleStyled>
          <TableContainerStyled>
            <Table
              data={props.tableData.data}
              columns={props.tableData.columns}
            />
          </TableContainerStyled>
        </TabContent>
      </ContainerStyled>
    </>
  )
}
export default Wallet
