'use client';

import { useState } from 'react';
import Title from './title';
import Menu from './menu';
import Graph from './graph';
import Detail from './detail';

interface Props {
  id: string;
  options: string[];
  data: [string, number][];
}

const Main = ({ id, options, data }: Props) => {
  const [interval, setInterval] = useState('60');
  const name = options.find(item => item.search(`${id} `) >= 0)?.replace(`${id} `, '');
  const revenueData = data.slice(-interval);
  const lastData = data.slice(-interval - 12, -12);
  const growData = revenueData.map((item, index) => [item[0], ((item[1] / lastData[index][1] - 1) * 100).toFixed(2)]);
  
  return (
    <div className="main">
      <div className="p-3 mb-1.5 border border-[#dfdfdf] bg-[#fafafa] rounded-[3px] font-bold">
        {name} ({id})
      </div>
      <div className="p-3 mb-1.5 border border-[#dfdfdf] bg-[#fff] rounded-[3px]">
        <div className="flex justify-between">
          <div>
            <Title>每月營收</Title>
          </div>
          <div>
            <Menu interval={interval} setInterval={setInterval} />
          </div>
        </div>
        <div>
          <Graph revenueData={revenueData} growData={growData} />
        </div>
      </div>
      <div className="mb-1.5 border border-[#dfdfdf] bg-[#fff] rounded-[3px]">
        <div className="p-3">
          <Title>詳細數據</Title>
        </div>
        <div>
          <Detail revenueData={revenueData} growData={growData} />
        </div>
      </div>
      <div className="py-3 text-[13px] text-right">
        圖表單位：千元，數據來自公開資訊觀測站<br />
        網頁圖表歡迎轉貼引用，請註明出處為財報狗
      </div>
    </div>
  );
}

export default Main;
