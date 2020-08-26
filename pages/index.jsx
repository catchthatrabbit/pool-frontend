import { PureComponent } from "react";
import Head from "next/head";

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <Head>
          <title>Catch that rabbit</title>
        </Head>
        <div>
          <h1>CATCH THAT RABBIT</h1>
        </div>
      </div>
    );
  }
}
