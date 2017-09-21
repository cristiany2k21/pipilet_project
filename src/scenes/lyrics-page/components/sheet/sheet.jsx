import React from 'react';

import './style/sheet.sass';

const sheetMusic = ({
	                    sheet
                    }) => {
	return (
	<div id="wrapper-sheet">
		<img src={sheet} alt="" width="1000"/>
	</div>
	);
};

export default sheetMusic;
