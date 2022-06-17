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
import { startMiningService } from 'services'
import styled, { css } from 'styled-components'
import { colorVariables, fonts } from 'styles/variables'

import type { InferGetServerSidePropsType, NextPage } from 'next'

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
  margin: 10px 20px 73px;
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
    white-space: break-spaces;
  }
`
const BoxGuideStyled = styled.div`
  margin: 2rem;
  ${minWidth(
    'tablet',
    css`
      margin: 55px 47px 0;
    `,
  )}
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
    flex-wrap: wrap;
    line-height: 1.6;
    padding: 5px 0;

    &.inline-block {
      display: inline-block;
    }
  }

  a {
    padding: 0 5px;
    margin: 0.5rem;
    white-space: nowrap;
  }
`
const TextGuide2Styled = styled(TextStyled)`
  margin-bottom: 54px;

  span {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 1.6;
    padding: 5px 0;

    &.inline-block {
      display: inline-block;
    }
  }

  a {
    padding: 0 5px;
    margin: 0.5rem;
    white-space: nowrap;
  }
`
const TextGuide3Styled = styled(TextStyled)`
  margin-bottom: 70px;
`
const TextGuide4Styled = styled(TextStyled)`
  margin-bottom: 75px;
`

export const getServerSideProps = async () => {
  return {
    props: {
      minerDataInfoEu: startMiningService.MinerDataInfoEu,
      minerDataInfoEuSec: startMiningService.MinerDataInfoEuSec,
      minerDataInfoNa: startMiningService.MinerDataInfoNa,
      minerDataInfoAs: startMiningService.MinerDataInfoAs,
      minerDataInfoAsSec: startMiningService.MinerDataInfoAsSec,
      minerDataCard: startMiningService.MinerDataCard,
      links: startMiningService.Links,
      poolDetails: await startMiningService.getPoolDetails(),
    },
  }
}

const onClickHandler = () => setTimeout(() => window.scrollBy(0, -184), 0)

const StartMiningPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const [searchValue, setSearchValue] = useState('')
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
        <ContentTitle Image={<StartMiningIcon />}>Start mining</ContentTitle>
        <MiningInfoContainerStyled>
          <MiningInfoStyled id="pool-europe">
            <MiningInfo
              data={props.minerDataInfoEu}
              title="Connect to European Pool"
            />
          </MiningInfoStyled>
          <MiningInfoStyled id="pool-europe-1">
            <MiningInfo
              data={props.minerDataInfoEuSec}
              title="Backup European Pool"
            />
          </MiningInfoStyled>
          <MiningInfoStyled id="pool-asia">
            <MiningInfo
              data={props.minerDataInfoAs}
              title="Connect to Asian Pool"
            />
          </MiningInfoStyled>
          <MiningInfoStyled id="pool-asia-1">
            <MiningInfo
              data={props.minerDataInfoAsSec}
              title="Backup Asian Pool"
            />
          </MiningInfoStyled>
        </MiningInfoContainerStyled>
        <TitleContainerStyled>
          <ContentTitle Image={<RecentBlocksIcon />}>Get started</ContentTitle>
        </TitleContainerStyled>
        <BoxContentStyled>
          <BoxGuideStyled>
            <TextGuideStyled>
              <Text size="large">Step 1: Get a Wallet</Text>
            </TextGuideStyled>
            <TextGuide1Styled>
              <Text space="initial" fontFamily="secondary">
                Please, download the Core Wallet, where you can securely store
                your rewards.
              </Text>
              <Text space="initial" fontFamily="secondary">
                <span className="inline-block">You can download</span>
                <a
                  href="https://github.com/core-coin/go-core/releases"
                  target="_blank"
                >
                  go-core client
                </a>
                <span className="inline-block"> or use </span>
                <a
                  href="https://github.com/core-coin/wallet-generator/releases"
                  target="_blank"
                >
                  generator of ICAN wallets
                </a>
                <span>.</span>
              </Text>
              <Text space="initial" fontFamily="secondary">
                Always remember to backup your private key! Clear your terminal
                session and history if needed:{' '}
                <kbd>clear &amp;&amp; history -c</kbd>
              </Text>
              <br />
              <Text space="initial" fontFamily="secondary">
                No Private key = No Coins!
              </Text>
              <br />
              <Text>Go-core command</Text>
              <Text fontFamily="secondary">
                <kbd>chmod -x gocore &amp;&amp; ./gocore account new</kbd>
              </Text>
              <br />
              <Text space="initial">Wallet Generator command</Text>
              <Text space="initial" fontFamily="secondary">
                <kbd>
                  chmod -x wallet-generator &amp;&amp; ./wallet-generator
                </kbd>
              </Text>
            </TextGuide1Styled>
            <TextGuideStyled>
              <Text space="initial" size="large">
                Step 2: Download Mining software
              </Text>
            </TextGuideStyled>
            <TextGuide2Styled>
              <Text space="initial" fontFamily="secondary">
                You need to download the Mining software, install and configure
                it to start the mining application.
              </Text>
              <Text space="initial" fontFamily="secondary">
                To configure the Mining client, run the script{' '}
                <kbd>bash ./mine.sh</kbd> and follow the instructions.
              </Text>
              <br />
              <br />
              <Text space="initial" fontFamily="secondary">
                We recommend the following miner/s:
              </Text>
            </TextGuide2Styled>
            <MinerCardsWrapperStyled>
              <MiningCardStyled>
                <MinerCard data={props.minerDataCard} />
              </MiningCardStyled>
            </MinerCardsWrapperStyled>
            <TextGuideStyled>
              <Text space="initial" size="large">
                Step 3: Choose your server
              </Text>
            </TextGuideStyled>
            <TextGuide3Styled>
              We have Geo-locations to choose from:
            </TextGuide3Styled>
            <LinksWrapperStyled>
              {props.links.map(({ href, text }) => (
                <a key={text} href={href} onClick={onClickHandler}>
                  <Text
                    fontFamily="primary"
                    fontWeight="bold"
                    size="very-large"
                  >
                    {text}
                  </Text>
                </a>
              ))}
            </LinksWrapperStyled>
            <TextGuideStyled>
              <Text space="initial" size="large">
                Step 4: Go To Dashboard
              </Text>
            </TextGuideStyled>
            <TextGuide4Styled>
              To access the Dashboard, type your address below.
            </TextGuide4Styled>
            <SearchBarContainerStyled>
              <SearchBar
                value={searchValue}
                onChange={handleSearchValueChange}
                onSearch={handleSearch}
              />
            </SearchBarContainerStyled>
          </BoxGuideStyled>
        </BoxContentStyled>
        <MiningInfo
          data={props.poolDetails}
          title="Pool details"
          color="white"
        />
      </ContainerStyled>
    </>
  )
}

export default StartMiningPage
