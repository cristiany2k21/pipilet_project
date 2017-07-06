import React from 'react';
import { connect } from 'react-redux'
import Sidebar from './sidebar/Sidebar';
import HeaderTitle from './header-title/HeaderTitle';
import DisplayImage from './display-image/DisplayImage';

const HomePage = ({ homeSidebar, homeContent }) => {

  return (
    <div>
      <Sidebar itemsSidebar={homeSidebar}/>
      <HeaderTitle homeContent={homeContent} />
      <DisplayImage image={homeContent.content.family} width="600"/>
      <DisplayImage image={homeContent.content.logo} width="650"/>
    </div>
  )
}

const mapStateToProps = state => {
  return state.ChooseLanguage.language
}

export default connect(mapStateToProps)(HomePage);