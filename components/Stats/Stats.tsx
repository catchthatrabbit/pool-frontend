import React, { FC } from 'react';

import styled, { css } from 'styled-components';

import CommonContentTitle from '../../src/components/common/common-content-title';
import CommonInfoBox from '../../src/components/common/common-info-box';

import RadialBarChart from '../RadialBarChart';

// import { stats, chartContainer, chart } from './Stats.module.scss';
const Chart = styled.button`
  width: 100%;
  @media screen and (min-width: 900px) {
    width: 70%;
  }
`;
const ChartContainer = styled.button`
  width: 100%;
  margin: 50px 0;
  background: url('../icons/icons/stats-bg.svg') no-repeat top left / cover;
  ${Chart};
`;
const StatsStyled = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${ChartContainer};
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style-type: none;
    li:not(:last-child) {
      margin-bottom: 20px;
    }
    @media screen and (min-width: 450px) {
      flex-flow: row wrap;
      justify-content: space-evenly;
      li:not(:last-child) {
        margin-right: 5px;
      }
    }
    @media screen and(min-width:900px) {
      position: absolute;
      flex-flow: column nowrap;
      margin: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      li:not(:last-child) {
        margin-right: 0;
        margin-bottom: 50px;
      }
    }
  }
`;

const Stats = () => {
  const chartData = [
    { time: '2020-10-20 15:00', value: 50542491 },
    { time: '2020-10-20 14:00', value: 63791200 },
    { time: '2020-10-20 13:00', value: 87130942 },
    { time: '2020-10-20 12:00', value: 63713117 },

    { time: '2020-10-20 11:00', value: 50151824 },
    { time: '2020-10-20 10:00', value: 40902891 },
    { time: '2020-10-20 09:00', value: 52357412 },
    { time: '2020-10-20 08:00', value: 89269059 },

    { time: '2020-10-20 07:00', value: 62905207 },
    { time: '2020-10-20 06:00', value: 54294158 },
    { time: '2020-10-20 05:00', value: 40343376 },
    { time: '2020-10-20 04:00', value: 73141705 },

    { time: '2020-10-20 03:00', value: 62585429 },
    { time: '2020-10-20 02:00', value: 83526370 },
    { time: '2020-10-20 01:00', value: 55552480 },
    { time: '2020-10-20 00:00', value: 64926524 },

    { time: '2020-10-19 23:00', value: 64320841 },
    { time: '2020-10-19 22:00', value: 19349722 },
    { time: '2020-10-19 21:00', value: 68986806 },
    { time: '2020-10-19 20:00', value: 20682192 },

    { time: '2020-10-19 19:00', value: 59587960 },
    { time: '2020-10-19 18:00', value: 70677299 },
    { time: '2020-10-19 17:00', value: 36826423 },
    { time: '2020-10-19 16:00', value: 87930194 },
  ].reverse();

  const boxesInfo = [
    { title: '24H Hashrate High', value: '192.9 GH/S' },
    { title: '24H Hashrate low', value: '19.2 GH/S' },
    { title: 'Round Variance', value: '200%' },
    { title: 'Blockchain Height', value: '99,000,000' },
    { title: 'Last XCB Payout', value: '₡ 330,000' },
  ];
  return (
    <StatsStyled>
      <CommonContentTitle image="/images/statistics.svg">
        Pool Statistics
      </CommonContentTitle>
      <ChartContainer>
        <RadialBarChart data={chartData} className={Chart} />
      </ChartContainer>
      {/* TODO change to a reusable component */}
      <ul>
        {boxesInfo.map(({ title, value }) => (
          <li key={title}>
            <CommonInfoBox title={title} value={value} />
          </li>
        ))}
      </ul>
    </StatsStyled>
  );
};

export default Stats;
