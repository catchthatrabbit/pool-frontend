import Button from 'atoms/Button/Button';
import Center from 'atoms/Center';
import { Arrow } from 'atoms/icons';
import MapButton from 'atoms/MapButton/MapButton';
import Text from 'atoms/Text/Text';
import InfoBox from 'components/InfoBox/InfoBox';
import { poolConfig } from 'config';
import { pathsConstant } from 'constant';
import official from 'helpers/official';
import { minWidth } from 'helpers/responsive';
import { InfoBoxItemProps } from 'helpers/text';
import ResponsiveContext from 'providers/responsive-provider/context';
import { useContext } from 'react';
import { Suspense } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { homeService } from 'services';
import styled, { css, keyframes } from 'styled-components';
import { colorVariables } from 'styles/variables';

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
  display: none;
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
  position: relative;
  padding: 5px 20px;
  ${minWidth(
    'tablet',
    css`
      position: absolute;
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
  position: relative;
  padding: 5px 20px;
  ${minWidth(
    'tablet',
    css`
      position: absolute;
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
  position: relative;
  padding: 5px 20px;
  ${minWidth(
    'tablet',
    css`
      position: absolute;
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
      margin-left: 5vw;
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
      margin-left: 5vw;
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

const LegalWrapper = styled.div`
  width: 90vw;
  text-align: left;
`

const LegalBox = styled.div`
  text-align: left;
  padding: 1em;
  background-color: rgb(93, 99, 115, 0.1);
  color: #999eac;
  border-radius: 1em;
`

const LegalTitle = styled.div`
  font-size: 1.3em;
  font-family: Orbitron,sans-serif;
  color: #fff;
  margin-bottom: 0.3em;
  letter-spacing: 0.1em;
`

const LegalMessage = styled.div`
  line-height: 1.4em;
`

interface IJumbotronInfoBoxItemsProps {
  items?: InfoBoxItemProps[]
}

const JumbotronInfoBoxItems = ({ items }: IJumbotronInfoBoxItemsProps) => {
  const placeholder = useRef([
    { title: 'Pools hashrate', value: { text: '--', prefix: '', suffix: '' } },
    { title: 'Network hashrate', value: { text: '--', prefix: '', suffix: '' } },
    { title: 'Network difficulty', value: { text: '--', prefix: '', suffix: '' } },
    { title: 'Active miners', value: { text: '--', prefix: '', suffix: '' } },
    { title: 'Round variance', value: { text: '--', prefix: '', suffix: '' } },
  ])

  return (
    <ul>
      {
        (items ?? placeholder.current).map(({ title, value }) => (
          <li key={ title }>
            <InfoBox title={ title } value={ value } />
          </li>
        ))
      }
    </ul>
  )
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

// START: DO NOT MODIFY LEGAL NOTICE
const LegalNotice = () => {
  if (official()) { return null }
  return (
    <LegalWrapper>
      <LegalBox>
        <LegalTitle>The Rabbit community is aboard! 🐰🐰🐰</LegalTitle>
        <LegalMessage>This is not an offical pool, but its community distribution.<br />The official Catch that Rabbit pool is located at <a href="https://catchthatrabbit.com" target="_blank">catchthatrabbit.com</a>.<br />Please, report any malicious instance to at: <a href="mailto:security@catchthatrabbit.com">security@catchthatrabbit.com</a></LegalMessage>
      </LegalBox>
    </LegalWrapper>
  )
}
// END: DO NOT MODIFY LEGAL NOTICE

const Jumbotron = () => {
  const displayType = useContext(ResponsiveContext)
  const displayTitleTop = displayType === 'tablet' || displayType === 'mobileL'

  const { data, isLoading } = useQuery('JumbotronData', homeService.getJumbotron)


  const title = (
    <TitleTexStyled>
      <Text size="ultra-large">{ official() ? "Dedicated" : "Community" } Pool for</Text>
      <Text size="ultra-large" color="apple">
        &nbsp;Core Coin&nbsp;
      </Text>
      <Text size="ultra-large">&amp; IoT devices</Text>
    </TitleTexStyled>
  )

  return (
    <JumbotronStyle>
      <JumbotronInfoBoxItems items={ data?.infoBoxItems } />

      { (!isLoading && !data) && (
        <Center style={{ marginBlock: '2rem' }}>
          <Text color='red'>Ohh..Something went wrong!</Text>
        </Center>
      ) }

      <LegalNotice />

      <MapStyle>
        <ImageStyled src={'/images/map_bg.png'} alt={'Mining locations'} />
        <Locations>
          <USStyle>
            <MapButtonWrapper href={pathsConstant.connectToUsa}>
              US location
            </MapButtonWrapper>
          </USStyle>
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
        {title}
        <InfoTextContent>
          <Text color="santasGray" fontFamily="secondary" space="initial">
            「Core mining pool in the lotusland of Ores.」
            <br />
            <br />
            <Text fontFamily="primary" color="apple" size="large">
              Estd. {poolConfig.POOL_OPTIONS.estd}
            </Text>
            <br />
            <br />
          </Text>
          <Text color="santasGray" fontFamily="secondary" space="initial">
            <Text fontFamily="secondary" color="apple">
              Pay-per-last-N-shares
            </Text>&nbsp;
            (PPLNS) system with only&nbsp;
            <Text fontFamily="secondary" color="apple">
              {Boolean(data) ? `${data?.poolFee}%` : '-'} fee
            </Text>
            .
          </Text>
          <Text color="santasGray" fontFamily="secondary" space="initial">
            Please, select one of the locations to&nbsp;
            <a href="/start-mining">
              <Text fontFamily="secondary" color="apple">
                start your mining today
              </Text>
            </a>
            !
          </Text>
        </InfoTextContent>
      </InfoComponentStyled>
      <MouseContainerStyle>
        <MouseStyle>
          <ScrollStyle />
        </MouseStyle>
        <Arrow />
      </MouseContainerStyle>
    </JumbotronStyle>
  )
}
export default Jumbotron
