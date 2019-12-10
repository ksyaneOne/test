import React from 'react';
import { Image } from 'semantic-ui-react';
import Carousel from '../Carousel';
import carouselSettings from './carouselSettings';
import 'semantic-ui-css/semantic.min.css';

const style = {
  width: '100%'
};
const CarouselSale = () => {
  const elements = [
    <Image style={style} key={111} src="static/img/sales/1.jpg" />,
    <Image style={style} key={211} src="static/img/sales/2.jpg" />,
    <Image style={style} key={311} src="static/img/sales/3.jpg" />
  ];
  return <Carousel elements={elements} carouselSettings={carouselSettings} />;
};
export default CarouselSale;
