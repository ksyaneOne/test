import React from 'react';

import { Icon, Input } from 'semantic-ui-react';

import HeaderSearchStyle from './style';

function HeaderSearch(props) {
  return (
    <HeaderSearchStyle>
      <Input
        inverted
        fluid
        icon={{ name: 'search', circular: true, link: true }}
        placeholder="Search..."
      />
    </HeaderSearchStyle>
  );
}

export default HeaderSearch;
