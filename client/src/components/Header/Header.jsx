import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import styled from "@emotion/styled";
import "reset-css";

const HeaderSearchInput = styled.input`
  display: none;
`;
class Header extends Component {
  state = {
    onMouse: false
  };
  openSearchInput = () => {
    document.getElementById("HeaderSearchInput").style.display = "inline-block";
  };

  render() {
    return (
      <div>
        <div>
          <Link to="/">Logotype</Link>
          <HeaderSearchInput
            type="text"
            id="HeaderSearchInput"
            display="none"
          />
          <Icon name="search" onMouseEnter={this.openSearchInput} /> Search
          <Link to="/account">
            <Icon name="user" /> My account
          </Link>
          <Link to="/cart">
            <Icon name="shopping cart" /> My cart
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/products">Moto Helmets</Link>
            </li>
            <li>
              <Link to="/products">Moto Jackets</Link>
            </li>
            <li>
              <Link to="/products">Moto Pants</Link>
            </li>
            <li>
              <Link to="/products">Moto Gloves</Link>
            </li>
            <li>
              <Link to="/products">Moto boots</Link>
            </li>
            <li>
              <Link to="/products">Accessories</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
