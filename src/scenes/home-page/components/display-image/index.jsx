import React from 'react';

const DisplayImage = ({
  image,
  width
}) => {

  return (
    <div id="wrapper-image">
      <img src={image} width={width}/>
    </div>
  )
};

export default DisplayImage;