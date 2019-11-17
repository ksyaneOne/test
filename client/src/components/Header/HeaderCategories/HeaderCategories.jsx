import React from 'react';

import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import HeaderCategoriesTitle from './style';

function HeaderCategories(props) {
  return (
    <Link to="/products">
      <Icon name="list layout" size="large" title="Categories" />
      <HeaderCategoriesTitle>Products</HeaderCategoriesTitle>
    </Link>
  );
}

export default HeaderCategories;
