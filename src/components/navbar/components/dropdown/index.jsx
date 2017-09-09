import React from 'react';
import Link from 'react-router/lib/Link';

const DropdownMenu = ({
                        item
                      }) => {
  return (
    <ul className="wrapper-dropdown-menu">
      {item.title}
      <li className="wrapper-dropdown">
        {item.subNavbar.map((item, index) => (
          <div key={index} className="dropdown">
            <Link to={`/${item.url}`}>
              {item.title}
            </Link>
          </div>
        ))}
      </li>
    </ul>
  );
};

export default DropdownMenu;
