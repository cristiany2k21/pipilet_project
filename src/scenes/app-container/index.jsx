import React from 'react';
import connect from 'react-redux/lib/connect/connect'
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import './styles/index.scss';

const AppContainer = ({ children, navbar, sidebar }) => {
  return (
    <div className="o-container">
      <Navbar itemsNavbar={navbar}/>
      <div className="wrapper-content">
        {children}
      </div>
      <Sidebar sidebar={sidebar}/>
    </div>
  )
};

const mapStateToProps = state => {
  return state.ChooseLanguage
};

export default connect(mapStateToProps)(AppContainer);
