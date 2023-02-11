import Background from 'atoms/Background';
import Button from 'atoms/Button/Button';
import ContentTitle from 'atoms/ContentTitle';
import { RecentBlocksIcon, StartMiningIcon } from 'atoms/icons';
import SearchBar from 'atoms/SearchBar';
import Text from 'atoms/Text/Text';
import MinerCard from 'components/MinerCard';
import MiningInfo from 'components/MiningInfo';
import { minWidth } from 'helpers/responsive';
import applyTransparence from 'helpers/transparentize';
import useGoToWallet from 'hooks/useGoToWallet';
import { useState } from 'react';
import { startMiningService } from 'services';
import styled, { css } from 'styled-components';
import { colorVariables, fonts } from 'styles/variables';
import { poolConfig } from 'config';

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
  flex-wrap: wrap;
  margin: 70px 0 100px;
  gap: 20px 30px;
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
const MiningContainerStyled = styled.div`
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  overflow: scroll;
  overflow-y: hidden;
  width: 100%;
  margin-bottom: 31px;
  ${minWidth(
    'tablet',
    css`
      overflow: hidden;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      width: auto;
    `,
  )}
`
const MiningTitleContainerStyled = styled.div`
  border-bottom: 1px solid ${colorVariables.gunPowder};
  margin: 0 27px;
  padding: 30px 0 15px 0;
  ${minWidth(
    'tablet',
    css`
      margin: 0 47px;
      padding: 50px 0 25px 0;
    `,
  )}
`

const MiningTableContainerStyled = styled.div`
  margin: 16px 0;
  & > div:nth-child(2n) {
    background-color: ${applyTransparence(0.1, colorVariables.gunPowder)};
  }
`
const MiningTableRowStyled = styled.div`
  margin: 0;
  padding: 20px 47px 10px 47px;
  font-size: 1.3em;
  & > span:first-child {
    margin-right: 20px;
  }
`
const BoxContentStyled = styled.div`
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  margin-bottom: 31px;

  kbd {
    color: ${colorVariables.apple};
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
const ButtonStyled = styled(Button)`
  margin: 10px 15px;
`

export const getServerSideProps = async () => {
  return {
    props: {
      minerDataCard: startMiningService.MinerDataCard,
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
        <ContentTitle Image={<StartMiningIcon />}>Pools</ContentTitle>
        <MiningInfoContainerStyled>
          {Object.keys(poolConfig.POOL_OPTIONS.pools).map((keyname,i) =>
            <MiningContainerStyled id={keyname}>
              <MiningTitleContainerStyled>
                <Text size="very-large" color="apple">
                  {poolConfig.POOL_OPTIONS.pools[keyname].name}
                </Text>
              </MiningTitleContainerStyled>
              <MiningTableContainerStyled>
                {Object.keys(poolConfig.POOL_OPTIONS.pools[keyname]).map((key,id) => key!='name' &&
                  <MiningTableRowStyled><span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span><span>{poolConfig.POOL_OPTIONS.pools[keyname][key]}</span></MiningTableRowStyled>
                )}
              </MiningTableContainerStyled>
            </MiningContainerStyled>
          )}
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
              <Text>Go-core command:</Text>
              <Text fontFamily="secondary">
                <kbd>chmod -x gocore &amp;&amp; ./gocore account new</kbd>
              </Text>
              <br />
              <Text space="initial">Wallet Generator command:</Text>
              <Text space="initial" fontFamily="secondary">
                <kbd>
                  chmod -x wallet-generator &amp;&amp; ./wallet-generator
                </kbd>
              </Text>
            </TextGuide1Styled>
            <TextGuideStyled id="software">
              <Text space="initial" size="large">
                Step 2: Download & Configure Verification software
              </Text>
            </TextGuideStyled>
            <TextGuide2Styled>
              <Text space="initial" fontFamily="secondary">
                You can automatically download and configure software with just one command.
              </Text>
              <Text space="initial" fontFamily="secondary">
                Or you can download the software and set it up.
              </Text>
              <br />
              <br />
              <Text space="initial" fontFamily="secondary">
                You can choose from the following software:
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
              {Object.keys(poolConfig.POOL_OPTIONS.pools).map((keyname,i) =>
                <ButtonStyled href={'#' + keyname} key={keyname} onClick={onClickHandler}>{poolConfig.POOL_OPTIONS.pools[keyname].name}</ButtonStyled>
              )}
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
        <a id="pool-details"></a>
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
