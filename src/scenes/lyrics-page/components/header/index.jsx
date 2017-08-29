import React from 'react';

const HeaderLyrics = ({
  title,
  image,
  imageFlag
}) => {
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
      </div>

      <div className="wrapper-image-song">
        <img src={`${image}`} alt={`${title}-image`}/>
      </div>
    </div>
  )
};

export default HeaderLyrics;