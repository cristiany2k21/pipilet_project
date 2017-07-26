import React from 'react';
import { connect } from 'react-redux';

const HeaderLyrics = ({
  title,
  image,
  imageFlag
}) => {
  return (
      <div className="wrapper-header-song">
        <div className="wrapper-title-song">
          <div className="title-song">{title}</div>
          <div className="flag-song">
            <img src={imageFlag} alt={`${title}-image`} width="300" />
          </div>
        </div>

        <div className="wrapper-image-song">
          <img src={`${image}`} alt={`${title}-image`} width="500" />
        </div>
      </div>
  )
};

export default HeaderLyrics;