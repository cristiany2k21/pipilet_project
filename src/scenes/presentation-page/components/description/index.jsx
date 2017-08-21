import React from 'react';

const Description = ({
  text,
}) => {
  return (
    <div className="wrapper-description">
      <div className="wrapper-text">
        {
          text.map((item, index) => {
            return (
              <div key={index} className="text">
                {item}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Description;