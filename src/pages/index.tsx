import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Jumbotron from 'components/Jumbotron'
import SearchBar from 'atoms/SearchBar'
import Stats from 'components/Stats'
import BaseTable from 'components/Table'
import ContentTitle from 'atoms/ContentTitle'
import { RecentBlocksIcon } from 'atoms/icons'
import { InferGetStaticPropsType } from 'next'
import defaultGetStaticProps from 'helpers/getData'
import { useRouter } from 'next/router'

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

export const getStaticProps = defaultGetStaticProps

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()
  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  const handleSearch = () => {
    router.push({
      pathname: `/wallet/${searchValue}`,
    })
    console.log(`Searching for: ${searchValue}`)
  }

  return (
    <ContainerStyled>
      <Jumbotron data={props.jumbotronData} />
      <SearchBarContainerStyled>
        <SearchBar
          value={searchValue}
          onChange={handleSearchValueChange}
          onSearch={handleSearch}
        />
      </SearchBarContainerStyled>
      <Stats
        chartData={props.statsData.chartData}
        infoBoxData={props.statsData.infoBoxData}
      />
      <TableContainerStyled>
        <TitleStyled>
          <ContentTitle Image={<RecentBlocksIcon />}>
            RECENT BLOCKS
          </ContentTitle>
        </TitleStyled>
        <BaseTable
          data={props.tableData.data}
          columns={props.tableData.columns}
          moreLink={{ href: '/blocks', text: 'View More Blocks' }}
        />
      </TableContainerStyled>
    </ContainerStyled>
  )
}
export default Home
