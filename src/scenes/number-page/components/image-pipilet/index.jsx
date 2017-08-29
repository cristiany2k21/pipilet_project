import React from 'react';
import pipiletNumber from '../../../../images/pipilet-number-color.jpg';
import pipiletRainbow from '../../../../images/pipilet-rainbow.jpg';

const ImagePipilet = () => {
    return (
        <div id="wrapper-image-pipilet">
          <div className="wrapper-pipilet-number">
            <img src={pipiletNumber} alt="" width="400" />
          </div>
          <div className="wrapper-rainbow-mandala">
            <img src={pipiletRainbow} alt="" width="700" />
          </div>
        </div>
    )
};

export default ImagePipilet;