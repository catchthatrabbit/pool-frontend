import React, { FC, useContext } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { colorVariables, fonts } from 'styles/variables'

import Button from 'atoms/Button/Button'
import Text from 'atoms/Text/Text'
import MapButton from 'atoms/MapButton/MapButton'
import { Arrow } from 'atoms/icons'
import InfoBox from 'components/InfoBox/InfoBox'
import { InfoBoxItem } from 'helpers/text'
import {
  startMining,
  connectToUS,
  connectToEurope,
  connectToAsia,
} from 'constants/paths'
import { minWidth } from 'helpers/responsive'
import ResponsiveContext from 'providers/responsive-provider/context'

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
  animation: ${scrollTranslate} 2.2s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
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
  display: flex;
  ${minWidth(
    'tablet',
    css`
      left: calc(50% + 190px);
      bottom: 0;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      left: calc(50% + 40px);
      bottom: 5%;
    `,
  )}
`

const LocationStyle = styled.div`
  position: absolute;
  top: 50%;
  padding: 20px;
  min-width: min(12vw, 215px);
`
const USStyle = styled(LocationStyle)`
  transform: scale(0.5);
  top: 1%;
  left: 8%;
  ${minWidth(
    'tablet',
    css`
      transform: scale(1);
      top: 14%;
      left: 23%;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      top: 18%;
      left: 25%;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      top: 25%;
      left: 35%;
    `,
  )}
`
const EUStyle = styled(LocationStyle)`
  transform: scale(0.5);
  top: 1%;
  left: 40%;
  ${minWidth(
    'tablet',
    css`
      transform: scale(1);
      top: 11%;
      left: 55%;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      top: 15%;
      left: 57%;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      top: 25%;
      left: 58%;
    `,
  )}
`
const APStyle = styled(LocationStyle)`
  transform: scale(0.5);
  top: 6%;
  left: 68%;
  ${minWidth(
    'tablet',
    css`
      transform: scale(1);
      top: 20%;
      left: 85%;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      top: 25%;
      left: 85%;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      top: 35%;
      left: 77%;
    `,
  )}
`
const MapStyle = styled.div`
  height: 100%;
  width: 100%;
  order: 0;
  transform: translateX(-90px);
  top: 90px;
  ${minWidth(
    'tablet',
    css`
      transform: translateX(-190px) translateY(20px);
      top: 90px;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      transform: translateX(0);
      position: absolute;
      left: -10px;
      top: 50px;
    `,
  )}
    ${minWidth(
    'desktop',
    css`
      left: -80px;
    `,
  )}
`
const JumbotronStyle = styled.div`
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ul {
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 0;
    padding: 0;
    justify-content: space-around;
    order: 2;
    width: 90%;
    li {
      margin-top: 20px;
    }
  }

  ${minWidth(
    'tablet',
    css`
      ul {
        width: 85%;
      }
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      ul {
        justify-content: space-between;
        order: -2;
        width: 90%;
        li {
          margin-top: 0;
        }
      }
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      ul {
        width: 85%;
      }
      height: 934px;
      overflow-x: unset;
    `,
  )}
`
const TitleTexStyled = styled.div`
  z-index: 1;
  bottom: 60%;
  margin: 20px 0 0;
  order: -1;
  word-break: break-all;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text {
    margin-right: 10px;
  }
  ${minWidth(
    'laptopL',
    css`
      justify-content: left;
    `,
  )}
`

const ButtonContentStyled = styled.div`
  width: 100%;
  button {
    margin-left: 20px;
  }
  ${minWidth(
    'laptop',
    css`
      margin-top: 25px;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      margin-top: 87px;
    `,
  )}
`

const InfoComponentStyled = styled.div`
  z-index: 1;
  align-self: start;
  text-align: center;
  width: 100%;

  ${minWidth(
    'tablet',
    css`
      text-align: center;
      width: 100%;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      text-align: start;
      margin-left: 100px;
      width: 20%;
      top: 20%;
      position: absolute;
      p {
        font-size: 24px;
      }
    `,
  )}
   ${minWidth(
    'desktop',
    css`
      text-align: start;
      margin-left: 140px;
      width: 20%;
      top: 20%;
      position: absolute;
    `,
  )}
`
const InfoTextContent = styled.div`
  bottom: 25%;
  margin: 30px 0;
  display: flex;
  flex-flow: column;
`
const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
  transform: scale(1.4);
  ${minWidth(
    'laptop',
    css`
      height: 100%;
      width: 100%;
      transform: scale(1.4);
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      transform: scale(1);
    `,
  )}
`

interface IProps {
  data: InfoBoxItem[]
}

const MapButtonWrapper = ({ href, children }) => {
  const displayType = useContext(ResponsiveContext)
  const showGlowingCircle = !(
    displayType === 'tablet' || displayType === 'mobileL'
  )

  if (showGlowingCircle) return <MapButton href={href}>{children}</MapButton>

  return (
    <Button theme="transparent" href={href}>
      {children}
    </Button>
  )
}

const Jumbotron: FC<IProps> = ({ data }) => {
  const displayType = useContext(ResponsiveContext)
  const displayTitleTop = displayType === 'tablet' || displayType === 'mobileL'

  const title = (
    <TitleTexStyled>
      <Text size="ultra-large">
        Dedicated Pool for
      </Text>
      <Text size="ultra-large" color="apple">
        Core Coin
      </Text>
      <Text size="ultra-large">
        & IoT devices
      </Text>
    </TitleTexStyled>
  )
  return (
    <JumbotronStyle>
      <ul>
        {data.map(({ title, value, type }) => (
          <li key={title}>
            <InfoBox title={title} value={value} type={type} />
          </li>
        ))}
      </ul>
      {displayTitleTop && title}
      <MapStyle>
        <ImageStyled src={'/images/map_bg.png'} alt={'Mining locations'} />
        <USStyle>
          <MapButtonWrapper href={connectToUS}>
            US location
          </MapButtonWrapper>
        </USStyle>
        <EUStyle>
          <MapButtonWrapper href={connectToEurope}>
            EU location
          </MapButtonWrapper>
        </EUStyle>
        <APStyle>
          <MapButtonWrapper href={connectToAsia}>
            AP location
          </MapButtonWrapper>
        </APStyle>
        <MouseContainerStyle>
          <MouseStyle>
            <ScrollStyle />
          </MouseStyle>
          <Arrow />
        </MouseContainerStyle>
      </MapStyle>
      <InfoComponentStyled>
        {!displayTitleTop && title}
        <InfoTextContent>
          <Text
            color="santasGray"
            fontFamily="secondary"
            space="initial"
          >
            «Core mining pool in the Lotus land of Ores.»<br />
			Use waste energy to dig some Ores.
			<br /><br />
          </Text>
          <Text
            color="santasGray"
            fontFamily="secondary"
            space="initial"
          >
            Pay-per-last-N-shares (PPLNS) system with only 2% fee.
          </Text>
          <Text
            color="santasGray"
            fontFamily="secondary"
            space="initial"
          >
            Please, select one of the locations to <a href="/start-mining">start your mines today</a>!
          </Text>
        </InfoTextContent>
        <ButtonContentStyled>
          <Button href={startMining}>Start Mining</Button>
        </ButtonContentStyled>
      </InfoComponentStyled>
    </JumbotronStyle>
  )
}
export default Jumbotron
