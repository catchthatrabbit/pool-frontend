import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { colorVariables, fonts } from 'styles/variables';

import Button from 'components/Button/Button';
import MapButton from 'components/MapButton/MapButton';
import CommonInfoBox from '../../src/components/common/common-info-box';
import { Arrow } from '../icons';

const scrollTranslate = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
      opacity: 1;
  }
  100% {
    transform: translateY(10px);
      opacity: 0;
  }
`;
const ScrollStyle = styled.div`
  width: 3px;
  height: 8px;
  background: ${colorVariables.white};
  border-radius: 25%;
  animation: scroll 2.2s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
`;
const MouseStyle = styled.div`
   width: 3px;
   height: 18px;
   background: ${colorVariables.woodsmoke};
   padding: 8px 10px;
   border: 2px solid ${colorVariables.gunPowder};
   border-radius: 20px;
   ${ScrollStyle}
`;
const MouseContainerStyle = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 24px;
  height: 64px;
  left: calc(50% - 24px);
  bottom: 0;
  ${MouseStyle};
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

const LocationStyle = styled.div`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   font-weight: 600;
   font-size: 10px;
   padding: 15px 10px;
   min-width: min(12vw, 215px);
   @media screen and (min-width: 0) and(max-width:340px) {
      transform: translateX(-50%);
   }
   @media screen and (min-width: 840px) {
      transform: translateX(-50%);
      font-size: 12px;
      padding: 20px;
   }
   @media screen and (min-width: 1200px) {
      transform: translateX(-50%);
      font-size: 12px;
      padding: 20px;
   }
`;
const USStyle = styled(LocationStyle)`
  left: 0;
    @media screen and (min-width: 0) and(max-width:340px) {
      left: 20%;
      top: 10%;
   }
   @media screen and (min-width: 840px) {
      top: 25%;
      left: 15%;
   }
   @media screen and (min-width: 1200px) {
      top: 33%;
      left: 39%;
   }
`;
const EUStyle = styled(LocationStyle)`
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 0) and(max-width:340px) {
      top: 50%;
      transform: translate(-50%, -50%);
   }
   @media screen and (min-width: 840px) {
      top: 25%;
      left: 50%;
   }
   @media screen and (min-width: 1200px) {
      top: 33%;
      left: 61%;
   }
`;
const APStyle = styled(LocationStyle)`
  right: 0;
  @media screen and (min-width: 0) and(max-width:340px) {
      left: 80%;
      top: 90%;
      transform: translate(-50%, -100%);
   }
   @media screen and (min-width: 840px) {
      top: 35%;
      left: 78%;
   }
   @media screen and (min-width: 1200px) {
       top: 42%;
       left: 82%;
   }
`;
const MapStyle = styled.div`
   position: relative;
   width: 100%;
   background-image: url("/images/map_bg.png");
   ${USStyle};
   ${EUStyle};
   ${APStyle};
   ${MouseContainerStyle};
   ${scrollTranslate};
`;
const JumbotronStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${MapStyle};
  
  h1 {
    margin: 20px 0 0;
    font-size: min(max(2.2vw, 27px), 42px);
    text-align: center;
    order: -1;
    span {
      white-space: nowrap;
      color: ${colorVariables.apple};
    }
    @media screen and (min-width: 900px) {
      order: 0;
    }
  }
  p {
    margin: 30px 0;
    line-height: min(max(1.5vw, 20px), 29px);
    font-family: ${fonts.secondary};
    font-size: min(max(1.2vw, 15px), 24px);
    color: ${colorVariables.santasGray};
    text-align: center;
  }
  @media screen and (min-width: 1200px) {
    h1,
    p {
      position: absolute;
      align-self: start;
      text-align: start;
      width: 20%;
    }
    h1 {
      bottom: 60%;
    }
    p {
      bottom: 15%;
    }
    button {
      position: absolute;
      bottom: 5%;
      left: 10%;
      transform: translateX(-50%);
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    margin: 60px 0 0;
    padding: 0;
    list-style-type: none;
    li {
      margin-bottom: 20px;
    }
    @media screen and (min-width: 450px) {
      flex-flow: row wrap;
      justify-content: space-evenly;
      width: 100%;
      li:not(:last-child) {
        margin-right: 5px;
        margin-bottom: 50px;
      }
    }
    @media screen and(min-width:900px) {
      justify-content: space-between;
      position: absolute;
      margin-top: 10px;
      li {
        margin: 0;
      }
    }
  }
`;

const Jumbotron: FC = () => {
  const state = {
    isFullMap: true,
    isMapButton: true,
  };

  const boxesInfo = [
    { title: 'Pool hashrate', value: '69.9 GH/S' },
    { title: 'Network hashrate', value: '192.9 TH/S' },
    { title: 'Network difficulty', value: '6.6 GH' },
    { title: 'Active miners', value: '10,000' },
  ];
  function isFullMap() {
    return window.innerWidth >= 1200;
  }

  function isMapButton() {
    return window.innerWidth >= 840;
  }
  function handleResize() {
    state.isFullMap = isFullMap();
    state.isMapButton = isMapButton();
  }
  function componentDidMount() {
    handleResize();
    window.addEventListener('resize', handleResize);
  }
  function componentWillUnmount() {
    window.removeEventListener('resize', handleResize);
  }

  function renderButtons() {
    return state.isMapButton ? (
      <>
        <USStyle>
          <MapButton href="/">
            Connect US location
          </MapButton>
        </USStyle>
        <EUStyle>
          <MapButton href="/">
            Connect EU location
          </MapButton>
        </EUStyle>
        <APStyle>
          <MapButton href="/">
            Connect AP location
          </MapButton>
        </APStyle>
      </>
    ) : (
      <>
        <USStyle>
          <Button theme="transparent">
            Connect US
          </Button>
        </USStyle>
        <EUStyle>
          <Button theme="transparent">
            Connect EU
          </Button>
        </EUStyle>
        <APStyle>
          <Button theme="transparent">
            Connect AP
          </Button>
        </APStyle>
      </>
    );
  }
  return (
    <JumbotronStyle>
      <MapStyle>
        {renderButtons()}
        <MouseContainerStyle>
          <MouseStyle>
            <ScrollStyle />
          </MouseStyle>
          <Arrow />
        </MouseContainerStyle>
      </MapStyle>
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
      {/* TODO change to a reusable component */}
      <ul>
        {boxesInfo.map(({ title, value }) => (
          <li key={title}>
            <CommonInfoBox title={title} value={value} />
          </li>
        ))}
      </ul>
    </JumbotronStyle>
  );
};
export default Jumbotron;
