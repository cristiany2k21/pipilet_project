import React from 'react';
import cooker from '../../../../images/pipilet-cooker.jpg';
import pipiletVertical from '../../../../images/pipilet-mandala-vertical.png';

const Footer = () => {
    return (
        <div className="wrapper-footer">
          <div className="wrapper-image">
            <img src={cooker} />
          </div>
          <div className="wrapper-image">
            <img src={pipiletVertical} />
          </div>
        </div>
    )
};

export default Footer;