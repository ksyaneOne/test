import React, { useState } from 'react';
import { Menu, Responsive, Icon, Transition } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import useFetch from '../../../utils/useFetch';
import { HeaderNavStyle, HeaderMenuItem } from './style';

export default function HeaderNav(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const { loading, data } = useFetch('/catalog', []);

  const NavElements = data.map(item => (
    <Menu.Item
      onClick={() => setMenuVisible(!menuVisible)}
      key={item._id}
      as={Link}
      to={`/products/${item.id}`}
    >
      <HeaderMenuItem>{item.name}</HeaderMenuItem>
    </Menu.Item>
  ));

  return (
    <>
      <Responsive {...Responsive.onlyMobile}>
        <Menu fluid vertical inverted size="large">
          <Menu.Item>
            <HeaderMenuItem>
              <Icon
                name="bars"
                style={{ cursor: 'pointer' }}
                size="large"
                onClick={() => setMenuVisible(!menuVisible)}
              />
              Categories
            </HeaderMenuItem>
          </Menu.Item>
          {menuVisible && <div>{NavElements}</div>}
        </Menu>
      </Responsive>
      <HeaderNavStyle>
        <Menu fluid horisontal="true" inverted widths={10} size="large">
          {NavElements}
        </Menu>
      </HeaderNavStyle>
    </>
  );
}
