// @ts-nocheck
import * as d3 from 'd3'
import React, { FC, useEffect } from 'react'
import { colorVariables, fonts } from 'styles/variables'

import styled from 'styled-components'
import { ChartData } from 'types/app'

const axisCircleClass = 'radial-bar-axis-circle'
const hourClass = 'radial-bar-hour'

const Tip = styled.div`
  display: none;
  position: absolute;
  color: ${colorVariables.white};
  font-family: ${fonts.secondary};
  font-size: 12px;
  background-color: ${colorVariables.gunPowder};
  border-radius: 5px;
  padding: 10px;
`
const Chart = styled.div`
  position: relative;
  width: 100%;
  svg {
    font-family: ${fonts.primary};
    font-size: 18px;
    text {
      fill: ${colorVariables.white};
    }
    g:last-child .${hourClass} {
      fill: ${colorVariables.greenYellow};
    }
    .${axisCircleClass} {
      fill: none;
      stroke: ${colorVariables.gunPowder};
    }
  }
`

interface IProps {
  data: ChartData
}

const RadialBarChart: FC<IProps> = ({ data = null }) => {
  const size = 900
  const innerRadius = 250
  const outerRadius = size * 0.6

  useEffect(() => {
    updateChart()
  }, [data])

  const updateChart = () => {
    if (!data) {
      return
    }

    d3.selectAll(`${Chart} svg g`).remove()

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.time))
      .range([0, 2 * Math.PI])
      .align(0)

    const maxYDomainValue = d3.max(data, (d) => d.value)

    const y = d3
      .scaleRadial()
      .domain([0, maxYDomainValue + maxYDomainValue * 0.2])
      .range([innerRadius, outerRadius])

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius((d) => y(d.value))
      .startAngle((d) => x(d.time) || 0)
      .endAngle((d) => x(d.time) + x.bandwidth())
      .padAngle(0.1)
      .padRadius(innerRadius)

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
            `,
          )
          .call((g) =>
            g
              .append('text')
              .attr('class', hourClass)
              .attr(
                'transform',
                (d) =>
                  `rotate(${
                    90 - ((x(d.time) + x.bandwidth() / 2) * 180) / Math.PI
                  }) translate(0, 6)`,
              )
              .text((d) => `${d.time.split(' ')[1].slice(0, 2)}H`),
          ),
      )

    const yAxis = (g) =>
      g
        .attr('text-anchor', 'middle')
        .call((g) =>
          g
            .append('text')
            .attr('x', 0)
            .attr('y', -y(y.ticks().pop() || 0))
            .attr('dy', '-2em')
            .text('Pool Hash rate — last 24h'),
        )
        .call((g) =>
          g
            .selectAll('g')
            .data(y.ticks(5))
            .join('g')
            .call((g) =>
              g.append('circle').attr('class', axisCircleClass).attr('r', y),
            ),
        )

    const tooltip = d3.select(Tip.toString())

    const onMouseover = (event, datum) => {
      tooltip
        .style('display', 'block')
        .html(
          `Time: ${datum.time}<br/>Hash rate: ${d3.format('0.4s')(
            datum.value,
          )}`,
        )
        .style('opacity', '0.8')
    }

    const onMousemove = (event, datum) => {
      const { pageX, pageY } = event
      const rect = document
        .querySelector(Chart.toString())
        .getBoundingClientRect()
      const tipRect = tooltip.node().getBoundingClientRect()
      const tipX = pageX - window.scrollX - rect.x
      const tipY = pageY - window.scrollY - rect.y - tipRect.height - 20

      tooltip
        .style(
          'left',
          `${x(datum.time) < Math.PI ? tipX - tipRect.width : tipX}px`,
        )
        .style('top', `${tipY}px`)
    }

    const onMouseout = () => {
      tooltip.style('display', 'none')
    }

    const svg = d3
      .select(`${Chart} svg`)
      .attr(
        'viewBox',
        `${-size / 2 - 150} ${-size / 2 - 150}
        ${size + 300} ${size + 300}`,
      )
      .style('width', '100%')
      .style('height', 'auto')

    svg.append('g').call(xAxis)

    svg.append('g').call(yAxis)

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
      .on('mouseout', onMouseout)

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
            .text(y.tickFormat(10, 's')),
        ),
    )
    /* eslint-enable */
  }

  return data ? (
    <Chart>
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
  ) : null
}

export default RadialBarChart
