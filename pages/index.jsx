import { PureComponent } from 'react';
import Head from 'next/head';
import Jumbotron from '../components/Jumbotron';

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Catch that rabbit</title>
        </Head>
        <Jumbotron />
      </>
    );
  }
}
