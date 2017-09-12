import React from 'react';
import connect from 'react-redux/lib/connect/connect';

const WhoAreWe = ({ WhoarewePageContent }) => WhoarewePageContent.whoarewe;

const mapStateToProps = state => {
  return state.ChooseLanguage;
};

export default connect(mapStateToProps)(WhoAreWe);