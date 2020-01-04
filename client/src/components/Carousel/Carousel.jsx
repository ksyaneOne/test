import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MainCarousel = props => {
  return <Carousel {...props.carouselSettings}>{props.elements}</Carousel>;
};

export default MainCarousel;
