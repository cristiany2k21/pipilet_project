import React from 'react';
import Link from 'react-router/lib/Link';

const SimpleItem = ({
                      item
                    }) => {
  return (
    <Link to={`/${item.url}`}>
      {item.title}
    </Link>
  );
};

export default SimpleItem;