import React from 'react';
import { Link } from 'react-router';


const Sidebar = ({
  itemsSidebar
}) => {
  return (
    <div id="wrapper-sidebar">
      <div style={{"position": "relative"}}>
        <div className="or-spacer-vertical right">
          <div className="mask"></div>
        </div>
        <div>
          {
            itemsSidebar.map((item, index) => {
              const image = item.image;
              return (
                <Link key={index} to={item.url}>
                  <div className="wrapper-item">
                    <p>{item.title}</p>
                    <img src={image} width="200"/>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default Sidebar;