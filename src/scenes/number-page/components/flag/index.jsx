import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const DisplayFlag = ({
  flag
}) => {
  return (
    <div id="wrapper-display-flag">
      {
        flag.map((item, index) => {
          return (
            <div className="flag" key={index}>
              <Link to={`/number/${item.name}`}>
                <img src={item.value} alt="" width="120"/>
                <div>{item.name}</div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
};

export default DisplayFlag;