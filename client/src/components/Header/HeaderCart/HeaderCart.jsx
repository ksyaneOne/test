import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'semantic-ui-react';

import { HeaderCartCount, HeaderCartTitle } from './style';

export default function HeaderCart(props) {
  const [count, setCount] = useState(1);
  return (
    <Link to="cart">
      <Icon name="shopping basket" size="large" title="Cart" className="HeaderCartIcon" />
      <HeaderCartTitle>Cart</HeaderCartTitle>
      <HeaderCartCount>{count}</HeaderCartCount>
    </Link>
  );
}
