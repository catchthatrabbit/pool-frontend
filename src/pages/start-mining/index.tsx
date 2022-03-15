import Background from 'atoms/Background'
import ContentTitle from 'atoms/ContentTitle'
import { RecentBlocksIcon, StartMiningIcon } from 'atoms/icons'
import SearchBar from 'atoms/SearchBar'
import Text from 'atoms/Text/Text'
import MinerCard from 'components/MinerCard'
import MiningInfo from 'components/MiningInfo'
import { minWidth } from 'helpers/responsive'
import useGoToWallet from 'hooks/useGoToWallet'
import React, { FC, useState } from 'react'
import { getStartMiningData } from 'services/getStartMiningData'
import styled, { css } from 'styled-components'
import { colorVariables, fonts } from 'styles/variables'

import type { InferGetServerSidePropsType } from 'next'

const TextStyled = styled.p`
  margin: 34px 0 0;
  font-family: ${fonts.secondary};
  font-size: 16px;
  a {
    color: ${colorVariables.apple};
  }
  ${minWidth(
    'desktop',
    css`
      width: 807px;
    `,
  )}
`

const MinerCardsWrapperStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  margin: 54px 0 87px;
`

const LinksWrapperStyled = styled.div`
  display: flex;
  margin: 70px 0 100px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  a {
    white-space: nowrap;
    color: ${colorVariables.apple};
    margin-top: 25px;
  }
  ${minWidth(
    'tablet',
    css`
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      a {
        margin-top: 0;
      }
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      justify-content: space-evenly;
    `,
  )}
    ${minWidth(
    'desktop',
    css`
      justify-content: space-evenly;
    `,
  )}
`
const ContainerStyled = styled.div`
  z-index: 1;
  margin: 36px 20px 73px;
  ${minWidth(
    'tablet',
    css`
      margin: 36px 50px 73px;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      margin: 36px 100px 73px;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      margin: 36px 140px 73px;
    `,
  )}
`
const SearchBarContainerStyled = styled.div`
  margin: 83px auto;
  max-width: 100%;
  ${minWidth(
    'tablet',
    css`
      max-width: 83%;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      max-width: 88%;
    `,
  )}
`
const MiningInfoContainerStyled = styled.div`
  margin-top: 41px;
`
const MiningInfoStyled = styled.div`
  margin-bottom: 57px;
  overflow: scroll;
  overflow-y: hidden;
  ${minWidth(
    'tablet',
    css`
      overflow: hidden;
    `,
  )}
`
const MiningCardStyled = styled.div`
  margin-bottom: 20px;
  width: 100%;
  ${minWidth(
    'tablet',
    css`
      width: auto;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      width: 48%;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      width: auto;
    `,
  )}
`
const TitleContainerStyled = styled.div`
  margin: 57px 0 73px;
`
const BoxContentStyled = styled.div`
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  margin-bottom: 31px;

  kbd {
	  color: green;
	  border: 1px solid ${colorVariables.gunPowder};
	  border-radius: 3px;
	  padding: 0.3em;
    margin: 0.5rem;
  }
`
const BoxGuideStyled = styled.div`
  margin: 55px 47px 0;
`
const TextGuideStyled = styled.div`
  border-bottom: 1px solid ${colorVariables.gunPowder};
  padding-bottom: 25px;
`
const TextGuide1Styled = styled(TextStyled)`
  margin-bottom: 111px;

  span {
    display: inline-flex;
    align-items: center;
    line-height: 1.6;
    padding: 5px 0;
  }

  a {
    padding: 0 5px;
    margin: .5rem;
  }
`
const TextGuide2Styled = styled(TextStyled)`
  margin-bottom: 54px;
`
const TextGuide3Styled = styled(TextStyled)`
  margin-bottom: 70px;
`
const TextGuide4Styled = styled(TextStyled)`
  margin-bottom: 75px;
