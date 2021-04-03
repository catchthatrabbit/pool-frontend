import React, { FC, useRef, useState } from 'react'
import styled from 'styled-components'
import SearchBar from 'atoms/SearchBar'
import BaseTable from 'components/Table'
import ContentTitle from 'atoms/ContentTitle'
import { MinersIcon, SearchResultsIcon, PaymentsIcon } from 'atoms/icons'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { defaultGetStaticPaths, getStaticPropsAddress } from 'helpers/getData'
import MiningInfo from 'components/MiningInfo/MiningInfo'
import Text from 'atoms/Text/Text'
import Button from 'atoms/Button/Button'
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
import { CopyToClipboard } from 'react-copy-to-clipboard'

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
const StatisticContent = styled.div`
  ${(props: { active: boolean }) =>
    props.active &&
    `
    display: none;
  `}
`
const PayoutContent = styled.div`
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
const TabStyled = styled.div`
  ${(props: { margin: boolean }) =>
    props.margin &&
    `
  margin-left: 61px;
  `}
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
const TabContainer = styled(ColumnContainer)`
  margin-bottom: 90px;
`
const MiningInfoContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: 18px 0 97px;
  padding: 0;
  list-style-type: none;
  flex-flow: row wrap;
  width: 100%;
`
const MiningInfoStyled = styled.div`
  ${(props: { margin: boolean }) =>
    props.margin &&
    `
  margin-right: 16px;
  `}
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { address } = context.params as IParams
  // const props = fetch(`/api/${address}`)
  return {
    props: {
      address,
      tableData: TableData as any,
      miningInfoData: MiningInfoData as any,
      infoCardData: InfoCardData as any,
      chartLineData: ChartLineData as any,
      chartSpacedData: ChartSpacedData as any,
      chartBarSlimeData: ChartBarSlimeData as any,
      infoStatsBoxData: InfoStatsBoxData as any,
    },
  }
}
const Wallet: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const [changeView, setChangeView] = useState(true)
  const textRef = useRef(null)

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  const handleSearch = () => {
    console.log(`Searching for: ${searchValue}`)
  }
  const handleChangeView = () => {
    setChangeView(!changeView)
  }

  return (
    <>
      <Background />
      <ContainerStyled>
        <ContentTitle Image={<SearchResultsIcon />}>Search result</ContentTitle>
        <ColumnContainer>
          <Text size="very-large" color="apple" italic>
            <text ref={textRef}>{props.address}</text>
          </Text>
          <ButtonStyled>
            {/*<CopyToClipboard text={props.address}>*/}
            {/*  <Button>copy</Button>*/}
            {/*</CopyToClipboard>*/}
          </ButtonStyled>
        </ColumnContainer>
        <MiningInfoContainer>
          {MiningInfoData.map(({ title, data }) => {
            return (
              <MiningInfoStyled margin={true}>
                <MiningInfo
                  data={data as any}
                  title={title}
                  width="small"
                  color="white"
                />
              </MiningInfoStyled>
            )
          })}
        </MiningInfoContainer>
        <TabContainer>
          <TabStyled margin={false} onClick={handleChangeView}>
            <Text active={changeView} italic>
              Statistics
            </Text>
          </TabStyled>
          <TabStyled margin={true} onClick={handleChangeView}>
            <Text active={!changeView} italic>
              Payout
            </Text>
          </TabStyled>
        </TabContainer>
        <StatisticContent active={!changeView}>
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
            <BaseTable
              data={props.tableData.data}
              columns={props.tableData.columns}
            />
          </TableContainerStyled>
        </StatisticContent>
        <PayoutContent active={changeView}>
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
            <BaseTable
              data={props.tableData.data}
              columns={props.tableData.columns}
            />
          </TableContainerStyled>
        </PayoutContent>
      </ContainerStyled>
    </>
  )
}
export default Wallet
