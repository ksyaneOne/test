import React, { Component } from 'react';
import ScrollButton from 'react-scroll-button';

class ScrollToTop extends Component {
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

export default ScrollToTop;
