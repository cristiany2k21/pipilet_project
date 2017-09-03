import React from 'react';
import ColumnTable from './component/table';

import black from '../../../../images/colors/black.png';
import blue from '../../../../images/colors/blue.png';
import brown from '../../../../images/colors/brown.png';
import green from '../../../../images/colors/green.png';
import orange from '../../../../images/colors/orange.png';
import pink from '../../../../images/colors/pink.png';
import purple from '../../../../images/colors/purple.png';
import red from '../../../../images/colors/red.png';
import white from '../../../../images/colors/white.png';
import yellow from '../../../../images/colors/yellow.png';

const TableColor = ({
  originalColor,
  translatedColor,
  sameLanguage,
  headerFirstColumn,
  headerThirdColumn,
  headerFourColumn,
  subTitle
}) => {

  const colors = [
    red,
    yellow,
    white,
    blue,
    orange,
    green,
    black,
    brown,
    purple,
    pink,
  ];

  return (
    <div id="wrapper-table">
      <ColumnTable images={colors} title={`${headerFirstColumn} ${headerThirdColumn}`}/>
      <ColumnTable color={originalColor.data.colors} title={originalColor.name}/>
      { !sameLanguage && <ColumnTable color={translatedColor.colors} title={headerThirdColumn} subTitle={subTitle} /> }
      { headerFourColumn && <ColumnTable color={translatedColor.write} title={headerFourColumn} />}
    </div>
  )
};

export default TableColor;