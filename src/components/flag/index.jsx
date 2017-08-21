import React from 'react';
import { Link } from 'react-router';

const DisplayFlag = ({
  flag,
  path
}) => {
  return (
    <div id="wrapper-display-flag">
      {
        flag.map((item, index) => {
          return (
            <div className="flag" key={index}>
              <Link to={`/${path}/${item.name}`}>
                <img src={item.value} width="120"/>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
};

export default DisplayFlag;