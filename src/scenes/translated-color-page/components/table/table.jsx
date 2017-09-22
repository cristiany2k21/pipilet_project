import React from 'react';
import ColumnTable from './component/table/table';

import black from '../../../../images/colors/black.jpg';
import blue from '../../../../images/colors/blue.jpg';
import brown from '../../../../images/colors/brown.jpg';
import green from '../../../../images/colors/green.jpg';
import orange from '../../../../images/colors/orange.jpg';
import pink from '../../../../images/colors/pink.jpg';
import purple from '../../../../images/colors/purple.jpg';
import red from '../../../../images/colors/red.jpg';
import white from '../../../../images/colors/white.jpg';
import yellow from '../../../../images/colors/yellow.jpg';

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
		pink
	];

	return (
	<div id="wrapper-table">
		<ColumnTable images={colors}
		             title={`${headerFirstColumn} ${headerThirdColumn}`}/>
		<ColumnTable color={originalColor.data.colors} title={originalColor.name}/>
		{!sameLanguage &&
		<ColumnTable color={translatedColor.colors} title={headerThirdColumn}
		             subTitle={subTitle}/>}
		{headerFourColumn &&
		<ColumnTable color={translatedColor.write} title={headerFourColumn}/>}
	</div>
	);
};

export default TableColor;
