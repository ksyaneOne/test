import React from "react";
import Cookies from "js-cookie";

import { Grid, Segment, GridColumn, Menu, Responsive } from "semantic-ui-react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderCategories from "./HeaderCategories";
import HeaderCart from "./HeaderCart";
import HeaderAccount from "./HeaderAccount";
import HeaderNav from "./HeaderNav";
import HeaderUserPage from "./HeaderUserPage";

import HeaderWrapper from "./style";

const Header = props => {
  return (
    <HeaderWrapper>
      <Grid columns="equal" inverted verticalAlign="middle">
        <Grid.Row color="black" textAlign="center">
          <Grid.Column width="2">
            <Segment color="black" inverted>
              <HeaderLogo />
            </Segment>
          </Grid.Column>
          <Grid.Column width="6">
            <Responsive minWidth={568}>
              <Segment color="black" inverted>
                <HeaderSearch />
              </Segment>
            </Responsive>
          </Grid.Column>
          <GridColumn width="6">
            <Segment color="black" inverted>
              <Menu horisontal="true" inverted borderless>
                <Menu.Item position="right">
                  <HeaderCategories />
                </Menu.Item>
                <Menu.Item position="right">
                  {!Cookies.get("token") ? (
                    <HeaderAccount />
                  ) : (
                    <HeaderUserPage />
                  )}
                </Menu.Item>
                <Menu.Item position="right">
                  <HeaderCart />
                </Menu.Item>
              </Menu>
            </Segment>
          </GridColumn>
        </Grid.Row>
      </Grid>
      <Grid.Row color="black">
        <HeaderNav />
      </Grid.Row>
    </HeaderWrapper>
  );
};

export default Header;
