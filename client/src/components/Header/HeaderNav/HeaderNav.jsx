import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import useFetch from '../../../utils/useFetch';
import HeaderNavStyle from './style';

export default function HeaderNav(props) {
  const { loading, data } = useFetch('/catalog', []);
  const NavElements = data.map(item => (
    <Menu.Item key={item._id} as={Link} to={`/products/${item.id}`}>
      {item.name}
    </Menu.Item>
  ));

  return (
    <HeaderNavStyle>
      <Menu fluid horisontal="true" inverted widths={6}>
        {NavElements}
      </Menu>
    </HeaderNavStyle>
  );
}
