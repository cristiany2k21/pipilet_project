import React from 'react';

import Ingredient from './component/ingredient';
import Preparation from './component/preparation';

const Recipe = ({
  recipe
}) => {
    return (
        <div className="wrapper-recipe">
          {
            recipe.map((item, index) => {
              return (
                <div className="wrapper-recipe-map" key={index}>
                  <div className="wrapper-title">{item.title}</div>
                  <Ingredient sectionIngredient={item.sectionIngredient} />
                  <Preparation sectionPreparation={item.sectionPreparation} />
                </div>

              )
            })
          }
        </div>
    )
};

export default Recipe;