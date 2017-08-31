import React from 'react';

const Ingredient = ({
  sectionIngredient,
  image
}) => {
  return (
    <div className="wrapper-section-ingredient">
      <img src={image} />
      {
        sectionIngredient.map((items, index) => (
          <div key={index}>
            <div className="wrapper-title-section">{items.title}</div>
            <ul>
              {
                items.ingredient.map((item, index) => (
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

export default Ingredient;