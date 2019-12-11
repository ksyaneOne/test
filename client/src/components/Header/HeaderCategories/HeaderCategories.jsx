import React from 'react';

import { Icon } from 'semantic-ui-react';

import HeaderCategoriesTitle from './style';

function HeaderCategories(props) {
  return (
    <div>
      <Icon name="list layout" size="large" title="Categories" />
      <HeaderCategoriesTitle>Categories</HeaderCategoriesTitle>
    </div>
  );
}

export default HeaderCategories;
