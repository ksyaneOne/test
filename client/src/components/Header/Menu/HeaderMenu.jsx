import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "./HeaderMenu.css";

export default class HeaderMenu extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary className="HeaderMenuWrapper">
        <Container>
          <Menu.Item
            as={Link}
            to="/products"
            name="helmets"
            active={activeItem === "helmets"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/products"
            name="Moto"
            active={activeItem === "Moto"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/products"
            name="Protection"
            active={activeItem === "Protection"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/products"
            name="Raincoats"
            active={activeItem === "Raincoats"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/products"
            name="Shoes"
            active={activeItem === "Shoes"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/products"
            name="Trousers"
            active={activeItem === "Trousers"}
            onClick={this.handleItemClick}
          />
          <Menu.Item position="right">
            <Search />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}
