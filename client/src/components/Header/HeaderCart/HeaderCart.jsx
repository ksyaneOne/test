import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Icon } from 'semantic-ui-react';

import { HeaderCartCount, HeaderCartTitle } from './style';

const HeaderCart = props => {
  const [count] = useState(1);

  return (
    <Link to="cart">
      <Icon name="shopping basket" size="large" title="Cart" />
      <HeaderCartTitle>Cart</HeaderCartTitle>
      <HeaderCartCount>{count}</HeaderCartCount>
    </Link>
  );
};

export default HeaderCart;
