import React, { FC } from 'react'
import ContentTitle from 'atoms/ContentTitle'
import MinerCard from 'components/MinerCard'
import SearchBar from 'atoms/SearchBar'
import MiningInfo from 'components/MiningInfo'
import { StartMiningIcon, RecentBlocksIcon } from 'atoms/icons'
import styled from 'styled-components'
import {
  MinerDataInfoData,
  MinerDataCardData,
  PoolDetailsData,
  LinksData,
} from '../../mockData/homePageData'
import Text from 'atoms/Text/Text'
import Background from 'atoms/Background'
import { colorVariables, fonts } from 'styles/variables'

const StyledText = styled.p`
  width: 807px;
  margin: 34px 0 0;
  font-family: ${fonts.secondary};
  font-size: 14px;
  a {
    color: ${colorVariables.apple};
  }
`

const StyledMinerCardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  margin: 54px 0 87px;
`

const StyledLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
  a {
    margin: 0.5rem 0;
    white-space: nowrap;
    color: ${colorVariables.apple};
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    margin: 3rem 0;
  }
`
const StyledContainer = styled.div`
  margin: 60px 140px 73px;
`
const StyledSearchBarContainer = styled.div`
  margin: 83px 140px;
  width: 1363px;
`
const StyledMiningInfoContainer = styled.div`
  margin-top: 41px;
`
const StyledMiningInfo = styled.div`
  margin-bottom: 57px;
`
const StyledMiningCard = styled.div`
  margin-bottom: 20px;
`
const StyledTitleContainer = styled.div`
  margin: 57px 0 73px;
`
const StyledBoxContent = styled.div`
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  margin-bottom: 31px;
`
const StyledBoxGuide = styled.div`
  margin: 55px 47px 0;
`
const StyledTextGuide = styled.div`
  border-bottom: 1px solid ${colorVariables.gunPowder};
  padding-bottom: 25px;
`
const StyledTextGuide1 = styled(StyledText)`
  margin-bottom: 111px;
`
const StyledTextGuide2 = styled(StyledText)`
  margin-bottom: 54px;
`
const StyledTextGuide3 = styled(StyledText)`
  margin-bottom: 70px;
`
const StyledTextGuide4 = styled(StyledText)`
  margin-bottom: 75px;
`

const StartMiningPage: FC = () => {
  const renderServerLinks = () => {
    const onClickHandler = () => setTimeout(() => window.scrollBy(0, -140), 0)

    return LinksData.map(({ href, text }) => (
      <a onClick={onClickHandler} href={href}>
        {text}
      </a>
    ))
  }

  return (
    <>
      <Background />
      <StyledContainer>
        <ContentTitle Image={<StartMiningIcon />}>START MINING</ContentTitle>
        <StyledMiningInfoContainer>
          <StyledMiningInfo>
            <MiningInfo data={MinerDataInfoData} title="Connect Europe Pool" />
          </StyledMiningInfo>
          <StyledMiningInfo>
            <MiningInfo
              data={MinerDataInfoData}
              title="Connect United States Pool"
            />
          </StyledMiningInfo>
          <StyledMiningInfo>
            <MiningInfo data={MinerDataInfoData} title="Connect Asia Pool" />
          </StyledMiningInfo>
          <StyledMiningInfo>
            <MiningInfo data={MinerDataInfoData} title="Connect Europe Pool" />
          </StyledMiningInfo>
        </StyledMiningInfoContainer>
        <StyledTitleContainer>
          <ContentTitle Image={<RecentBlocksIcon />}>START GUIDE</ContentTitle>
        </StyledTitleContainer>
        <StyledBoxContent>
          <StyledBoxGuide>
            <StyledTextGuide>
              <Text size="medium">Step 1: Get a Wallet</Text>
            </StyledTextGuide>
            <StyledTextGuide1>
              The easiest way to get a wallet is to register on{' '}
              <a href="https://pingexchange.com/">Ping Exchange</a> or download
              the mobile application{' '}
              <a href="https://corepass.net/">CorePass</a>.
              <br />
              <br />
              Alternatively should you want a hardware wallet you are welcome to
              purchase a <a href="">Ledger wallet</a> where you can generate you
              Core Coin wallet.
            </StyledTextGuide1>
            <StyledTextGuide>
              <Text size="medium">Step 2: Download mining software</Text>
            </StyledTextGuide>
            <StyledTextGuide2>
              You need to download the mining software, install and configure to
              start the mining application.
              <br />
              <br />
              <br />
              We recommend the following miners:
            </StyledTextGuide2>
            <StyledMinerCardsWrapper>
              <StyledMiningCard>
                <MinerCard data={MinerDataCardData} />
              </StyledMiningCard>
              <StyledMiningCard>
                <MinerCard data={MinerDataCardData} />
              </StyledMiningCard>
              <StyledMiningCard>
                <MinerCard data={MinerDataCardData} />
              </StyledMiningCard>
              <StyledMiningCard>
                <MinerCard data={MinerDataCardData} />
              </StyledMiningCard>
            </StyledMinerCardsWrapper>
            <StyledTextGuide>
              <Text size="medium">Step 3: Choose your server</Text>
            </StyledTextGuide>
            <StyledTextGuide3>
              We have 3 servers for you to choose from:
            </StyledTextGuide3>
            <StyledLinksWrapper>{renderServerLinks()}</StyledLinksWrapper>
            <StyledTextGuide>
              <Text size="medium">Step 4: Go To Dashboard</Text>
            </StyledTextGuide>
            <StyledTextGuide4>
              To access the dashboard, type your address below.
            </StyledTextGuide4>
            <StyledSearchBarContainer>
              <SearchBar />
            </StyledSearchBarContainer>
          </StyledBoxGuide>
        </StyledBoxContent>
        <MiningInfo data={PoolDetailsData} title="Pool details" color="white" />
      </StyledContainer>
    </>
  )
}

export default StartMiningPage
