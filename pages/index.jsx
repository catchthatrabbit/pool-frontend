import { PureComponent } from 'react';
import Head from 'next/head';

import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
import Stats from '../components/Stats';

export default class Home extends PureComponent {
  state = {
    searchValue: '',
  };

  handleSearchValueChange = (event) =>
    this.setState({ searchValue: event.target.value });

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
      </>
    );
  }
}
