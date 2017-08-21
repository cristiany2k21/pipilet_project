import React from 'react';

const Preparation = ({
  sectionPreparation
}) => {
  return (
    <div className="wrapper-section-preparation">
      {
        sectionPreparation.map((items, index) => (
          <div key={index}>
            <div className="wrapper-title-section">{items.title}</div>
            <ul>
              {
                items.preparation.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  )
};

export default Preparation;
