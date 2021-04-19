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
  margin: 0;
  transform: scale(1);
  ${minWidth(
    'tablet',
    css`
      transform: translateY(70px) translateX(10px) scale(1);
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      margin: 50px 290px 0 0;
      width: 100%;
      transform: scale(1);
    `,
  )}
    ${minWidth(
    'laptopL',
    css`
      margin-right: 360px;
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
  flex-flow: column;
  background: url('images/statistics_bg.png') no-repeat -30px 0;
  align-items: center;
  background-size: cover;
  padding: 0 40px;
  ul {
    width: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 0;
    li {
      width: auto;
    }
    li:not(:last-child) {
      margin-bottom: 25px;
    }
  }
  ${minWidth(
    'tablet',
    css`
      background-position: -100px -60px;
      background-size: cover;
      padding: 0 40px;
      ul {
        margin-top: 50px;
        flex-flow: row wrap;
        justify-content: space-evenly;
        li {
          margin-bottom: 25px;
        }
      }
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      flex-flow: row;
      background-position: 5px 0;
      padding: 0 50px;
      ul {
        flex-flow: column;
        position: absolute;
        right: 5%;
        height: 63%;
        width: auto;
        justify-content: space-between;
        margin-left: 180px;
        li {
          width: auto;
        }
      }
    `,
  )}
    ${minWidth(
    'laptopL',
    css`
      background-position: 0 5px;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      background-position: 0;
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
