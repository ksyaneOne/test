import React from 'react';

import { Menu, Grid } from 'semantic-ui-react';

import HeaderNavStyle from './style';

import { Link } from 'react-router-dom';

import useFetch from '../../../utils/useFetch';

export default function HeaderNav(props) {
  const { loading, data } = useFetch('http://localhost:5000/catalog', []);
  const NavElements = data.map(item => (
    <Menu.Item key={item._id} as={Link} to={`/products/${item.id}`}>
      {item.name}
    </Menu.Item>
  ));

  return (
    <Menu className="HeaderNavStyle" fluid horisontal="true" inverted fluid widths={6}>
      {NavElements}
    </Menu>
  );
}
