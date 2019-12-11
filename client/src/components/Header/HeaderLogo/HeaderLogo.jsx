import React from 'react';

import { Link } from 'react-router-dom';

import Logo from './header_logo.png';

import HeaderLogoStyle from './style.js';

function HeaderLogo(props) {
  return (
    <Link to="/">
      <HeaderLogoStyle src={Logo} alt="Header logo" />
    </Link>
  );
}

export default HeaderLogo;
