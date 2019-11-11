import React from 'react';

import Logo from './header_logo.png';

import HeaderLogoStyle from './style.js';

function HeaderLogo(props) {
  return <HeaderLogoStyle src={Logo} alt="Header logo" />;
}

export default HeaderLogo;
