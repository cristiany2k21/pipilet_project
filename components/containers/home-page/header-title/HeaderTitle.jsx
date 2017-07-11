import React from 'react';

const HeaderTitle = ({
  homePageContent
}) => {
    return (
        <div id="wrapper-headertitle">
          <div className="wrapper-tree-bird">
            <img src={homePageContent.header.owls} alt="" />
          </div>

          <div className="wrapper-title">
            <img src={homePageContent.header.pipilet} alt="" />
          </div>
        </div>
    )
};

export default HeaderTitle;