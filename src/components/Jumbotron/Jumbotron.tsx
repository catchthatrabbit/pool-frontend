import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { colorVariables, fonts } from 'styles/variables'

import Button from 'atoms/Button/Button'
import Text from 'atoms/Text/Text'
import MapButton from 'atoms/MapButton/MapButton'
import { Arrow } from 'atoms/icons'
import InfoBox, { InfoBoxItem } from 'atoms/InfoBox/InfoBox'

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
`
const ScrollStyle = styled.div`
  position: absolute;
  top: 5px;
  width: 3px;
  height: 8px;
  background: ${colorVariables.white};
  border-radius: 25%;
  animation: ${scrollTranslate} 2.2s cubic-bezier(0.15, 0.41, 0.69, 0.94)
    infinite;
`
const MouseStyle = styled.div`
  width: 3px;
  height: 18px;
  background: ${colorVariables.woodsmoke};
  padding: 8px 10px;
  border: 2px solid ${colorVariables.gunPowder};
  border-radius: 20px;
`
const MouseContainerStyle = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 24px;
  height: 64px;
  left: calc(50% + 40px);
  bottom: 5%;
  display: flex;
`

const LocationStyle = styled.div`
  position: absolute;
  top: 50%;
  font-weight: 600;
  padding: 20px;
  min-width: min(12vw, 215px);
`
const USStyle = styled(LocationStyle)`
  top: 25%;
  left: 35%;
`
const EUStyle = styled(LocationStyle)`
  top: 25%;
  left: 58%;
`
const APStyle = styled(LocationStyle)`
  top: 35%;
  left: 77%;
`
const MapStyle = styled.div`
  position: absolute;
  left: -80px;
  top: 50px;
  height: 934px;
  width: 100%;
  background: url('/images/map_bg.png');
`
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
    margin: 20px 0 0;
    padding: 0;
    list-style-type: none;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
    li:not(:last-child) {
      margin-right: 65px;
      margin-bottom: 50px;
    }
  }
`
const StyledTitleTex = styled.div`
  bottom: 60%;
  margin: 20px 0 0;
  order: -1;
  word-break: break-all;
  span {
    white-space: nowrap;
  }
`

const StyledButtonContent = styled.div`
  width: 100%;
  margin-top: 87px;
  button {
    margin-left: 20px;
  }
`

const StyledInfoComponent = styled.div`
  margin-left: 140px;
  top: 20%;
  position: absolute;
  align-self: start;
  text-align: start;
  width: 355px;
  p {
    bottom: 25%;
    margin: 30px 0;
    line-height: 29px;
    font-family: ${fonts.secondary};
    font-size: 24px;
    color: ${colorVariables.santasGray};
  }
`
interface IProps {
  data: InfoBoxItem[]
}

const Jumbotron: FC<IProps> = ({ data }) => (
  <JumbotronStyle>
    <ul>
      {data.map(({ title, value, type }) => (
        <li key={title}>
          <InfoBox title={title} value={value} type={type} />
        </li>
      ))}
    </ul>
    <MapStyle>
      <USStyle>
        <MapButton href="/">Connect US location</MapButton>
      </USStyle>
      <EUStyle>
        <MapButton href="/">Connect EU location</MapButton>
      </EUStyle>
      <APStyle>
        <MapButton href="/">Connect AP location</MapButton>
      </APStyle>
      <MouseContainerStyle>
        <MouseStyle>
          <ScrollStyle />
        </MouseStyle>
        <Arrow />
      </MouseContainerStyle>
    </MapStyle>
    <StyledInfoComponent>
      <StyledTitleTex>
        <Text size="ultra-large" italic>
          Dedicated
        </Text>
        <Text size="ultra-large" italic>
          Pool for
        </Text>
        <Text size="ultra-large" color="apple" italic>
          CORE COIN
        </Text>
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
  </JumbotronStyle>
)
export default Jumbotron
