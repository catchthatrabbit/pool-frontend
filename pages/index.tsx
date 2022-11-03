import Center from 'atoms/Center';
import ContentTitle from 'atoms/ContentTitle';
import { RecentBlocksIcon } from 'atoms/icons';
import SearchBar from 'atoms/SearchBar';
import Text from 'atoms/Text';
import Jumbotron from 'components/Jumbotron';
import Stats from 'components/Stats';
import BaseTable from 'components/Table';
import { homePageConfig } from 'config';
import { minWidth } from 'helpers/responsive';
import useGoToWallet from 'hooks/useGoToWallet';
import { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { homeService } from 'services';
import styled, { css } from 'styled-components';

import type { NextPage } from 'next'

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
  margin: 17px 15px 75px;
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

const RecentBlocksTable = () => {
  const { data, isLoading } = useQuery('BlocksData', homeService.getBlocks)

  const NoData = useRef(() => (
    <Center>
      <Text color='red'>Ohh..Something went wrong!</Text>
    </Center>
  ))

  return (
    <TableContainerStyled>
      <TitleStyled>
        <ContentTitle Image={ <RecentBlocksIcon /> }>
          Recent blocks
        </ContentTitle>
      </TitleStyled>


      <BaseTable
        data={ data }
        columns={ homePageConfig.BLOCKS_TABLE.columns }
        NoDataComponent={ !(isLoading || data) && NoData.current }
      />
    </TableContainerStyled>
  )
}

const Home: NextPage = () => {
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
      <Jumbotron />

      <SearchBarContainerStyled>
        <SearchBar
          value={searchValue}
          onChange={handleSearchValueChange}
          onSearch={handleSearch}
        />
      </SearchBarContainerStyled>

      <StatsContainerStyled>
        <Stats />
      </StatsContainerStyled>

      <RecentBlocksTable />
    </ContainerStyled>
  )
}

export default Home
