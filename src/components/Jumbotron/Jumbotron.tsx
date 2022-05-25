import Button from 'atoms/Button/Button'
import { Arrow } from 'atoms/icons'
import MapButton from 'atoms/MapButton/MapButton'
import Text from 'atoms/Text/Text'
import InfoBox from 'components/InfoBox/InfoBox'
import { pathsConstant } from 'constant'
import { minWidth } from 'helpers/responsive'
import { InfoBoxItem } from 'helpers/text'
import ResponsiveContext from 'providers/responsive-provider/context'
import React, { FC, useContext } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { colorVariables } from 'styles/variables'

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
  display: flex;
  ${minWidth(
    'mobileL',
    css`
      display: none;
    `,
  )}
  ${minWidth(
    'tablet',
    css`
      display: none;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      display: block;
      width: 27px;
      text-align: center;
      left: 50%;
      bottom: 5%;
    `,
  )}
`

const Locations = styled.div`
  position: absolute;
  top: 40%;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  ${minWidth('mobileL', css``)}
  ${minWidth(
    'tablet',
    css`
      top: 120px;
      width: 100vw;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      top: 0;
      width: auto;
    `,
  )}
`

const LocationStyle = styled.div`
  position: relative;
  ${minWidth(
    'tablet',
    css`
      position: absolute;
    `,
  )}
`
const USStyle = styled(LocationStyle)`
  ${minWidth(
    'mobileL',
    css`
      position: relative;
      padding: 5px 20px;
    `,
  )}
  ${minWidth(
    'tablet',
    css`
      position: absolute;
      padding: 5px 20px;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      top: 20vw;
      left: 10vw;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      top: 270px;
      left: 170px;
    `,
  )}
`
const EUStyle = styled(LocationStyle)`
  ${minWidth(
    'mobileL',
    css`
      position: relative;
      padding: 5px 20px;
    `,
  )}
  ${minWidth(
    'tablet',
    css`
      position: absolute;
      padding: 5px 20px;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      top: 18vw;
      left: 42vw;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      top: 270px;
      left: 600px;
    `,
  )}
`
const APStyle = styled(LocationStyle)`
  ${minWidth(
    'mobileL',
    css`
      position: relative;
      padding: 5px 20px;
    `,
  )}
  ${minWidth(
    'tablet',
    css`
      position: absolute;
      padding: 5px 20px;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      top: 19vw;
      left: 67vw;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      top: 350px;
      left: 980px;
    `,
  )}
`
const MapStyle = styled.div`
  width: 100vw;
  position: relative;
  order: 0;
  z-index: 0;
  ${minWidth(
    'tablet',
    css`
      width: 100vw;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      width: 100vw;
      max-width: 1400px;
      left: 150px;
      overflow: hidden;
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
    margin: 10px 0 0;
    padding: 0;
    justify-content: center;
    order: 2;
    width: auto;
    li {
      margin: 10px;
    }
  }

  ${minWidth(
    'tablet',
    css`
      ul {
        width: 100%;
      }
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      ul {
        order: -2;
        li {
          margin: 10px;
        }
      }
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
`

interface IProps {
  data: {
    infoBoxItems: InfoBoxItem[]
    poolFee: string
  }
}

const MapButtonWrapper = ({ href, children }) => {
  const displayType = useContext(ResponsiveContext)
  const showGlowingCircle = !(
    displayType === 'tablet' || displayType === 'mobileL'
  )
  const showFullBtn = displayType === 'tablet' || displayType === 'mobileL'

  if (showGlowingCircle) return <MapButton href={href}>{children}</MapButton>

  if (showFullBtn) {
    return (
      <Button theme="transparent" href={href} full>
        {children}
      </Button>
    )
  } else {
    return (
      <Button theme="transparent" href={href}>
        {children}
      </Button>
    )
  }
}

const Jumbotron: FC<IProps> = ({ data }) => {
  const displayType = useContext(ResponsiveContext)
  const displayTitleTop = displayType === 'tablet' || displayType === 'mobileL'

  const title = (
    <TitleTexStyled>
      <Text size="ultra-large">Dedicated Pool for</Text>
      <Text size="ultra-large" color="apple">
        Core Coin
      </Text>
      <Text size="ultra-large">&amp; IoT devices</Text>
    </TitleTexStyled>
  )
  return (
    <JumbotronStyle>
      <ul>
        {data.infoBoxItems.map(({ title, value }) => (
          <li key={title}>
            <InfoBox title={title} value={value} />
          </li>
        ))}
      </ul>
      {displayTitleTop && title}
      <MapStyle>
        <ImageStyled src={'/images/map_bg.png'} alt={'Mining locations'} />
        <Locations>
          <EUStyle>
            <MapButtonWrapper href={pathsConstant.connectToEurope}>
              EU location
            </MapButtonWrapper>
          </EUStyle>
          <APStyle>
            <MapButtonWrapper href={pathsConstant.connectToAsia}>
              AP location
            </MapButtonWrapper>
          </APStyle>
        </Locations>
      </MapStyle>
      <InfoComponentStyled>
        {!displayTitleTop && title}
        <InfoTextContent>
          <Text color="santasGray" fontFamily="secondary" space="initial">
            «Core mining pool in the Lotus land of Ores.»
            <br />
            Use waste energy to dig some Ores.
            <br />
            <br />
          </Text>
          <Text color="santasGray" fontFamily="secondary" space="initial">
            <Text fontFamily="secondary" color="apple">
              Pay-per-last-N-shares
            </Text>{' '}
            (PPLNS) system with only{' '}
            <Text fontFamily="secondary" color="apple">
              {data.poolFee}% fee
            </Text>
            .
          </Text>
          <Text color="santasGray" fontFamily="secondary" space="initial">
            Please, select one of the locations to{' '}
            <a href="/start-mining">
              <Text fontFamily="secondary" color="apple">
                start your mining today
              </Text>
            </a>
            !
          </Text>
        </InfoTextContent>
      </InfoComponentStyled>
      {displayType !== 'mobileL' && (
        <MouseContainerStyle>
          <MouseStyle>
            <ScrollStyle />
          </MouseStyle>
          <Arrow />
        </MouseContainerStyle>
      )}
    </JumbotronStyle>
  )
}
export default Jumbotron
