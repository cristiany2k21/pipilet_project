import React from 'react';
import { connect } from 'react-redux'
import Navbar from '../../components/navbar/index';
import Sidebar from '../../components/sidebar/index';
import './styles/index.scss';

const AppContainer = ({ children, navbar, sidebar }) => {
  return (
    <div className="o-container">
      <div className="wrapper-content">
        <Navbar itemsNavbar={navbar}/>
        {children}
      </div>
      <Sidebar sidebar={sidebar}/>
    </div>
  )
}

const mapStateToProps = state => {
  return state.ChooseLanguage.language
}

export default connect(mapStateToProps)(AppContainer);
