import React from 'react';
import familyChildren from '../../../images/children.jpg';

const NumberSelection = () => {
  return (
    <div>
      <div className="wrapper-header-number">
        <p>
          APRENDE LOS NUMEROS DEL 1 AL 100 EN DIFERENTES LENGUAS DEL MUNDO CON PIPILET MANDALA
        </p>
      </div>
        <div className="wrapper-image-number">
          <img src={familyChildren} alt="family-children" width="80%"/>
        </div>

    </div>
  )
};

export default NumberSelection;