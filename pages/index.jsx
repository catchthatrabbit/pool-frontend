import { PureComponent } from 'react';
import Head from 'next/head';

import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
import Stats from '../components/Stats';
import BaseTable from '../src/components/base-components/base-table';
import Button from '../components/Button';
import CommonContentTitle from '../components/ContentTitle';
import BaseMargin from '../src/components/base-components/base-margin';

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
        <BaseMargin y="1.5rem">
          <CommonContentTitle image="/images/recent-blocks.svg">
            RECENT BLOCKS
          </CommonContentTitle>
        </BaseMargin>
        <BaseTable footer={<Button href="/blocks">View More Blocks</Button>} />
      </>
    );
  }
}
