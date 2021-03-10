import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { colorVariables, fonts } from 'styles/variables';

import Button from 'atoms/Button/Button';
import Text from 'atoms/Text/Text';
import MapButton from 'atoms/MapButton/MapButton';
import { Arrow } from 'atoms/icons';
import InfoBox from 'atoms/InfoBox/InfoBox';

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
  animation: ${scrollTranslate} 2.2s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
`;
const MouseStyle = styled.div`
   width: 3px;
   height: 18px;
   background: ${colorVariables.woodsmoke};
   padding: 8px 10px;
   border: 2px solid ${colorVariables.gunPowder};
   border-radius: 20px;
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
  bottom: 5%;
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

const LocationStyle = styled.div`
   position: absolute;
   top: 50%;
   // transform: translateY(-50%);
   font-weight: 600;
   font-size: 10px;
   padding: 15px 10px;
   min-width: min(12vw, 215px);
   @media screen and (min-width: 0) and(max-width:340px) {
      // transform: translateX(-50%);
   }
   @media screen and (min-width: 840px) {
      // transform: translateX(-50%);
      font-size: 12px;
      padding: 20px;
   }
   @media screen and (min-width: 1200px) {
      // transform: translateX(-50%);
      font-size: 12px;
      padding: 20px;
   }
`;
const USStyle = styled(LocationStyle)`
  left: 0;
  top: 25%;
  left: 35%;
   //  @media screen and (min-width: 0) and(max-width:340px) {
   //    left: 20%;
   //    top: 10%;
   // }
   // @media screen and (min-width: 840px) {
   //    top: 25%;
   //    left: 15%;
   // }
   // @media screen and (min-width: 1200px) {
   //    top: 33%;
   //    left: 39%;
   // }
`;
const EUStyle = styled(LocationStyle)`
  top: 25%;
  left: 58%;
  // transform: translate(-50%, -50%);
  // @media screen and (min-width: 0) and(max-width:340px) {
  //     top: 50%;
  //     transform: translate(-50%, -50%);
  //  }
  //  @media screen and (min-width: 840px) {
  //     top: 25%;
  //     left: 50%;
  //  }
  //  @media screen and (min-width: 1200px) {
  //     top: 33%;
  //     left: 61%;
  //  }
`;
const APStyle = styled(LocationStyle)`
  top: 35%;
  left: 77%;
  // @media screen and (min-width: 0) and(max-width:340px) {
  //     left: 80%;
  //     top: 90%;
  //     // transform: translate(-50%, -100%);
  //  }
  //  @media screen and (min-width: 840px) {
  //     top: 35%;
  //     left: 78%;
  //  }
  //  @media screen and (min-width: 1200px) {
  //      top: 42%;
  //      left: 82%;
  //  }
`;
const MapStyle = styled.div`
   position: absolute;
   top: 50px;
   height: 934px; 
   // position: relative;
   width: 100%;
   background: url('/images/map_bg.png')
`;
const JumbotronStyle = styled.div`
  height: 934px; 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ul {
    z-index: 1;
    display: flex;
    flex-direction: column;
    margin: 60px 0 0;
    padding: 0;
    list-style-type: none;
    @media screen and (min-width: 450px) {
      flex-flow: row wrap;
      justify-content: space-evenly;
      width: 100%;
      li:not(:last-child) {
        margin-right: 65px;
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
const StyledTitleTex = styled.div`
  bottom: 60%;
  margin: 20px 0 0;
  order: -1;
  word-break: break-all;
  span {
   white-space: nowrap;
  }
`;

const StyledButtonContent = styled.div`
  width: 100%;
  margin-top: 87px;
  button {
    margin-left: 20px;
  }
`;

const StyledInfoComponent = styled.div`
  margin-left: 140px;
  top: 20%;
  position: absolute;
  align-self: start;
  text-align: start;
  width: 16%;
  h1 {
    bottom: 60%;
    margin: 20px 0 0;
    order: -1;
    span {
      white-space: nowrap;
      color: ${colorVariables.apple};
    }
  }
  p {
    bottom: 25%;
    margin: 30px 0;
    line-height: 29px;
    font-family: ${fonts.secondary};
    font-size: 24px;
    color: ${colorVariables.santasGray};
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
      <ul>
        {boxesInfo.map(({ title, value }) => (
          <li key={title}>
            <InfoBox title={title} value={value} />
          </li>
        ))}
      </ul>
      <MapStyle>
        {renderButtons()}
        <MouseContainerStyle>
          <MouseStyle>
            <ScrollStyle />
          </MouseStyle>
          <Arrow />
        </MouseContainerStyle>
      </MapStyle>
      <StyledInfoComponent>
        <StyledTitleTex>
          <Text size="ultra-large" italic>Dedicated</Text>
          <Text size="ultra-large" italic>Pool for</Text>
          <Text size="ultra-large" color="apple" italic>CORE COIN</Text>
        </StyledTitleTex>
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
        <StyledButtonContent>
          <Button>Start Mining</Button>
        </StyledButtonContent>
      </StyledInfoComponent>
      {/* TODO change to a reusable component */}
    </JumbotronStyle>
  );
};
export default Jumbotron;
