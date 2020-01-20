import React from "react";
import { Image } from "semantic-ui-react";
import Carousel from "../Carousel";
import carouselSettings from "./carouselSettings";
import "semantic-ui-css/semantic.min.css";

const CarouselSale = () => {
  const elements = [
    <Image key={111} src="static/img/sales/1.jpg" />,
    <Image key={211} src="static/img/sales/2.jpg" />,
    <Image key={311} src="static/img/sales/3.jpg" />,
  ];

  return <Carousel elements={elements} carouselSettings={carouselSettings} />;
};
export default CarouselSale;
