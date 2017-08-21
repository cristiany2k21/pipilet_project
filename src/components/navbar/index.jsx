import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { changeWebsiteLanguage } from '../../action/website-language';
import './styles/index.scss';
import french from '../../images/french_nav.png';
import english from '../../images/english_nav.png';
import spanish from '../../images/spanish_nav.png';

const Navbar = ({
  itemsNavbar,
  dispatch
}) => {

  const changeLanguage = (country) => {
    dispatch(changeWebsiteLanguage(country))
  }

  return (
    <div id="wrapper-navbar">
      <div className="language">
        <ul>
          <li onClick={() => changeLanguage("fr")}><img
            src={french} height="22" width="22"/></li>
          <li onClick={() => changeLanguage("eng")}><img
            src={english} height="22" width="22"/>
          </li>
          <li onClick={() => changeLanguage("esp")}><img
            src={spanish} height="22" width="22"/></li>
        </ul>
      </div>
      <div className="navigation">
        <ul>
          {
            itemsNavbar.map((item, key) => {
                return (
                  <li key={key}>
                    <Link to={`/${item.url}`}>
                      {item.title}
                    </Link>
                  </li>
                )
              }
            )
          }
        </ul>
      </div>
    </div>
  )
};

export default connect()(Navbar);