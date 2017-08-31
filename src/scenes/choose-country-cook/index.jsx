import React from 'react';
import { connect } from 'react-redux';

import DisplayCountry from './component/display-country';

import './style/index.scss';

const ChooseCountryCook = ({
  continent
}) => {
  return (
    <div id="wrapper-choose-country-cook">
      <div className="wrapper-title">
        {continent.title}
      </div>
      <div className="wrapper-country">
        <DisplayCountry
          country={continent.country}
          continent={continent}
        />
      </div>
    </div>
  )
};

const mapStateToProps = (state, props) => ({
  continent: state.ChooseLanguage.chooseCountryContent[props.params.continent]
});

export default connect(mapStateToProps)(ChooseCountryCook);