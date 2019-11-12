import React from 'react';

import { Link } from 'react-router-dom';

import HeaderCartTitle from './style';

import { Icon } from 'semantic-ui-react';
import HeaderCartStyle from './style';

function HeaderCart(props) {
  return (
    <Link to="cart">
      <Icon name="shopping basket" size="large" title="Cart" />
      <HeaderCartTitle>Cart</HeaderCartTitle>
    </Link>
  );
}

export default HeaderCart;
