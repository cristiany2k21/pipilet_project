import React from 'react';
import { Link } from 'react-router';
import HeaderPage from '../../../../components/header-page';

const Section = ({
  path,
  image,
  title
}) => {
  return (
    <div>
      <HeaderPage title={title}/>
      <Link to={path}>
        <div className="wrapper-section-ingredient">
          <img className="section undisplay" src={image}/>
        </div>
      </Link>
    </div>
  )
};

export default Section;