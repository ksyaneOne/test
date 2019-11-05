import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Menu,
  Container,
  Icon,
  Image,
  Transition
} from "semantic-ui-react";
import styled from "@emotion/styled";
import "reset-css";

class Search extends Component {
  state = { visible: false };

  toggleVisibility = () =>
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  render() {
    const { visible } = this.state;
    return (
      <Menu.Item>
        <Transition visible={visible} animation="fade left" duration={500}>
          <Input
            size="large"
            placeholder="Search..."
            content={visible ? "Hide" : "Show"}
          />
        </Transition>
        <Icon
          onClick={this.toggleVisibility}
          style={{ cursor: "pointer" }}
          name="search"
          size="large"
        ></Icon>
        Search
      </Menu.Item>
    );
  }
}

export default Search;
