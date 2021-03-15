/* eslint-disable react/jsx-wrap-multilines */
import {
  TableInfoStyled,
  TextStyled,
  MinerCardsWrapperStyled,
  LinksWrapperStyled,
} from './style'
import CommonContentTitle from '../../../components/ContentTitle'
import CommonTitle from '../../atoms/common-title'
import BaseMinerCard from '../../components/MinerCard'
import SearchBar from '../../atoms/SearchBar'
import MiningInfo from '../../components/MiningInfo/MiningInfo'
import InfoTable from '../../atoms/InfoTable/InfoTable'

const minerData = {
  title: 'Sentinel',
  description: 'Fast miner with 0% fees',
  info: ['OS: Windows, Linux', 'CPUs: AMD, NVIDIA', 'Fee: 0%'],
  configLink: 'https://mega.nz/folder/O4YA2JgD#n2b4iSHQDruEsYUvTQP5_w',
  minerLink: 'https://mega.nz/folder/O4YA2JgD#n2b4iSHQDruEsYUvTQP5_w',
}

const poolDetails = [
  { key: '1', title: 'Reward scheme', value: 'PPLNS (Pay Per Last N Shares)' },
  { key: '2', title: 'We pay regularly', value: '3 times per day' },
  { key: '3', title: 'Pool fee', value: '2%' },
  { key: '4', title: 'Payout round', value: '6 Hours' },
  { key: '5', title: 'Payout threshhold', value: 'Minimum 20 XCB' },
  { key: '6', title: 'Share difficulty', value: '4 GH' },
  { key: '7', title: 'Mining algorithm', value: 'CryptOre' },
]

const ContactPageUi = () => {
  const renderServerLinks = () => {
    const links = [
      { href: '#europe', text: 'Europe' },
      { href: '#united_states', text: 'United States' },
      { href: '#asia', text: 'Asia' },
    ]
    const onClickHandler = () => setTimeout(() => window.scrollBy(0, -140), 0)

    return links.map(({ href, text }) => (
      <a onClick={onClickHandler} href={href}>
        {text}
      </a>
    ))
  }

  const minerData = [
    { key: '1', title: 'server', value: 'eu.ctrpool.io' },
    { key: '2', title: 'port', value: '4444' },
    { key: '3', title: 'secure (ssl) port', value: '5555' },
    {
      key: '4',
      title: 'Username',
      value: '<your Core Coin Address>.<Worker Name>',
    },
    { key: '5', title: 'Password', value: '<empty>' },
  ]

  return (
    <>
      <CommonContentTitle image="/images/minings.svg">
        START MINING
      </CommonContentTitle>

      <MiningInfo data={minerData} title="Connect Europe Pool" />
      <MiningInfo data={minerData} title="Connect United States Pool" />
      <MiningInfo data={minerData} title="Connect Asia Pool" />
      <MiningInfo data={minerData} title="Connect Europe Pool" />

      <CommonContentTitle image="/images/minings.svg">
        START GUIDE
      </CommonContentTitle>

      <CommonBox>
        <CommonTitle size="medium">Step 1: Get a Wallet</CommonTitle>
        <TextStyled>
          The easiest way to get a wallet is to register on{' '}
          <a href="https://pingexchange.com/">Ping Exchange</a> or download the
          mobile application <a href="https://corepass.net/">CorePass</a>.
          <br />
          <br />
          Alternatively should you want a hardware wallet you are welcome to
          purchase a <a href="">Ledger wallet</a> where you can generate you
          Core Coin wallet.
        </TextStyled>
        <CommonTitle size="medium">
          Step 2: Download mining software
        </CommonTitle>
        <TextStyled>
          You need to download the mining software, install and configure to
          start the mining application.
          <br />
          <br />
          <br />
          We recommend the following miners:
        </TextStyled>
        <MinerCardsWrapperStyled>
          <BaseMinerCard data={minerData} />
          <BaseMinerCard data={minerData} />
          <BaseMinerCard data={minerData} />
          <BaseMinerCard data={minerData} />
        </MinerCardsWrapperStyled>
        <CommonTitle size="medium">Step 3: Choose your server</CommonTitle>
        <TextStyled>We have 3 servers for you to choose from:</TextStyled>
        <LinksWrapperStyled>{renderServerLinks()}</LinksWrapperStyled>
        <CommonTitle size="medium">Step 4: Go To Dashboard</CommonTitle>
        <TextStyled>
          To access the dashboard, type your address below.
        </TextStyled>
        <SearchBar />
      </CommonBox>

      <CommonBox>
        <CommonTitle>Pool details</CommonTitle>
        <TableInfoStyled>
          <InfoTable data={poolDetails} />
        </TableInfoStyled>
      </CommonBox>
    </>
  )
}

export default ContactPageUi
