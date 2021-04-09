import React, { FC, useRef, useState } from 'react'
import styled from 'styled-components'
import SearchBar from 'atoms/SearchBar'
import Table from 'components/Table'
import ContentTitle from 'atoms/ContentTitle'
import { MinersIcon, SearchResultsIcon, PaymentsIcon } from 'atoms/icons'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { defaultGetStaticPaths } from 'helpers/getData'
import MiningInfo from 'components/MiningInfo/MiningInfo'
import Text from 'atoms/Text/Text'
import Background from 'atoms/Background/Background'
import { ParsedUrlQuery } from 'querystring'
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

const ContainerStyled = styled.div`
  margin: 60px 140px 73px;
  z-index: 1;
`
const SearchBarContainerStyled = styled.div`
  margin: 69px 136px;
  width: 1363px;
`
const TableContainerStyled = styled.div`
  margin: 17px 0 75px;
`
const TitleStyled = styled.div`
  margin: 124px 0 68px;
`
const TabContent = styled.div`
  ${(props: { active: boolean }) =>
    props.active &&
    `
    display: none;
  `}
`
const ChartBarContainer = styled.div`
  width: 1640px;
  height: 224px;
`
const ChartLineContainer = styled.div`
  width: 1640px;
  height: 443px;
`

const ColumnContainer = styled.div`
  margin: 66px 0 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  div:not(:nth-child(1)) {
    margin-left: 16px;
  }
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
  list-style-type: none;
  flex-flow: row wrap;
  width: 100%;

  & > * {
    flex-grow: 1;
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`
const ButtonStyled = styled.div`
  margin-left: 50px;
`
const TitleCharLineContainer = styled.div`
  margin-bottom: 57px;
`
const TitleCharBarContainer = styled.div`
  margin: 87px 0 38px;
`
interface IParams extends ParsedUrlQuery {
  address: string
}

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
          {MiningInfoData.map(({ title, data }, index) => (
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
          <ColumnContainer>
            {InfoCardData.map(({ title, data }) => (
              <InfoCard title={title} data={data as InfoBoxItem[]} />
            ))}
          </ColumnContainer>
          <TitleCharLineContainer>
            <ContentTitle>Hash rate</ContentTitle>
          </TitleCharLineContainer>
          <ChartLineContainer>
            <ChartLine data={ChartLineData as []} />
          </ChartLineContainer>
          <TitleCharBarContainer>
            <ContentTitle>Shares</ContentTitle>
          </TitleCharBarContainer>
          <ChartBarContainer>
            <ChartBarSlime data={ChartBarSlimeData as []} />
          </ChartBarContainer>
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
          <ColumnContainer>
            {InfoStatsBoxData.map(({ title, subtitle, suffix, value }) => (
              <InfoStatsBox
                title={title}
                subtitle={subtitle}
                value={value}
                suffix={suffix}
                size="small"
              />
            ))}
          </ColumnContainer>
          <ContentTitle>Payments</ContentTitle>
          <ChartBarContainer>
            <ChartBarSpacing data={ChartSpacedData as []} />
          </ChartBarContainer>
          <ColumnContainer>
            {InfoStatsBoxLargeData.map(({ title, subtitle, suffix, value }) => (
              <InfoStatsBox
                title={title}
                subtitle={subtitle}
                suffix={suffix}
                value={value}
                size="large"
              />
            ))}
          </ColumnContainer>
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
