import React from 'react';
import { Link } from 'react-router';

const Map = ({
  map,
  map_africa,
  map_america,
  map_asia,
  map_europe,
  map_oceania
}) => {
  return (
    <div className="wrapper-map">
      <img className="map" src={map}/>

      <Link className="america" to="/cooker/america">
        <div className="absolute america-one"></div>
        <div className="absolute america-two"></div>
      </Link>
      <img className="absolute map_america" src={map_america}/>

      <Link className="europe" to="/cooker/europe">
        <div className="absolute europe-one"></div>
      </Link>
      <img className="absolute map_europe" src={map_europe}/>

      <Link className="asia" to="/cooker/asia">
        <div className="absolute asia-one"></div>
      </Link>
      <img className="absolute map_asia" src={map_asia}/>

      <Link className="africa" to="/cooker/africa">
        <div className="absolute africa-one"></div>
        <div className="absolute africa-two"></div>
      </Link>
      <img className="absolute map_africa" src={map_africa}/>

      <Link className="oceania" to="/cooker/oceania">
        <div className="absolute oceania-one"></div>
      </Link>
      <img className="absolute map_oceania" src={map_oceania}/>

    </div>
  )
};

export default Map;