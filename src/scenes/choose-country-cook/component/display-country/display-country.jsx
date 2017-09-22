import React from 'react';
import { Link } from 'react-router';

const DisplayCountry = ({
	                        country,
	                        continent
                        }) => {
	return (
	<div className="wrapper-display-country">
		{
			country.map((item, index) => {
				return (
				<Link to={`/cooker/${continent.name}/${index}`} key={index}>
					<div className="display-country">
						<div className="wrapper-image">
							<img src={item.type} alt={`country ${name}`}/>
						</div>
						{item.name}
					</div>
				</Link>
				);
			})
		}
	</div>
	);
};

export default DisplayCountry;
