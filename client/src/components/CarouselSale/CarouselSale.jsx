import React from "react";
import { Image } from "semantic-ui-react";
import Carousel from "../Carousel";
import carouselSettings from "./carouselSettings";
import "semantic-ui-css/semantic.min.css";

const style = {
  margin:'0 auto'
}
const CarouselSale = () => {
  const elements = [
    <Image key={111} style={style} src="static/img/sales/1.jpg" />,
    <Image key={211} style={style} src="static/img/sales/2.jpg" />,
    <Image key={311} style={style} src="static/img/sales/3.jpg" />,
  ];

  return <Carousel elements={elements} carouselSettings={carouselSettings} />;
};
export default CarouselSale;
