import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { StatisticsIcon } from 'atoms/icons'
import { ChartData } from 'types/app'
import ContentTitle from 'atoms/ContentTitle/ContentTitle'
import { InfoBoxItem } from 'helpers/text'
import InfoBox from 'components/InfoBox/InfoBox'
import RadialBarChart from './RadialBarChart/index'
import { minWidth } from 'helpers/responsive'

const ChartContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  transform: scale(1);
  ${minWidth(
    'tablet',
    css`
      transform: translateY(70px) translateX(40px) scale(1.5);
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      width: 100%;
      margin-right: 290px;
      transform: scale(1);
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      width: 100%;
      margin-right: 0;
    `,
  )}
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
  box-sizing: border-box;
  background: url('images/statistics_bg.png') no-repeat;
  flex-flow: column;
  background-position: -30px 0px;
  background-size: cover;
  padding: 0 40px;
  ul {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 0;
    li {
      width: 50%;
    }
    li:not(:last-child) {
      margin-bottom: 25px;
    }
  }
  ${minWidth(
    'tablet',
    css`
      flex-flow: row;
      background-position: -30px 0px;
      background-size: cover;
      padding: 0 40px;
      ul {
        margin-left: 180px;
      }
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      background-position: -15px -10px;
      padding: 0 50px;
      ul {
        position: absolute;
        right: 5%;
        height: 63%;
        width: auto;
        justify-content: space-between;
        margin-top: 50px;
        li {
          width: auto;
        }
      }
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      background-position: 25%;
      background-size: auto;
      padding: 0 160px;
      ul {
        position: relative;
        right: 0;
        height: auto;
        justify-content: center;
        li:not(:last-child) {
          margin-bottom: 50px;
        }
      }
    `,
  )}
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
