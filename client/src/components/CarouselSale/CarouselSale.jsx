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
    <Image
      style={style}
      key={111}
      src="https://motokvartal.com.ua/content/images/5/47726312021618.webp"
    />,
    <Image
      style={style}
      key={211}
      src="https://motokvartal.com.ua/content/images/10/14702012566196.webp"
    />,
    <Image
      style={style}
      key={311}
      src="https://motokvartal.com.ua/content/images/41/12681968534177.jpg"
    />
  ];
  return <Carousel elements={elements} carouselSettings={carouselSettings} />;
};
export default CarouselSale;