`

export const getServerSideProps = async () => ({
  props: await getStartMiningData(),
})

const onClickHandler = () => setTimeout(() => window.scrollBy(0, -184), 0)

const StartMiningPage: FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const [ searchValue, setSearchValue ] = useState('')
  const goToWallet = useGoToWallet()

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  const handleSearch = () => {
    goToWallet(searchValue)
  }
  return (
    <>
      <Background />
      <ContainerStyled>
        <ContentTitle Image={ <StartMiningIcon /> }>Start mining</ContentTitle>
        <MiningInfoContainerStyled>
          <MiningInfoStyled id="pool-europe">
            <MiningInfo
              data={ props.minerDataInfoEu }
              title="Connect to European Pool"
            />
          </MiningInfoStyled>
          {/*<MiningInfoStyled id="pool-na">
            <MiningInfo data={props.minerDataInfoDataNa} title="Connect to Northen American Pool" />
          </MiningInfoStyled>*/}
          <MiningInfoStyled id="pool-asia">
            <MiningInfo
              data={ props.minerDataInfoAs }
              title="Connect to Asian Pool"
            />
          </MiningInfoStyled>
        </MiningInfoContainerStyled>
        <TitleContainerStyled>
          <ContentTitle Image={ <RecentBlocksIcon /> }>Get started</ContentTitle>
        </TitleContainerStyled>
        <BoxContentStyled>
          <BoxGuideStyled>
            <TextGuideStyled>
              <Text size="large">Step 1: Get a Wallet</Text>
            </TextGuideStyled>
            <TextGuide1Styled>
              <Text fontFamily="secondary">Please, download the Core Wallet, where you can securely store your rewards.</Text>&nbsp;
              <Text fontFamily="secondary">You can download <a href="https://github.com/core-coin/go-core/releases" target="_blank">go-core client</a> or use <a href="https://github.com/core-coin/address-generator/releases" target="_blank">generator of ICAN addresses</a>.</Text>&nbsp;
              <Text fontFamily="secondary">Always remember to backup your private key! Clear your terminal session and history if needed.</Text>&nbsp;
              <Text fontFamily="secondary">No private key = no coins!</Text><br />
              <Text>go-core command</Text>
              <Text fontFamily="secondary"><kbd>personal.newAddress</kbd></Text><br />
              <Text>address generator commands</Text>&nbsp;
              <Text fontFamily="secondary"><kbd>address-generator -n 1</kbd> backup and then <kbd>clear && history -c</kbd></Text>
            </TextGuide1Styled>
            <TextGuideStyled>
              <Text size="large">Step 2: Download mining software</Text>
            </TextGuideStyled>
            <TextGuide2Styled>
              <Text fontFamily="secondary">You need to download the mining software, install and configure to start the mining application.</Text>
              <Text fontFamily="secondary">To configure mining simply run the script <kbd>sh ./mine.sh</kbd> and follow the instructions.</Text>
              <br /><br />
              <Text fontFamily="secondary">We recommend the following miner/s:</Text>
            </TextGuide2Styled>
            <MinerCardsWrapperStyled>
              <MiningCardStyled>
                <MinerCard data={ props.minerDataCard } />
              </MiningCardStyled>
            </MinerCardsWrapperStyled>
            <TextGuideStyled>
              <Text size="large">Step 3: Choose your server</Text>
            </TextGuideStyled>
            <TextGuide3Styled>
              We have geo-locations to choose from:
            </TextGuide3Styled>
            <LinksWrapperStyled>
              { props.links.map(({ href, text }) => (
                <a key={ text } href={ href } onClick={ onClickHandler }>
                  <Text
                    fontFamily="primary"
                    fontWeight="bold"
                    size="very-large"
                  >
                    { text }
                  </Text>
                </a>
              )) }
            </LinksWrapperStyled>
            <TextGuideStyled>
              <Text size="large">Step 4: Go To Dashboard</Text>
            </TextGuideStyled>
            <TextGuide4Styled>
              To access the dashboard, type your address below.
            </TextGuide4Styled>
            <SearchBarContainerStyled>
              <SearchBar
                value={ searchValue }
                onChange={ handleSearchValueChange }
                onSearch={ handleSearch }
              />
            </SearchBarContainerStyled>
          </BoxGuideStyled>
        </BoxContentStyled>
        <MiningInfo
          data={ props.poolDetails }
          title="Pool details"
          color="white"
        />
      </ContainerStyled>
    </>
  )
}

export default StartMiningPage
