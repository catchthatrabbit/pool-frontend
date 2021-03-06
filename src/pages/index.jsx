import { PureComponent } from 'react';
import Head from 'next/head';

import Jumbotron from '../atoms/Jumbotron';
import SearchBar from '../atoms/SearchBar';
import Stats from '../components/Stats';
import BaseTable from '../components/base-components/base-table';
import Button from '../atoms/Button';
import CommonContentTitle from '../components/ContentTitle';

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
      <>
        <Head>
          <title>Catch that rabbit</title>
        </Head>
        <Jumbotron />
        <SearchBar
          value={searchValue}
          onChange={this.handleSearchValueChange}
          onSearch={this.handleSearch}
        />
        <Stats />
          <CommonContentTitle image="/images/recent-blocks.svg">
            RECENT BLOCKS
          </CommonContentTitle>
        <BaseTable footer={<Button href="/blocks">View More Blocks</Button>} />
      </>
    );
  }
}
