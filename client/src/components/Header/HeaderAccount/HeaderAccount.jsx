import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "semantic-ui-react";

import HeaderAccountTitle from "./style";

const HeaderAccount = props => {
  return (
    <Link to="/login">
      <Icon name="user" size="large" title="Account" />
      <HeaderAccountTitle>Login</HeaderAccountTitle>
    </Link>
  );
};
export default HeaderAccount;
