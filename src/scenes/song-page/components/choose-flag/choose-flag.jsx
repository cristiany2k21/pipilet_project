import React from 'react';
import Link from 'react-router/lib/Link';
import EarthSnow from '../../images/earth-snow.jpg';

import './style/choose-flag.sass';

const ChooseFlag = ({
	                    flag
                    }) => {
	return (
	<div id="wrapper-flag">
		<div className="wrapper-circle">
			<ul className="circle-container">
				{
					flag.map((item, index) => {
						return (
						<Link to={`/song/${item.name}`} key={index}>
							<li className='test'>
								<img src={item.value} alt={`${item.name}`}/>
							</li>
						</Link>
						);
					})
				}
			</ul>
			<img
			src={EarthSnow}
			className="children-earth"/>
		</div>
	</div>
	);
};

export default ChooseFlag;
