import React from 'react';
import Link from 'react-router/lib/Link';
import HeaderPage from '../../components/header-page';

const Section = ({
  path,
  image,
  title,
  logo,
  extraClassName
}) => {
  return (
    <div>
      <HeaderPage title={title} logo={logo}/>
      <div className="wrapper-section-color-number">
        {
          image.map((item, index) => {
            return (
              <div key={index} className="wrapper-owls">
                <div className="owls-inner">
                  <img src={item.image}/>
                  {
                    item.countryName.map((item, index) =>
                      <Link key={index} to={`${path}/${item}`} className={`border ${extraClassName}_${index} width_${extraClassName}`} />
                    )
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Section;