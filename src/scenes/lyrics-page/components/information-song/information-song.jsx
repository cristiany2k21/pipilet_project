import React from 'react';

import './style/information-song.sass';

const InformationSong = ({
	                         information
                         }) => {
	console.log('information ------> ', information);
	return (
	<div className="container-information-song">
		<div className="wrapper-title-information">
			{information.title}
		</div>
		<div className="wrapper-rules">
			{
				information.description.map((item, index) => {
					return <div className="rules" key={index}>{item}</div>;
				})
			}
		</div>
	</div>
	);
};

export default InformationSong;
