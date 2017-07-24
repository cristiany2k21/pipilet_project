import React from 'react';
import familyChildren from '../../images/children.jpg';

const HeaderNumber = ({
  title
}) => {
  return (
    <div>
      <div className="wrapper-header-number">
        {title}
      </div>
      <div className="wrapper-image-number">
        <img src={familyChildren} alt="family-children" width="80%"/>
      </div>
    </div>
  )
};

export default HeaderNumber;