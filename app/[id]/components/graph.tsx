'use client';

import * as React from 'react';
import * as echarts from 'echarts';

interface Props {
  revenueData: (string | number)[][];
  growData: (string | number)[][];
}

const Graph = ({ revenueData, growData }: Props) => {
  const chartRef = React.useRef<HTMLDivElement>(null);

  const [chart, setChart] = React.useState<echarts.ECharts>();

  const option = {
    color: [
      '#e8af00',
      '#cb4b4b'
    ],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['每月營收', '單月營收年增率 (%)']
    },
    xAxis: {
      type: 'time'
    },
    yAxis: [{
      name: '千元',
    }, {
      name: '%',
    }],
    series: [{
      name: '每月營收',
      type: 'bar',
      data: revenueData
    },{
      name: '單月營收年增率 (%)',
      type: 'line',
      symbol: 'none',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value: number) {
          return value + '%';
        }
      },
      data: growData
    }]
  }

  const init = () => {
    const _chart = echarts.init(chartRef.current);
    _chart.setOption(option);
    setChart(_chart);
  };

  React.useEffect(() => {
    init();
  }, [option]);

  return (
    <div ref={chartRef} style={{ height: '400px', width: '100%' }} />
  );
};

export default Graph;
