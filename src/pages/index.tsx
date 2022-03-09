import ContentTitle from 'atoms/ContentTitle'
import { RecentBlocksIcon } from 'atoms/icons'
import SearchBar from 'atoms/SearchBar'
import Jumbotron from 'components/Jumbotron'
import Stats from 'components/Stats'
import BaseTable from 'components/Table'
import { minWidth } from 'helpers/responsive'
import useGoToWallet from 'hooks/useGoToWallet'
import React, { FC, useState } from 'react'
import { getHomeBlockTableData } from 'services/getHomeBlockTableData'
import { getHomeJumbotronData } from 'services/getHomeJumbotronData'
import { getHomeStatsData } from 'services/getHomeStatsData'
import styled, { css } from 'styled-components'

import type { InferGetServerSidePropsType } from 'next'

const ContainerStyled = styled.div`
  width: 100%;
`
const SearchBarContainerStyled = styled.div`
  margin: 60px auto;
  width: 90vw;
  ${minWidth(
    'tablet',
    css`
      margin: 60px auto;
      width: 90vw;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      width: 90vw;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      width: 90vw;
    `,
  )}
`
const StatsContainerStyled = styled.div`
  width: 90vw;
  ${minWidth(
    'tablet',
    css`
      width: 90vw;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      width: 90vw;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      width: 90vw;
    `,
  )}
`
const TableContainerStyled = styled.div`
  margin: 17px 50px 75px;
  ${minWidth(
    'laptopL',
    css`
      margin: 17px 100px 75px;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      margin: 17px 140px 75px;
    `,
  )}
`
const TitleStyled = styled.div`
  margin-bottom: 60px;
`

export const getServerSideProps = async () => {
  const [jumbotronData, statsData, tableData] = await Promise.all([
    getHomeJumbotronData(),
    getHomeStatsData(),
    getHomeBlockTableData(),
  ])

  return {
    props: {
      jumbotronData,
      statsData,
      tableData,
    },
  }
}

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props,
) => {
  const [searchValue, setSearchValue] = useState('')
  const goToWallet = useGoToWallet()
  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  const handleSearch = () => {
    goToWallet(searchValue)
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
      <StatsContainerStyled>
        <Stats
          chartData={props.statsData.chartData}
          infoBoxData={props.statsData.infoBoxData}
        />
      </StatsContainerStyled>
      <TableContainerStyled>
        <TitleStyled>
          <ContentTitle Image={<RecentBlocksIcon />}>
            Recent blocks
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
