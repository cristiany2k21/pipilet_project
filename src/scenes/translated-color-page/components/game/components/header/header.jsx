import React from 'react';

const Header = ({
  originalTitle,
  translatedTitle
}) => {
  let title = '';

  if (originalTitle === translatedTitle)
      title = originalTitle;
  else
    title = `${originalTitle} / ${translatedTitle}`;

    return (
        <div id="wrapper-title-game" >
          {title}
        </div>
    )
};

export default Header;