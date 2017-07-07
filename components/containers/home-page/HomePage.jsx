import React from 'react';
import { connect } from 'react-redux'
import HeaderTitle from './header-title/HeaderTitle';
import DisplayImage from './display-image/DisplayImage';

const HomePage = ({ homeSidebar, homeContent }) => {

  return (
    <div>
      <HeaderTitle homeContent={homeContent} />
      <DisplayImage image={homeContent.content.family} width="750"/>
      <DisplayImage image={homeContent.content.logo} width="700"/>
    </div>
  )
}

const mapStateToProps = state => {
  return state.ChooseLanguage.language
}

export default connect(mapStateToProps)(HomePage);