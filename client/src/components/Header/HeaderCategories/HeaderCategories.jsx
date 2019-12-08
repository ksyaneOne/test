import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'semantic-ui-react';

import HeaderCategoriesTitle from './style';

export default function HeaderCategories(props) {
  return (
    <Link to="/products">
      <Icon name="list layout" size="large" title="Categories" />
      <HeaderCategoriesTitle>Products</HeaderCategoriesTitle>
    </Link>
  );
}
