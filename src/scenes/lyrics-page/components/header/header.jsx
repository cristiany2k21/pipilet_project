import React from 'react';
import iconDownload from '../../../../images/icon-download.jpg';

import './style/header.sass';

const HeaderLyrics = ({
  title,
  image,
  imageFlag,
  nameDownload,
  download
}) => {
  const nameFile = `${nameDownload.toLowerCase()}.pdf`;

  return (
    <div id="wrapper-header-song">
      <div className="wrapper-title-flag">
        <div className="wrapper-title">
          <div className="title-song">
            {title}
          </div>
        </div>
        <div className="flag-song">
          <img src={imageFlag} alt={`${title}-image`}/>
        </div>
        <div className="wrapper-icon-download">
          <a href={download} download={nameFile}>
            <img src={iconDownload} alt={`${title}-image`}/>
          </a>
        </div>
      </div>

      <div className="wrapper-image-song">
        <img src={`${image}`} alt={`${title}-image`}/>
      </div>
    </div>
  )
};

export default HeaderLyrics;