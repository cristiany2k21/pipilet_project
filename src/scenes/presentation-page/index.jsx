import React from 'react';
import { connect } from 'react-redux';

import './style/index.scss';

import Description from './components/description';

const PresentationPage = ({
  presentationPageContent
}) => {
    return (
        <div id="wrapper-presentation-page">
          <div className="wrapper-image-pipilet">
            <img src={presentationPageContent["image-pipilet"]} />
          </div>
          <Description text={presentationPageContent.text} />
        </div>
    )
};

const mapStateToProps = state => {
  return state.ChooseLanguage;
}
export default connect(mapStateToProps)(PresentationPage);