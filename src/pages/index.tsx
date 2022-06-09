import ContentTitle from 'atoms/ContentTitle'
import { RecentBlocksIcon } from 'atoms/icons'
import SearchBar from 'atoms/SearchBar'
// import Jumbotron from 'components/Jumbotron'
import Stats from 'components/Stats'
import BaseTable from 'components/Table'
import { homePageConfig } from 'config'
import { minWidth } from 'helpers/responsive'
import useGoToWallet from 'hooks/useGoToWallet'
import React, { useState } from 'react'
import { homeService } from 'services'
import styled, { css } from 'styled-components'
import dynamic from 'next/dynamic'

import type { InferGetServerSidePropsType, NextPage } from 'next'
const Jumbotron = dynamic(() => import('components/Jumbotron'), { ssr: false })
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
  width: 100%;
  ${minWidth(
    'tablet',
    css`
      width: 100%;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      width: 100%;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      width: 100%;
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
  const [jumbotron, stats, blocks] = await Promise.all([
    homeService.getJumbotron(),
    homeService.geStats(),
    homeService.getBlocks(),
  ])

  return {
    props: {
      jumbotron,
      stats,
      blocks,
    },
  }
}

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
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
      <Jumbotron data={props.jumbotron} />
      <SearchBarContainerStyled>
        <SearchBar
          value={searchValue}
          onChange={handleSearchValueChange}
          onSearch={handleSearch}
        />
      </SearchBarContainerStyled>
      <StatsContainerStyled>
        <Stats
          chartData={props.stats.chart}
          infoBoxData={props.stats.infoBoxes}
        />
      </StatsContainerStyled>
      <TableContainerStyled>
        <TitleStyled>
          <ContentTitle Image={<RecentBlocksIcon />}>
            Recent blocks
          </ContentTitle>
        </TitleStyled>
        <BaseTable
          data={props.blocks}
          columns={homePageConfig.BLOCKS_TABLE.columns}
          moreLink={homePageConfig.BLOCKS_TABLE.moreLink}
        />
      </TableContainerStyled>
    </ContainerStyled>
  )
}
export default Home
