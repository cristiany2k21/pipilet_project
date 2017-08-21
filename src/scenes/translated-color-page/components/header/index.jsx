import React from 'react';
import pipilet from '../../../../images/pipilet-number-color.jpg';
import pipiletMandala from '../../../../images/pipilet-horizontal.jpg';

const HeaderColor = ({
  title,
  rules
}) => {
    return (
        <div id="wrapper-header">
          <div className="wrapper-image-pipilet">
            <img src={pipilet} alt=""/>
          </div>

          <div className="wrapper-title-rules">
            <div className="wrapper-title">{title}</div>
            <div className="wrapper-logo-pipilet">
              <img src={pipiletMandala} />
            </div>
            <div className="wrapper-rules">
              {
                rules.map((rule, index) => <div key={index}>{rule}</div>)
              }
            </div>
          </div>
        </div>
    )
};

export default HeaderColor;