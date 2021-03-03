import * as d3 from 'd3';
import React, { FC } from 'react';

import styled from 'styled-components';

const Hour = styled.div`
  fill: var(green-yellow);
`;
const AxisCircle = styled.div`
  fill: none;
  stroke: var(--gun-powder);
`;
const Tip = styled.div`
  display: none;
  position: absolute;
  color: var(--white);
  font-family: var(--secondary-font-family);
  font-size: 12px;
  background-color: var(--gun-powder);
  border-radius: 5px;
  padding: 10px;
`;
const Chart = styled.div`
  position: relative;
  width: 100%;
  ${Tip};
  svg {
    font-family: var(--primary-font-family);
    font-size: 18px;
    text {
      fill: var(--white);
    }
    g:last-child ${Hour};
    ${AxisCircle};
   
  }
`;

interface IProps {
  data: {
    time: string,
    value: number
  }[],
  className: string
}
const RadialBarChart: FC<IProps> = ({ data = null, className = '',
}) => {
  const width = 900;
  const height = width;
  const innerRadius = 250;
  const outerRadius = width * 0.6;

  function componentDidMount() {
    updateChart();
  }

  function componentDidUpdate() {
    updateChart();
  }

  const updateChart = () => {
    if (!data) {
      return;
    }

    d3.selectAll(`.${Chart} svg g`).remove();

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.time))
      .range([0, 2 * Math.PI])
      .align(0);

    const maxYDomainValue = d3.max(data, (d) => d.value);

    const y = d3
      .scaleRadial()
      .domain([0, maxYDomainValue + maxYDomainValue * 0.2])
      .range([innerRadius, outerRadius]);

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius((d) => y(d.value))
      .startAngle((d) => x(d.time))
      .endAngle((d) => x(d.time) + x.bandwidth())
      .padAngle(0.1)
      .padRadius(innerRadius);

    const xAxis = (g) =>
      g.attr('text-anchor', 'middle').call((g) =>
        g
          .selectAll('g')
          .data(data)
          .enter()
          .append('g')
          .attr(
            'transform',
            (d) => `
              rotate(${((x(d.time) + x.bandwidth() / 2) * 180) / Math.PI - 90})
              translate(${innerRadius - 30},0)
            `
          )
          .call((g) =>
            g
              .append('text')
              .attr('class', Hour)
              .attr(
                'transform',
                (d) =>
                  `rotate(${
                    90 - ((x(d.time) + x.bandwidth() / 2) * 180) / Math.PI
                  }) translate(0, 6)`,
              )
              .text((d) => `${d.time.split(' ')[1].slice(0, 2)}H`)
          )
      );

    const yAxis = (g) =>
      g
        .attr('text-anchor', 'middle')
        .call((g) =>
          g
            .append('text')
            .attr('x', 0)
            .attr('y', -y(y.ticks().pop()))
            .attr('dy', '-2em')
            .text('POOL HASH RATE')
        )
        .call((g) =>
          g
            .selectAll('g')
            .data(y.ticks(5))
            .join('g')
            .call((g) =>
              g.append('circle').attr('class', AxisCircle).attr('r', y)
            )
        );

    const tooltip = d3.select(`.${Tip}`);

    const onMouseover = (event, datum) => {
      tooltip
        .style('display', 'block')
        .html(
          `Time: ${datum.time}<br/>Hash rate: ${d3.format('0.4s')(datum.value)}`
        )
        .style('opacity', '0.8');
    };

    const onMousemove = (event, datum) => {
      const { pageX, pageY } = event;
      const rect = document.querySelector(`.${Chart}`).getBoundingClientRect();
      const tipRect = tooltip.node().getBoundingClientRect();
      const tipX = pageX - window.scrollX - rect.x;
      const tipY = pageY - window.scrollY - rect.y - tipRect.height - 20;

      tooltip
        .style(
          'left',
          `${x(datum.time) < Math.PI ? tipX - tipRect.width : tipX}px`
        )
        .style('top', `${tipY}px`);
    };

    const onMouseout = () => {
      tooltip.style('display', 'none');
    };

    const svg = d3
      .select(`.${Chart} svg`)
      .attr(
        'viewBox',
        `${-width / 2 - 150} ${-height / 2 - 150} 
        ${width + 300} ${height + 300}`,
      )
      .style('width', '100%')
      .style('height', 'auto');

    svg.append('g').call(xAxis);

    svg.append('g').call(yAxis);

    svg
      .append('g')
      .attr('fill', 'url(#arcGrad)')
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('d', arc)
      .on('mouseover', onMouseover)
      .on('mousemove', onMousemove)
      .on('mouseout', onMouseout);

    svg.append('g').call((g) =>
      g
        .attr('text-anchor', 'middle')
        .selectAll('g')
        .data(y.ticks(5).slice(1))
        .join('g')
        .attr('fill', 'none')
        .call((g) => g.append('circle').attr('fill-opacity', '0%').attr('r', y))
        .call((g) =>
          g
            .append('text')
            .attr('x', 0)
            .attr('y', (d) => -y(d))
            .attr('dy', '0.35em')
            .text(y.tickFormat(10, 's'))
        )
    );
    /* eslint-enable */
  };
  return data ? (
    <Chart className={className}>
      <svg>
        <defs>
          <radialGradient
            id="arcGrad"
            gradientUnits="userSpaceOnUse"
            cx="0"
            cy="0"
            fr="180"
          >
            <stop offset="0%" style={{ stopColor: '#365e67' }} />
            <stop offset="30%" style={{ stopColor: '#396a72' }} />
            <stop offset="60%" style={{ stopColor: '#67a542' }} />
          </radialGradient>
        </defs>
      </svg>
      <Tip />
    </Chart>
  ) : null;
};

export default RadialBarChart;
