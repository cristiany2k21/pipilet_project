import React from 'react';
import connect from 'react-redux/lib/connect/connect'
import { changeWebsiteLanguage } from '../../action/website-language';
import './styles/index.sass';
import SimpleItem from './components/simple-item';
import DropdownMenu from './components/dropdown';
import french from '../../images/french_nav.png';
import english from '../../images/english_nav.png';
import spanish from '../../images/spanish_nav.png';

const Navbar = ({
  itemsNavbar,
  dispatch
}) => {

  const changeLanguage = (country) => {
    dispatch(changeWebsiteLanguage(country))
  };

  return (
    <div id="wrapper-navbar">
      <div className="language">
        <ul>
          <li onClick={() => changeLanguage("fr")}><img
            src={french} height="27" width="27"/></li>
          <li onClick={() => changeLanguage("eng")}><img
            src={english} height="27" width="27"/>
          </li>
          <li onClick={() => changeLanguage("esp")}><img
            src={spanish} height="27" width="27"/></li>
        </ul>
      </div>
      <div className="navigation">
        <ul>
          {
            itemsNavbar.map((item, key) => {
                return (
                  <li key={key}>
                    { item.url && <SimpleItem item={item} />}
                    { !item.url && <DropdownMenu item={item} />}
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