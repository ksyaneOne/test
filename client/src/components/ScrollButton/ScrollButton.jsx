import React, { Component } from "react";
import ScrollButton from "react-scroll-button";

export default class ScrollToTop extends Component {
  render() {
    return (
      <ScrollButton
        targetId="root"
        behavior="smooth"
        buttonBackgroundColor="black"
        iconType="angle-up"
        scrollSpeed="2s"
      />
    );
  }
}
