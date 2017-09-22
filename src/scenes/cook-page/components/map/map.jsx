import React from 'react';
import { Link } from 'react-router';

const Map = ({
	             map
             }) => {
	return (
	<div className="wrapper-map">
		<img className="map" src={map} alt="Map Continent"/>

		<Link className="america" to="/cooker/america">
			<div className="absolute america-one"></div>
			<div className="absolute america-two"></div>
		</Link>

		<Link className="europe" to="/cooker/europe">
			<div className="absolute europe-one"></div>
		</Link>

		<Link className="asia" to="/cooker/asia">
			<div className="absolute asia-one"></div>
		</Link>

		<Link className="africa" to="/cooker/africa">
			<div className="absolute africa-one"></div>
			<div className="absolute africa-two"></div>
		</Link>

		<Link className="oceania" to="/cooker/oceania">
			<div className="absolute oceania-one"></div>
		</Link>

	</div>
	);
};

export default Map;
