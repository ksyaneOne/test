import React from 'react';

import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import HeaderAccountTitle from './style';

function HeaderAccount(props) {
  return (
    <Link to="account">
      <Icon name="user" size="large" title="Account" />
      <HeaderAccountTitle>Account</HeaderAccountTitle>
    </Link>
  );
}

export default HeaderAccount;
