import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { CHANGE_LANGUAGE } from '../../../constants/language';

const Navbar = ({
  itemsNavbar,
  dispatch
}) => {

  const changeLanguage = (country) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      country
    })
  }

  return (
    <div id="wrapper-navbar">
      <div className="language">
        <ul>
          <li onClick={() => changeLanguage("fr")}><img
            src="https://cdn.countryflags.com/thumbs/france/flag-3d-round-250.png" height="20" width="20"/></li>
          <li onClick={() => changeLanguage("eng")}><img
            src="https://miniworldlyon.com/wp-content/uploads/2016/08/drapeau-anglais-rond.png" height="20" width="20"/>
          </li>
          <li onClick={() => changeLanguage("esp")}><img
            src="https://www.faremoana.ch/images/logos/drapeau-espagnol-detoure-copie.png" height="20" width="20"/></li>
        </ul>
      </div>
      <div className="navbar">
        <ul>
          {
            itemsNavbar.map((item, key) => {
                return (  <li key={key}>
                  <Link to={`${item.url}`}>
                    {item.title}
                  </Link>
                </li>)
              }
            )
          }
        </ul>
      </div>
    </div>
  )
};

export default connect()(Navbar);