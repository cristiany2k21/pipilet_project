import React from 'react';
import { Link } from 'react-router';

const Section = ({
  path,
  image
}) => {
    return (
      <Link to={path}>
        <div className="wrapper-section-ingredient">
          <img className="section undisplay" src={image} />
        </div>
      </Link>
    )
};

export default Section;