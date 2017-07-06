import React from 'react';

const HeaderTitle = ({
  homeContent
}) => {
    return (
        <div id="wrapper-headertitle">
          <div className="wrapper-tree-bird">
            <img src={homeContent.header.owls} alt="" width="400" />
          </div>

          <div className="wrapper-title">
            <img src={homeContent.header.pipilet} alt="" width="800" />
          </div>
        </div>
    )
};

export default HeaderTitle;