import React from 'react';

import { Icon } from 'semantic-ui-react';

import HeaderSearchStyle from './style';

function HeaderSearch(props) {
  return (
    <HeaderSearchStyle>
      <Icon disabled name="search" size="large" />
      Search
    </HeaderSearchStyle>
  );
}

export default HeaderSearch;
