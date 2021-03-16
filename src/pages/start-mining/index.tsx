import React, { FC } from 'react'
import CommonContentTitle from 'atoms/ContentTitle'
// import CommonTitle from 'atoms/commonTitle'
import MinerCard from 'components/MinerCard'
import SearchBar from 'atoms/SearchBar'
import MiningInfo from 'components/MiningInfo'
import { StartMiningIcon, RecentBlocksIcon } from 'atoms/icons'
import styled from 'styled-components'
import {
  MinerDataInfo,
  MinerDataCard,
  PoolDetails,
  Links,
} from '../../mockData/homePageData'
import Text from 'atoms/Text/Text'

const TextStyled = styled.p`
  width: 807px;
  margin: 34px 0 0;
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 0.583rem;
  a {
    color: ${({ theme }) => theme.colors.apple};
  }
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
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
  a {
    margin: 0.5rem 0;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.apple};
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    margin: 3rem 0;
  }
`
const StyledContainer = styled.div`
  margin: 60px 140px 73px;
  background: url('images/statistics_bg.png') no-repeat;
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
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
  margin-bottom: 31px;
`
const StyledBoxGuide = styled.div`
  margin: 55px 47px 0;
`
const StyledTextGuide = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gunPowder};
  padding-bottom: 25px;
`
const TextStyledGuide1 = styled(TextStyled)`
  margin-bottom: 111px;
`
const TextStyledGuide2 = styled(TextStyled)`
  margin-bottom: 54px;
`
const TextStyledGuide3 = styled(TextStyled)`
  margin-bottom: 70px;
`
const TextStyledGuide4 = styled(TextStyled)`
  margin-bottom: 75px;
`

const StartMiningPage: FC = () => {
  const renderServerLinks = () => {
    const onClickHandler = () => setTimeout(() => window.scrollBy(0, -140), 0)

    return Links.map(({ href, text }) => (
      <a onClick={onClickHandler} href={href}>
        {text}
      </a>
    ))
  }

  return (
    <StyledContainer>
      <CommonContentTitle Image={<StartMiningIcon />}>
        START MINING
      </CommonContentTitle>
      <StyledMiningInfoContainer>
        <StyledMiningInfo>
          <MiningInfo data={MinerDataInfo} title="Connect Europe Pool" />
        </StyledMiningInfo>
        <StyledMiningInfo>
          <MiningInfo data={MinerDataInfo} title="Connect United States Pool" />
        </StyledMiningInfo>
        <StyledMiningInfo>
          <MiningInfo data={MinerDataInfo} title="Connect Asia Pool" />
        </StyledMiningInfo>
        <StyledMiningInfo>
          <MiningInfo data={MinerDataInfo} title="Connect Europe Pool" />
        </StyledMiningInfo>
      </StyledMiningInfoContainer>
      <StyledTitleContainer>
        <CommonContentTitle Image={<RecentBlocksIcon />}>
          START GUIDE
        </CommonContentTitle>
      </StyledTitleContainer>
      <StyledBoxContent>
        <StyledBoxGuide>
          <StyledTextGuide>
            <Text size="medium">Step 1: Get a Wallet</Text>
          </StyledTextGuide>
          <TextStyledGuide1>
            The easiest way to get a wallet is to register on{' '}
            <a href="https://pingexchange.com/">Ping Exchange</a> or download
            the mobile application <a href="https://corepass.net/">CorePass</a>.
            <br />
            <br />
            Alternatively should you want a hardware wallet you are welcome to
            purchase a <a href="">Ledger wallet</a> where you can generate you
            Core Coin wallet.
          </TextStyledGuide1>
          <StyledTextGuide>
            <Text size="medium">Step 2: Download mining software</Text>
          </StyledTextGuide>
          <TextStyledGuide2>
            You need to download the mining software, install and configure to
            start the mining application.
            <br />
            <br />
            <br />
            We recommend the following miners:
          </TextStyledGuide2>
          <MinerCardsWrapperStyled>
            <StyledMiningCard>
              <MinerCard data={MinerDataCard} />
            </StyledMiningCard>
            <StyledMiningCard>
              <MinerCard data={MinerDataCard} />
            </StyledMiningCard>
            <StyledMiningCard>
              <MinerCard data={MinerDataCard} />
            </StyledMiningCard>
            <StyledMiningCard>
              <MinerCard data={MinerDataCard} />
            </StyledMiningCard>
          </MinerCardsWrapperStyled>
          <StyledTextGuide>
            <Text size="medium">Step 3: Choose your server</Text>
          </StyledTextGuide>
          <TextStyledGuide3>
            We have 3 servers for you to choose from:
          </TextStyledGuide3>
          <LinksWrapperStyled>{renderServerLinks()}</LinksWrapperStyled>
          <StyledTextGuide>
            <Text size="medium">Step 4: Go To Dashboard</Text>
          </StyledTextGuide>
          <TextStyledGuide4>
            To access the dashboard, type your address below.
          </TextStyledGuide4>
          <StyledSearchBarContainer>
            <SearchBar />
          </StyledSearchBarContainer>
        </StyledBoxGuide>
      </StyledBoxContent>
      <MiningInfo data={PoolDetails} title="Pool details" color="white" />
    </StyledContainer>
  )
}

export default StartMiningPage
