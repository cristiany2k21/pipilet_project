import React from 'react';

import familyOwls from '../../images/family-owls.jpg';
import pipiletHorizontal from '../../images/pipilet-horizontal.jpg';

const HeaderTitle = () => {
    return (
        <div id="wrapper-headertitle">
          <div className="wrapper-tree-bird">
            <img src={familyOwls} alt="" />
          </div>

          <div className="wrapper-title">
            <img src={pipiletHorizontal} alt="" />
          </div>
        </div>
    )
};

export default HeaderTitle;