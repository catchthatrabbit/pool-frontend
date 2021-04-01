import React, { FC } from 'react'
import styled from 'styled-components'
import { StatisticsIcon } from 'atoms/icons'
import { ChartData } from 'types/app'
import ContentTitle from 'atoms/ContentTitle/ContentTitle'
import { InfoBoxItem } from 'helpers/text'
import InfoBox from 'atoms/InfoBox/InfoBox'
import RadialBarChart from './RadialBarChart/index'

const ChartContainer = styled.div`
  width: 100%;
  margin: 50px 0;
`
const StatsStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 160px;
  box-sizing: border-box;
  background: url('images/statistics_bg.png') no-repeat;
  background-position: -1%;

  ul {
    list-style-type: none;
    margin-left: 180px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 0;
    li:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`

interface IProps {
  chartData: ChartData
  infoBoxData: InfoBoxItem[]
}

const Stats: FC<IProps> = ({ chartData, infoBoxData }) => (
  <StatsStyled>
    <ContentTitle Image={<StatisticsIcon />}>Pool Statistics</ContentTitle>

    <ContentContainer>
      <ChartContainer>
        <RadialBarChart data={chartData} />
      </ChartContainer>
      <ul>
        {infoBoxData.map(({ title, value, type }) => (
          <li key={title}>
            <InfoBox title={title} value={value} type={type} />
          </li>
        ))}
      </ul>
    </ContentContainer>
  </StatsStyled>
)

export default Stats
