<<<<<<< HEAD
import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderCategories from './HeaderCategories';
import HeaderCart from './HeaderCart';
import HeaderAccount from './HeaderAccount';
import HeaderNav from './HeaderNav';

import { Grid, Segment, GridColumn, Menu, Responsive } from 'semantic-ui-react';
import HeaderWrapper from './style';
=======
import React, { Component } from "react";
import Topline from "./Topline";
import Search from "./Search/Search";
import HeaderMenu from "./Menu";
import HeaderCart from "./Cart";
import { Link } from "react-router-dom";
import { Menu, Container, Icon } from "semantic-ui-react";
import styled from "@emotion/styled";
import "reset-css";

const HeaderWrapper = styled.div`
  width: 100% !important;
  background-color: #b0bec5;
`;

class Header extends Component {
  state = { activeItem: "home", isLoading: false, results: [], value: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Topline />
        <HeaderWrapper>
          <Container>
            <Menu secondary>
              <Menu.Item as={Link} to="/" name="home">
                SUPER &nbsp;
                <Icon name="motorcycle" size="big" />
                MOTO
              </Menu.Item>

              <Menu.Menu position="right">
                <Menu.Item
                  as={Link}
                  to="/account"
                  name="account"
                  active={activeItem === "account"}
                  onClick={this.handleItemClick}
                >
                  <Icon name="user" size="large" title="My account" />
                  Account
                </Menu.Item>
                <Menu.Item
                  as={Link}
                  to="/cart"
                  name="cart"
                  active={activeItem === "cart"}
                  onClick={this.handleItemClick}
                >
                  <HeaderCart />
                  Cart
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Container>
          <HeaderMenu />
        </HeaderWrapper>
      </div>
    );
  }
}
>>>>>>> 00b033179361d8f7ee49fa47184ee6cd76f362c1

export default function Header(props) {
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
                  <HeaderAccount />
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
}
