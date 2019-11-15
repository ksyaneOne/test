import React, { useState, useEffect } from 'react';
import { Input, Segment, Dimmer, Loader } from 'semantic-ui-react';
import HeaderSearchStyle from './style';

function HeaderSearch(props) {
  const [query, setQuery] = useState('');
  const handleInputQuery = e => setQuery(e.target.value);

  return (
    <HeaderSearchStyle>
      <Input
        value={query}
        onChange={handleInputQuery}
        inverted
        fluid
        icon={{ name: 'search', circular: true, link: true }}
        placeholder="Search..."
      />
    </HeaderSearchStyle>
  );
}

export default HeaderSearch;
