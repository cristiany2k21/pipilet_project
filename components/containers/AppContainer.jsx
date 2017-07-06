import React from 'react';
import { connect } from 'react-redux'
import Navbar from './navbar/Navbar';

const AppContainer = ({ children, navbar }) => {
  return (
    <div className="o-container">
      <Navbar itemsNavbar={navbar}/>
      {children}
    </div>
  )
}

const mapStateToProps = state => {
  return state.ChooseLanguage.language
}

export default connect(mapStateToProps)(AppContainer);
