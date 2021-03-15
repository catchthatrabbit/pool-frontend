import React, { FC, useState } from 'react';
import Head from 'next/head';

import styled from 'styled-components';
import Jumbotron from '../components/Jumbotron';
import SearchBar from '../atoms/SearchBar';
import Stats from '../components/Stats';
import BaseTable from '../components/Table';
import ContentTitle from '../atoms/ContentTitle';
import { StatsData, JumbotronData, TableData } from '../mockData/homePageData';
import { RecentBlocksIcon } from '../atoms/icons';

const StyledContainer = styled.div`
  width: 1920px;
`;
const StyledSearchBarContainer = styled.div`
  margin: 83px 278px;
  width: 1363px;
`;
const StyledTableContainer = styled.div`
  margin: 17px 140px 75px;
`;
const StyledTitle = styled.div`
  margin-bottom: 60px;
`;

const Home: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  function handleSearchValueChange(event) {
    setSearchValue(event.target.value);
  }
  function handleSearch() {
    console.log(`Searching for: ${searchValue}`);
  }

  return (
    <StyledContainer>
      <Head>
        <title>Catch that rabbit</title>
      </Head>
      <Jumbotron data={JumbotronData} />
      <StyledSearchBarContainer>
        <SearchBar
          value={searchValue}
          onChange={handleSearchValueChange}
          onSearch={handleSearch()}
        />
      </StyledSearchBarContainer>
      <Stats
        chartData={StatsData.chartData}
        infoBoxData={StatsData.infoBoxData}
      />
      <StyledTableContainer>
        <StyledTitle>
          <ContentTitle Image={<RecentBlocksIcon />}>
            RECENT BLOCKS
          </ContentTitle>
        </StyledTitle>
        <BaseTable
          data={TableData.data}
          columns={TableData.columns}
          moreLink={{ href: '/blocks', text: 'View More Blocks' }}
        />
      </StyledTableContainer>
    </StyledContainer>
  );
};
export default Home;
