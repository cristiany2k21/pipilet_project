import React from 'react';

const Drawing = ({
	                 draw
                 }) => {
	return (
	<div id="wrapper-drawing">
		{
			draw.map((item, index) => {
				return <img key={index} src={item}/>;
			})
		}
	</div>
	);
};

export default Drawing;
