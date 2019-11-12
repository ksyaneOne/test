import React from 'react';

import { Link } from 'react-router-dom';

import HeaderAccountTitle from './style';

import { Icon } from 'semantic-ui-react';

function HeaderAccount(props) {
  return (
    <Link to="account">
      <Icon name="user" size="large" title="Account" />
      <HeaderAccountTitle>Account</HeaderAccountTitle>
    </Link>
  );
}

export default HeaderAccount;
