import React from 'react';
import { connect } from 'react-redux'
import HeaderTitle from './header-title/HeaderTitle';
import DisplayImage from './display-image/DisplayImage';

const HomePage = ({ homePageContent }) => {

  return (
    <div>
      <HeaderTitle homePageContent={homePageContent} />
      <DisplayImage image={homePageContent.content.family} width="750"/>
      <DisplayImage image={homePageContent.content.logo} width="700"/>
    </div>
  )
}

const mapStateToProps = state => {
  return state.ChooseLanguage.language
}

export default connect(mapStateToProps)(HomePage);