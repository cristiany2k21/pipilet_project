import React from 'react';
import FirstTable from './component/first-table';
import SecondTable from './component/second-table';
import ThirdTable from './component/third-table';
import FourTable from './component/four-table';
import HandWriteLogo from './component/hand-write-logo';
import BigDraw from './component/big-draw';

const TableNumber = ({
  language,
  littleDraw,
  bigDraw
}) => {
  return (
    <div id="table-number">
      <FirstTable language={language}/>
      <SecondTable language={language} draw={littleDraw}/>
      <div className="wrapper-third-four">
        <ThirdTable language={language}/>
        <FourTable language={language}/>
      </div>
      <HandWriteLogo />
      <BigDraw draw={bigDraw} />
    </div>
  )
};

export default TableNumber;