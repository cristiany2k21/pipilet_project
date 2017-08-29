import React from 'react';
import  './style/index.scss';

export default ({
  title,
  logo
}) => {
  const colors = [
    "red",
    "pink",
    "dodgerblue",
    "brown",
    "yellowgreen",
  ]

  const generateColorTitle = title => {
    return (
      <div className="wrapper-title">
        {
          Array.prototype.map.call(title, (letter, index) => {
            const randomNumber = Math.floor((Math.random() * 5));
            return <span key={index} className={`${colors[randomNumber]}`}>{letter}</span>
          })
        }
      </div>
    )
  }
  return (
    <div id="wrapper-title-logo">
      <div className="wrapper-logo">
        <img src={logo} />
      </div>
      {generateColorTitle(title)}
      <div className="undisplayed wrapper-logo">
        <img src={logo} />
      </div>
    </div>
  )
};