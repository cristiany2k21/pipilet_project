import React from 'react';
import bookNumber from '../../images/book-number.png';

const HeaderNumber = ({
	                      title,
	                      flag
                      }) => {
	return (
	<div className="wrapper-flag-title-book">
		<div className="wrapper-flag">
			<img src={flag} alt=""/>
		</div>
		<div className="wrapper-title">
			<h1>{title}</h1>
		</div>
		<div className="wrapper-book-number">
			<img src={bookNumber} alt=""/>
		</div>
	</div>
	);
};

export default HeaderNumber;
