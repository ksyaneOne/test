import React from 'react';

import useFetch from '../../../utils/useFetch';

import HeaderNavStyle from './style.js';

export default function HeaderNav(props) {
  const { loading, data } = useFetch('http://localhost:5000/catalog', []);
  const NavElements = data.map(item => (
    <div key={item._id}>
      <li>{item.name}</li>
    </div>
  ));

  return <HeaderNavStyle>{NavElements}</HeaderNavStyle>;
}
