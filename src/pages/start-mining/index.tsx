import React, { FC, useState } from 'react'
import ContentTitle from 'atoms/ContentTitle'
import MinerCard from 'components/MinerCard'
import SearchBar from 'atoms/SearchBar'
import MiningInfo from 'components/MiningInfo'
import { StartMiningIcon, RecentBlocksIcon } from 'atoms/icons'
import styled, { css } from 'styled-components'
import {
  MinerDataInfoData,
  MinerDataCardData,
  PoolDetailsData,
  LinksData,
} from 'mockData/homePageData'
import Text from 'atoms/Text/Text'
import Background from 'atoms/Background'
import { colorVariables, fonts } from 'styles/variables'
import useGoToWallet from 'hooks/useGoToWallet'
import { minWidth } from 'helpers/responsive'

const TextStyled = styled.p`
  margin: 34px 0 0;
  font-family: ${fonts.secondary};
  font-size: 14px;
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
  margin: 36px 10px 73px;
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
const onClickHandler = () => setTimeout(() => window.scrollBy(0, -184), 0)

const StartMiningPage: FC = () => {
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
        <ContentTitle Image={<StartMiningIcon />}>START MINING</ContentTitle>
        <MiningInfoContainerStyled>
          <MiningInfoStyled id="europe">
            <MiningInfo data={MinerDataInfoData} title="Connect Europe Pool" />
          </MiningInfoStyled>
          <MiningInfoStyled id="united_states">
            <MiningInfo
              data={MinerDataInfoData}
              title="Connect United States Pool"
            />
          </MiningInfoStyled>
          <MiningInfoStyled id="asia">
            <MiningInfo data={MinerDataInfoData} title="Connect Asia Pool" />
          </MiningInfoStyled>
        </MiningInfoContainerStyled>
        <TitleContainerStyled>
          <ContentTitle Image={<RecentBlocksIcon />}>START GUIDE</ContentTitle>
        </TitleContainerStyled>
        <BoxContentStyled>
          <BoxGuideStyled>
            <TextGuideStyled>
              <Text size="medium">Step 1: Get a Wallet</Text>
            </TextGuideStyled>
            <TextGuide1Styled>
              The easiest way to get a wallet is to register on{' '}
              <a href="https://pingexchange.com/">Ping Exchange</a> or download
              the mobile application{' '}
              <a href="https://corepass.net/">CorePass</a>.
              <br />
              <br />
              Alternatively should you want a hardware wallet you are welcome to
              purchase a <a href="">Ledger wallet</a> where you can generate you
              Core Coin wallet.
            </TextGuide1Styled>
            <TextGuideStyled>
              <Text size="medium">Step 2: Download mining software</Text>
            </TextGuideStyled>
            <TextGuide2Styled>
              You need to download the mining software, install and configure to
              start the mining application.
              <br />
              <br />
              <br />
              We recommend the following miners:
            </TextGuide2Styled>
            <MinerCardsWrapperStyled>
              <MiningCardStyled>
                <MinerCard data={MinerDataCardData} />
              </MiningCardStyled>
              <MiningCardStyled>
                <MinerCard data={MinerDataCardData} />
              </MiningCardStyled>
              <MiningCardStyled>
                <MinerCard data={MinerDataCardData} />
              </MiningCardStyled>
              <MiningCardStyled>
                <MinerCard data={MinerDataCardData} />
              </MiningCardStyled>
            </MinerCardsWrapperStyled>
            <TextGuideStyled>
              <Text size="medium">Step 3: Choose your server</Text>
            </TextGuideStyled>
            <TextGuide3Styled>
              We have 3 servers for you to choose from:
            </TextGuide3Styled>
            <LinksWrapperStyled>
              {LinksData.map(({ href, text }) => (
                <a key={text} href={href} onClick={onClickHandler}>
                  {text}
                </a>
              ))}
            </LinksWrapperStyled>
            <TextGuideStyled>
              <Text size="medium">Step 4: Go To Dashboard</Text>
            </TextGuideStyled>
            <TextGuide4Styled>
              To access the dashboard, type your address below.
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
        <MiningInfo data={PoolDetailsData} title="Pool details" color="white" />
      </ContainerStyled>
    </>
  )
}

export default StartMiningPage
