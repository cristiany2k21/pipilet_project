import React from 'react';
import { connect } from 'react-redux'
import Navbar from './navbar/Navbar';
import Sidebar from './home-page/sidebar/Sidebar';

const AppContainer = ({ children, navbar, homeSidebar }) => {
  return (
    <div className="o-container">
      <Navbar itemsNavbar={navbar}/>
      <Sidebar itemsSidebar={homeSidebar}/>

      {children}
    </div>
  )
}

const mapStateToProps = state => {
  return state.ChooseLanguage.language
}

export default connect(mapStateToProps)(AppContainer);
