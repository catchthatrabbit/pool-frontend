import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Jumbotron from 'components/Jumbotron'
import SearchBar from 'atoms/SearchBar'
import Stats from 'components/Stats'
import BaseTable from 'components/Table'
import ContentTitle from 'atoms/ContentTitle'
import { RecentBlocksIcon } from 'atoms/icons'
import { StatsData, JumbotronData, TableData } from 'mockData/homePageData'
import { InferGetServerSidePropsType } from 'next'
import getData from '../helpers/getData'

const ContainerStyled = styled.div`
  width: 100%;
`
const SearchBarContainerStyled = styled.div`
  margin: 83px 278px;
  width: 1363px;
`
const TableContainerStyled = styled.div`
  margin: 17px 140px 75px;
`
const TitleStyled = styled.div`
  margin-bottom: 60px;
`

export const getServerSideProps = async () => {
  const statsData = JSON.parse(JSON.stringify(await getData('/stats')))
  const jumbotronData = JSON.parse(JSON.stringify(await getData('/jumbotron')))
  const tableData = JSON.parse(JSON.stringify(await getData('/table')))

  return {
    props: {
      statsData,
      jumbotronData,
      tableData,
    },
  }
}

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props,
) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  const handleSearch = () => {
    console.log(`Searching for: ${searchValue}`)
  }
  return (
    <ContainerStyled>
      <Jumbotron data={props.jumbotronData.data} />
      <SearchBarContainerStyled>
        <SearchBar
          value={searchValue}
          onChange={handleSearchValueChange}
          onSearch={handleSearch}
        />
      </SearchBarContainerStyled>
      <Stats
        chartData={props.statsData.data.chartData}
        infoBoxData={props.statsData.data.infoBoxData}
      />
      <TableContainerStyled>
        <TitleStyled>
          <ContentTitle Image={<RecentBlocksIcon />}>
            RECENT BLOCKS
          </ContentTitle>
        </TitleStyled>
        <BaseTable
          data={props.tableData.data.data}
          columns={props.tableData.data.columns}
          moreLink={{ href: '/blocks', text: 'View More Blocks' }}
        />
      </TableContainerStyled>
    </ContainerStyled>
  )
}
export default Home
