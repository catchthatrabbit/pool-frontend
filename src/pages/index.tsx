import React, { PureComponent } from 'react';
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

export default class Home extends PureComponent {
  state = {
    searchValue: '',
  };

  handleSearchValueChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => console.log(`Searching for: ${this.state.searchValue}`);

  render() {
    const { searchValue } = this.state;

    return (
      <StyledContainer>
        <Head>
          <title>Catch that rabbit</title>
        </Head>
        <Jumbotron data={JumbotronData} />
        <StyledSearchBarContainer>
          <SearchBar
            value={searchValue}
            onChange={this.handleSearchValueChange}
            onSearch={this.handleSearch}
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
  }
}
