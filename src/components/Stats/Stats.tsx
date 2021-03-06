import React, { FC } from 'react';
import styled from 'styled-components';
import { StatisticsIcon } from 'src/atoms/icons'
import RadialBarChart from './RadialBarChart/index';
import { ChartData } from 'src/types/app';
import ContentTitle from 'src/atoms/ContentTitle/ContentTitle';
import InfoBox from 'src/atoms/InfoBox/InfoBox';

const Chart = styled.button`
  width: 100%;
  @media screen and (min-width: 900px) {
    width: 70%;
  }
`;
const ChartContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  background: url('images/statistics_bg.png') no-repeat top left / cover;
  ${Chart};
`;
const StatsStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 160px;
  box-sizing: border-box;
  
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
  data: ChartData,
}

const Stats: FC<IProps> = ({ data }) => {

  const boxesInfo = [
    { title: '24H Hashrate High', value: '192.9 GH/S' },
    { title: '24H Hashrate low', value: '19.2 GH/S' },
    { title: 'Round Variance', value: '200%' },
    { title: 'Blockchain Height', value: '99,000,000' },
    { title: 'Last XCB Payout', value: '₡ 330,000' },
  ];
  return (
    <StatsStyled>
      <ContentTitle Image={<StatisticsIcon/>}>
        Pool Statistics
      </ContentTitle>

      <ContentContainer>
        <ChartContainer>
          <RadialBarChart data={data} className={Chart} />
        </ChartContainer>
        <ul>
          {boxesInfo.map(({ title, value }) => (
            <li key={title}>
              <InfoBox title={title} value={value} />
            </li>
          ))}
        </ul>
      </ContentContainer>
    </StatsStyled>
  );
};

export default Stats;
