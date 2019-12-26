import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Responsive, Icon } from "semantic-ui-react";
import useFetch from "../../../utils/useFetch";

import { HeaderNavStyle, HeaderMenuItem } from "./style";

const HeaderNav = props => {
  const [menuVisible, setMenuVisible] = useState(false);

  const { data } = useFetch("/catalog", []);

  const NavElements = data.map(item => (
    <Menu.Item
      onClick={() => setMenuVisible(!menuVisible)}
      key={item._id}
      as={Link}
      to={`/categories/${item.id}`}
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
                style={{ cursor: "pointer" }}
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
};

export default HeaderNav;
