import React from 'react';

const DisplayImage = ({
  image,
}) => {

  return (
    <div id="wrapper-image">
      <img src={image} />
    </div>
  )
};

export default DisplayImage;