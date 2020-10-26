import { PureComponent } from 'react';
import * as d3 from 'd3';
import cn from 'classnames';
import { arrayOf, number, shape, string } from 'prop-types';

import { chart, hour, axisCircle, tip } from './RadialBarChart.module.scss';

export default class RadialBarChart extends PureComponent {
  static propTypes = {
    data: arrayOf(shape({ time: string, value: number })),
    className: string,
  };

  static defaultProps = {
    data: null,
    className: '',
  };

  width = 900;

  height = this.width;

  innerRadius = 250;

  outerRadius = this.width * 0.6;

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart = () => {
    /* eslint-disable */
    const { data } = this.props;

    if (!data) {
      return;
    }

    d3.selectAll(`.${chart} svg g`).remove();

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.time))
      .range([0, 2 * Math.PI])
      .align(0);

    const maxYDomainValue = d3.max(data, (d) => d.value);

    const y = d3
      .scaleRadial()
      .domain([0, maxYDomainValue + maxYDomainValue * 0.2])
      .range([this.innerRadius, this.outerRadius]);

    const arc = d3
      .arc()
      .innerRadius(this.innerRadius)
      .outerRadius((d) => y(d.value))
      .startAngle((d) => x(d.time))
      .endAngle((d) => x(d.time) + x.bandwidth())
      .padAngle(0.1)
      .padRadius(this.innerRadius);

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
              translate(${this.innerRadius - 30},0)
            `
          )
          .call((g) =>
            g
              .append('text')
              .attr('class', hour)
              .attr(
                'transform',
                (d) =>
                  `rotate(${
                    90 - ((x(d.time) + x.bandwidth() / 2) * 180) / Math.PI
                  }) translate(0, 6)`
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
              g.append('circle').attr('class', axisCircle).attr('r', y)
            )
        );

    const tooltip = d3.select(`.${tip}`);

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
      const rect = document.querySelector(`.${chart}`).getBoundingClientRect();
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
      .select(`.${chart} svg`)
      .attr(
        'viewBox',
        `${-this.width / 2 - 150} ${-this.height / 2 - 150} 
        ${this.width + 300} ${this.height + 300}`
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

  render() {
    const { data, className } = this.props;

    return data ? (
      <div className={cn(chart, className)}>
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
        <div className={tip} />
      </div>
    ) : null;
  }
}
