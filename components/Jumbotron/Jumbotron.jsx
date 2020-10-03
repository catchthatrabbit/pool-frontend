import { PureComponent } from 'react';

import InfoBox from '../InfoBox';
import MapButton from '../MapButton';
import Button from '../Button';
import Map from '../SvgImage/images/Map';
import Arrow from '../SvgImage/images/Arrow';
import {
  jumbotron,
  map,
  mouseContainer,
  mouse,
  scroll,
  us,
  eu,
  ap,
} from './Jumbotron.module.scss';

export default class Jumbotron extends PureComponent {
  state = {
    isFullMap: true,
    isMapButton: true,
  };

  boxesInfo = [
    { title: 'Pool hashrate', value: '69.9 GH/S' },
    { title: 'Network hashrate', value: '192.9 TH/S' },
    { title: 'Network difficulty', value: '6.6 GH' },
    { title: 'Active miners', value: '10,000' },
  ];

  componentDidMount() {
    this.setState({
      isFullMap: this.isFullMap(),
      isMapButton: this.isMapButton(),
    });

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isFullMap: this.isFullMap(),
      isMapButton: this.isMapButton(),
    });
  };

  isFullMap() {
    return window.innerWidth >= 1200;
  }

  isMapButton() {
    return window.innerWidth >= 840;
  }

  renderButtons() {
    const { isMapButton } = this.state;

    return isMapButton ? (
      <>
        <MapButton href="/" className={us}>
          Connect US location
        </MapButton>
        <MapButton href="/" className={eu}>
          Connect EU location
        </MapButton>
        <MapButton href="/" className={ap}>
          Connect AP location
        </MapButton>
      </>
    ) : (
      <>
        <Button theme="transparent" className={us}>
          Connect US
        </Button>
        <Button theme="transparent" className={eu}>
          Connect EU
        </Button>
        <Button theme="transparent" className={ap}>
          Connect AP
        </Button>
      </>
    );
  }

  render() {
    const { isFullMap } = this.state;

    return (
      <div className={jumbotron}>
        <div className={map}>
          <Map viewBox={isFullMap ? '71 -70 1900 940' : '600 0 1300 900'} />
          {this.renderButtons()}
          <div className={mouseContainer}>
            <div className={mouse}>
              <div className={scroll} />
            </div>
            <Arrow />
          </div>
        </div>
        <h1>
          Dedicated Pool for <span>CORE COIN</span>
        </h1>
        <p>
          We have several locations for you to select from.
          <br />
          Please select one of the locations to start your mines today!
          <br />
          <br />
          PPLNS System
          <br />
          2% Pool Fee
          <br />
          Payout Threshhold 20 XCB
          <br />
          Payout 3 times per day
          <br />
        </p>
        <Button>Start Mining</Button>
        <ul>
          {this.boxesInfo.map(({ title, value }) => (
            <li key={title}>
              <InfoBox title={title} value={value} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
