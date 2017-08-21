import React from 'react';

import familyOwls from './images/family-owls.jpg';
import familyChildren from './images/family-children.jpg';

import Section from './component/section';

import './styles/index.scss';

const ColorNumber = () => {
  return (
    <div id="wrapper-colornumber">
      <Section path="/color" image={familyOwls} />
      <Section path="/number" image={familyChildren} />
    </div>
  )
};

export default ColorNumber;