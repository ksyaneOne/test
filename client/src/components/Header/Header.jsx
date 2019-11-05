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

export default Header;
