import React, { Component } from "react";
import { Menu, Container, Icon } from "semantic-ui-react";
import styled from "@emotion/styled";
import "./HeaderCart.css";

const HeaderCartCount = styled.div`
  cursor: pointer;
`;

export default class HeaderCart extends Component {
  state = { activeItem: "home", cartCount: 1 };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem, cartCount } = this.state;

    return (
      <div className="HeaderCart" title="My cart">
        <Icon name="shopping cart" size="large">
          <HeaderCartCount
            className={
              "HeaderCartCount " +
              (cartCount > 0 ? "HeaderCartCountShow" : "HeaderCartCountHidden")
            }
          >
            {cartCount}
          </HeaderCartCount>
        </Icon>
      </div>
    );
  }
}
