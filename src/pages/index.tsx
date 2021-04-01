import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Jumbotron from 'components/Jumbotron'
import SearchBar from 'atoms/SearchBar'
import Stats from 'components/Stats'
import BaseTable from 'components/Table'
import ContentTitle from 'atoms/ContentTitle'
import { StatsData, JumbotronData, TableData } from 'mockData/homePageData'
import { RecentBlocksIcon } from 'atoms/icons'
import { blocks } from 'constants/paths'

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

const Home: FC = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  const handleSearch = () => {
    console.log(`Searching for: ${searchValue}`)
  }

  return (
    <ContainerStyled>
      <Jumbotron data={JumbotronData} />
      <SearchBarContainerStyled>
        <SearchBar
          value={searchValue}
          onChange={handleSearchValueChange}
          onSearch={handleSearch}
        />
      </SearchBarContainerStyled>
      <Stats
        chartData={StatsData.chartData}
        infoBoxData={StatsData.infoBoxData}
      />
      <TableContainerStyled>
        <TitleStyled>
          <ContentTitle Image={<RecentBlocksIcon />}>
            RECENT BLOCKS
          </ContentTitle>
        </TitleStyled>
        <BaseTable
          data={TableData.data}
          columns={TableData.columns}
          moreLink={{ href: blocks, text: 'View More Blocks' }}
        />
      </TableContainerStyled>
    </ContainerStyled>
  )
}
export default Home
