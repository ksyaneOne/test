import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "semantic-ui-react";

import HeaderUserTitle from "./style";

const HeaderAccount = props => {
  return (
    <Link to="/account">
      <Icon name="user" size="large" title="Account" />
      <HeaderUserTitle>User</HeaderUserTitle>
    </Link>
  );
};
export default HeaderAccount;
